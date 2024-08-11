"use client";

import DataTable, { TableColumnIf } from "@/components/dataTable";
import ModalForm from "@/components/modalForm";
import { InputIf } from "@/components/form";
import Box from "@mui/material/Box";
import { useState } from "react";

const itemFormInputs: InputIf[] = [
    {
        type: "text",
        label: "Name",
        id: "name",
        required: true,
    },
];

const tableColumns: TableColumnIf[] = [
    {
        label: "Id",
        id: "id",
    },
    {
        label: "Name",
        id: "name",
    },
    {
        label: "Completed",
        id: "completed",
    },
];

const TodoList = () => {
    const [addNew, setAddNew] = useState(false);
    const [newItemValues, setNewItemValues] = useState<{
        [key: string]: string;
    }>({});
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleSubmit = () => {
        console.log("handle submit!!!");
    };

    //test
    return (
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
            <DataTable
                data={[]}
                setAddNewOpen={setAddNew}
                title={"To-Do List"}
                selected={selectedIds}
                setSelected={setSelectedIds}
                deleteSelected={() => {}}
                tableColumns={tableColumns}
                defaultOrderBy={"id"}
            />
            <ModalForm
                title={"Add New To-Do Item"}
                open={addNew}
                setOpen={setAddNew}
                handleSubmit={handleSubmit}
                inputs={itemFormInputs}
                values={newItemValues}
                setValues={setNewItemValues}
            />
        </Box>
    );
};

export default TodoList;
