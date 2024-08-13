"use client";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Stops } from "@prisma/client";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Container from "@/components/container/container";
import Items from "@/components/item/item";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, Plus } from "lucide-react";
import axios from "axios";

type DNDType = {
  id: UniqueIdentifier;
  title: string;
  stops: Stops[];
};

function Page() {
  const [containers, setContainers] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentContainerId, setCurrentContainerId] =
    useState<UniqueIdentifier>();
  const [containerName, setContainerName] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  async function getAllRoutes() {
    const response = await axios.get("/api/route");
    if (response.data.length === 0) return;
    else {
      const data = response.data.map((item: any) => {
        return {
          id: item.id,
          route_name: item.route_name,
          stops: item.RouteStops || [],
        };
      });
      console.log(data);
      setContainers(data);
    }
    setPageLoading(false);
  }

  useEffect(() => {
    getAllRoutes();
  }, []);

  async function onAddContainer() {
    if (!containerName) return;
    setLoading(true);
    try {
      const response = await axios.post("/api/route/add", {
        route_name: containerName,
      });

      console.log(response);

      setContainers([
        ...containers,
        {
          id: response.data.id,
          route_name: containerName,
          stops: [],
        },
      ]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setContainerName("");
    }
  }

  // Find the value of the items
  function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item: any) => item.id === id)
      );
    }
  }

  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "item");
    if (!container) return "";
    const item = container.items.find((item: any) => item.id === id);
    if (!item) return "";
    return item.title;
  };

  const findContainerTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    if (!container) return "";
    return container.title;
  };

  const findContainerItems = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    if (!container) return [];
    return container.items;
  };

  // DND Handlers
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;

    // Handle Items Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active container and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item: any) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item: any) => item.id === over.id
      );
      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex
        );

        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem
        );
        setContainers(newItems);
      }
    }

    // Handling Item Drop Into a Container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item: any) => item.id === active.id
      );

      // Remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
  };

  // This is the function that handles the sorting of the containers and items when the user is done dragging.
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // Handling Container Sorting
    if (
      active.id.toString().includes("container") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id
      );
      // Swap the active and over container
      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    // Handling item Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item: any) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item: any) => item.id === over.id
      );

      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex
        );
        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem
        );
        setContainers(newItems);
      }
    }
    // Handling item dropping into Container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item: any) => item.id === active.id
      );

      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
    setActiveId(null);
  }

  return (
    <div>
      <Dialog
        open={showAddContainerModal}
        onOpenChange={setShowAddContainerModal}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make a new Route</DialogTitle>
            <DialogDescription>
              Allows you to define a new route by selecting, dragging and
              dropping stops as per your wish.
            </DialogDescription>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Route Name"
            name="containername"
            value={containerName}
            onChange={(e) => setContainerName(e.target.value)}
          />
          <Button onClick={onAddContainer}>
            Add container <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogContent>
      </Dialog>
      <div className="w-full flex justify-between h-[4rem] px-8 border-b items-center">
        <h1 className="text-lg font-bold">Route</h1>
        <Button onClick={() => setShowAddContainerModal(true)}>
          Add a New Route <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <hr />
      {pageLoading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="spinner spinner-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={containers.map((i) => i.id)}>
              {containers?.map((container) => (
                <Container
                  id={container.id}
                  title={container.route_name}
                  key={container.id}
                  onAddItem={() => {
                    setShowAddItemModal(true);
                    setCurrentContainerId(container.id);
                  }}
                >
                  <SortableContext
                    items={container.stops?.map(
                      (index: number) => `${container.id}-${index}`
                    )}
                  >
                    <div className="flex items-start flex-col gap-y-4">
                      {container.stops?.map((i: any, index: number) => (
                        <Items
                          title={i.stops.Stop_name}
                          id={`${container.id}-${index}`}
                          key={`${container.id}-${index}`}
                          deleteItem={() => {}}
                        />
                      ))}
                    </div>
                  </SortableContext>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost">Add a stop</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </Container>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  );
}

export default Page;
