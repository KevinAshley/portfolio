"use client";
import { useContext } from "react";
import { ColumnType, TableColumnIf } from "@/sharedComponents/dataTable";
import { FormValuesIf, InputIf } from "@/sharedComponents/form";
import { apiFetchWrapper, ApiMethod } from "@/sharedComponents/nextApi";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";
import DataTable from "@/sharedComponents/dataTable";
import { UserContext } from "@/sharedComponents/contexts/userContext";
import Box from "@mui/material/Box";
import ReportIcon from "@mui/icons-material/Report";
import Typography from "@mui/material/Typography";
import {
    getTodoItems,
    createTodoItem,
    editTodoItem,
    deleteTodoItems,
} from "@/app/lib/actions/todoList";

const itemFormInputs: InputIf[] = [
    {
        type: "text",
        label: "Name",
        id: "name",
        required: true,
    },
    {
        type: "checkbox",
        label: "Completed",
        id: "completed",
        required: false,
    },
];

const tableColumns: TableColumnIf[] = [
    {
        label: "Id",
        id: "id",
        type: ColumnType.TEXT,
    },
    {
        label: "Name",
        id: "name",
        type: ColumnType.TEXT,
    },
    {
        label: "Completed",
        id: "completed",
        type: ColumnType.BOOLEAN,
    },
];

const TodoList = () => {
    const { authenticating, user } = useContext(UserContext);

    if (!user) {
        return (
            <DataTable
                tableHeading={"To-Do List"}
                tableColumns={tableColumns}
                setAddNewOpen={() => {}}
                data={[]}
                selected={[]}
                setSelected={() => {}}
                deleteSelected={() => {}}
                emptyRowsContent={
                    <Box sx={{ position: "relative" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ReportIcon
                                sx={{ fontSize: "10rem", marginBottom: "1rem" }}
                            />
                            <Typography variant={"h2"} component={"h2"} mb={2}>
                                Login Required
                            </Typography>
                            <Box>
                                Only logged-in users can use the To-Do List.
                            </Box>
                        </Box>
                    </Box>
                }
                loading={authenticating}
            />
        );
    }

    return (
        <DataTableWithModals
            tableHeading={"To-Do List"}
            singularItemLabel={"To-Do Item"}
            pluralItemsLabel={"To-Do Items"}
            tableColumns={tableColumns}
            deleteSelectedItems={deleteTodoItems}
            addItem={createTodoItem}
            editItem={editTodoItem}
            itemFormInputs={itemFormInputs}
            getItems={getTodoItems}
            key={user?.id}
            // ^ force the table to re-mount if the user changes
        />
    );
};

export default TodoList;
