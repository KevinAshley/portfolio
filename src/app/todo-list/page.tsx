"use client";

import DataTable, { TableColumnIf } from "@/components/dataTable";
import Box from "@mui/material/Box";
import { useState } from "react";

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
        label: "Email",
        id: "email",
    },
    {
        label: "Session Expires",
        id: "session_expires",
        date: true,
    },
];

const TodoList = () => {
    const [addNew, setAddNew] = useState(false);
    //test
    return (
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
            <DataTable
                data={[]}
                setAddNewOpen={setAddNew}
                title={"To-Do List"}
                selected={[]}
                setSelected={() => {}}
                deleteSelected={() => {}}
                tableColumns={tableColumns}
                defaultOrderBy={"id"}
            />
        </Box>
    );
};

export default TodoList;
