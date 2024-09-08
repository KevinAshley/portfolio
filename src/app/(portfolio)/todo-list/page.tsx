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
    const { user } = useContext(UserContext);

    const getItems = () => {
        return apiFetchWrapper({
            method: ApiMethod.GET,
            uri: "/api/todo-list",
        });
    };

    const addItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: ApiMethod.POST,
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const editItem = ({
        id,
        changedValues,
    }: {
        id: number;
        changedValues: FormValuesIf;
    }) => {
        return apiFetchWrapper({
            method: ApiMethod.PATCH,
            uri: `/api/todo-list?id=${id}`,
            body: changedValues,
        });
    };

    const deleteSelectedItems = (selectedIds: number[]) => {
        return apiFetchWrapper({
            method: ApiMethod.DELETE,
            uri: "/api/todo-list",
            body: {
                ids: selectedIds,
            },
        });
    };

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
                key={0}
            />
        );
    }

    return (
        <DataTableWithModals
            tableHeading={"To-Do List"}
            singularItemLabel={"To-Do Item"}
            pluralItemsLabel={"To-Do Items"}
            tableColumns={tableColumns}
            deleteSelectedItems={deleteSelectedItems}
            addItem={addItem}
            editItem={editItem}
            itemFormInputs={itemFormInputs}
            getItems={getItems}
            key={user?.id}
            // ^ force the table to re-mount if the user changes
        />
    );
};

export default TodoList;
