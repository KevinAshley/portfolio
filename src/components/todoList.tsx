import { ColumnType, TableColumnIf } from "@/sharedComponents/dataTable";
import { InputIf } from "@/sharedComponents/form";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";
import {
    getTodoItems,
    addTodoItem,
    editTodoItem,
    deleteTodoItems,
} from "@/sharedComponents/lib/actions/todoList";
import { Fragment } from "react";
import PortfolioItemHeader from "@/components/portfolioItemHeader";

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
    return (
        <Fragment>
            <PortfolioItemHeader />
            <DataTableWithModals
                tableHeading={"To-Do List"}
                singularItemLabel={"To-Do Item"}
                pluralItemsLabel={"To-Do Items"}
                tableColumns={tableColumns}
                deleteSelectedItems={deleteTodoItems}
                addItem={addTodoItem}
                editItem={editTodoItem}
                itemFormInputs={itemFormInputs}
                getItems={getTodoItems}
            />
        </Fragment>
    );
};

export default TodoList;
