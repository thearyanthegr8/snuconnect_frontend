"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Stops } from "@prisma/client";
import { Label } from "./label";
import { Input } from "./input";
import { LoaderCircle, Plus } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  name: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  name,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [editing, setEditing] = useState<Stops>({
    id: "",
    Stop_name: "",
    lat: 0,
    long: 0,
  });
  const [loading, setLoading] = useState(false);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
  });

  async function deleteStop(id: string[]) {
    setLoading(true);
    try {
      const response = await axios.post("/api/delete-stop", {
        ids: id,
      });
      toast.success("Successfully deleted stop!");
      console.log(response.data);
    } catch (e) {
      toast.error("Failed to delete stop!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function editStop() {
    setLoading(true);
    try {
      const response = await axios.post("/api/update-stop", {
        id: editing?.id,
        name: editing?.Stop_name,
        latitude: editing?.lat,
        longitude: editing?.long,
      });
      toast.success("Successfully edited stop!");
      console.log(response.data);
    } catch (e) {
      toast.error("Failed to edit stop!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function addStop() {
    setLoading(true);
    try {
      const response = await axios.post("/api/add-stop", {
        name: editing?.Stop_name,
        latitude: editing?.lat,
        longitude: editing?.long,
      });
      toast.success("Successfully added stop!");
      console.log(response.data);
    } catch (e) {
      toast.error("Failed to add stop!");
      console.error(e);
    } finally {
      setEditing({
        id: "",
        Stop_name: "",
        lat: 0,
        long: 0,
      });
      setLoading(false);
    }
  }

  return (
    <div className="rounded-md border bg-white shadow-md">
      <div className="w-full flex justify-between h-[4rem] px-8 border-b items-center">
        <h1 className="text-lg font-bold">{name}</h1>
        <div className="flex gap-2">
          {table.getFilteredSelectedRowModel().rows.length === 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  Add a New Stop <Plus className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Stop</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      placeholder="Library Lawn"
                      value={editing?.Stop_name || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          Stop_name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Latitude
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      placeholder="123.456"
                      type="number"
                      value={editing?.lat || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          lat: parseFloat(e.target.value),
                        }));
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Longitude
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      placeholder="123.456"
                      type="number"
                      value={editing?.long || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          long: parseFloat(e.target.value),
                        }));
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => addStop()}
                    disabled={loading}
                    type="submit"
                  >
                    Add
                    {loading && (
                      <LoaderCircle className="animate-spin h-4 w-4 ml-2" />
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          {table.getFilteredSelectedRowModel().rows.length === 1 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setEditing(
                      table.getFilteredSelectedRowModel().rows[0]
                        .original as Stops
                    );
                  }}
                >
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit this stop</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue={editing?.Stop_name}
                      className="col-span-3"
                      value={editing?.Stop_name || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          Stop_name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Latitude
                    </Label>
                    <Input
                      id="name"
                      defaultValue={editing?.lat}
                      className="col-span-3"
                      type="number"
                      value={editing?.lat || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          lat: parseFloat(e.target.value),
                        }));
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Longitude
                    </Label>
                    <Input
                      id="name"
                      defaultValue={editing?.long}
                      className="col-span-3"
                      type="number"
                      value={editing?.long || ""}
                      onChange={(e) => {
                        setEditing((prev) => ({
                          ...prev,
                          long: parseFloat(e.target.value),
                        }));
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={() => editStop()} disabled={loading}>
                    {loading && (
                      <LoaderCircle className="animate-spin h-4 w-4 ml-2" />
                    )}{" "}
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"outline"}
                  onClick={() => console.log("Delete")}
                >
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    this stop from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant={"outline"}>Cancel</Button>
                  <Button
                    type="submit"
                    variant={"destructive"}
                    onClick={() => {
                      deleteStop(
                        table
                          .getFilteredSelectedRowModel()
                          .rows.map((row: any) => row.original.id)
                      );
                    }}
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex-1 text-sm text-muted-foreground py-4 px-8 w-full text-center">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  );
}
