// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import { getIdParamFromRequest, handleError } from "@/sharedComponents/nextApi";
// import { getUserIdFromCookies } from "@/sharedComponents/nextApi/authentication";
// const prisma = new PrismaClient();

// export async function GET(req: Request) {
//     try {
//         // here we need a different solution
//         const userId = getUserIdFromCookies();
//         const todoItems = await prisma.todoItem.findMany({
//             select: {
//                 id: true,
//                 name: true,
//                 completed: true,
//                 createdAt: true,
//                 updatedAt: true,
//             },
//             where: {
//                 userId,
//             },
//         });
//         return NextResponse.json(todoItems);
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }

// export async function POST(req: Request) {
//     try {
//         const userId = getUserIdFromCookies();
//         const data = await req.json();
//         const { name, completed } = data;
//         await prisma.todoItem.create({
//             data: {
//                 name,
//                 completed,
//                 userId,
//             },
//         });
//         return NextResponse.json({
//             success: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }

// export async function PATCH(req: Request) {
//     try {
//         const data = await req.json();
//         const id = getIdParamFromRequest(req);
//         await prisma.todoItem.update({
//             where: {
//                 id,
//             },
//             data,
//         });
//         return NextResponse.json({
//             success: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }

// export async function DELETE(req: Request) {
//     try {
//         const data = await req.json();
//         await prisma.todoItem.deleteMany({
//             where: {
//                 id: {
//                     in: data.ids,
//                 },
//             },
//         });
//         return NextResponse.json({
//             success: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }
