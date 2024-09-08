import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { handleError } from "@/sharedComponents/nextApi";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: "kashley3141@gmail.com",
            },
            select: {
                name: true,
                email: true,
            },
        });
        // if the sessionToken is not valid, clearCookie and return an error
        return NextResponse.json(user);
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function POST(req: Request) {
    try {
        // Log In
        // set the session token
        cookies().set("sessionToken", "asdfasdf", {
            secure: true,
            maxAge: 86400000,
            httpOnly: true,
        });
        return NextResponse.json({
            test: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function DELETE(req: Request, res: Response) {
    try {
        // Log Out
        // clear the sessionToken
        cookies().delete("sessionToken");
        return NextResponse.json({
            test: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}
