"use server";

import { NextResponse } from "next/server";
import { PrismaClient, TodoItem } from "@prisma/client";
import { getIdParamFromRequest, handleError } from "@/sharedComponents/nextApi";
import { getUserIdFromCookies } from "@/sharedComponents/nextApi/authentication";
const prisma = new PrismaClient();
import { auth } from "@/auth";
import { FormValuesIf } from "@/sharedComponents/form";

export async function getTodoItems() {
    try {
        const session = await auth();
        if (session?.user?.email) {
            // here we need a different solution
            // const userId = getUserIdFromCookies();
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email,
                },
            });
            if (user) {
                const todoItems = await prisma.todoItem.findMany({
                    select: {
                        id: true,
                        name: true,
                        completed: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                    where: {
                        userId: user.id,
                    },
                });
                return todoItems;
            }
        }
        throw new Error("Invalid Auth User");
    } catch (error) {
        throw error;
    }
}

export async function createTodoItem(data: FormValuesIf) {
    // const userId = getUserIdFromCookies();
    // const data = await req.json();
    const { name, completed } = data as TodoItem;
    await prisma.todoItem.create({
        data: {
            name,
            completed,
            userId: 1,
        },
    });
    return {
        success: true,
    };
}

export async function editTodoItem({
    id,
    changedValues,
}: {
    id: number;
    changedValues: FormValuesIf;
}) {
    await prisma.todoItem.update({
        where: {
            id,
        },
        data: changedValues,
    });
    return {
        success: true,
    };
}

export async function deleteTodoItems(selectedIds: number[]) {
    await prisma.todoItem.deleteMany({
        where: {
            id: {
                in: selectedIds,
            },
        },
    });
    return {
        success: true,
    };
}
