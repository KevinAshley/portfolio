import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
    const todoItems = await prisma.todoItem.findMany({
        select: {
            id: true,
            name: true,
            completed: true,
        },
    });
    return NextResponse.json(todoItems);
}
