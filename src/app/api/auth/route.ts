import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getUniqueIdString, handleError } from "@/sharedComponents/nextApi";
import { cookies } from "next/headers";
import {
    createPasswordHash,
    createSessionHash,
    getUserIdFromCookies,
    jwtPrivateKey,
} from "@/sharedComponents/nextApi/authentication";
import jwt from "jsonwebtoken";
import moment from "moment";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const userId = getUserIdFromCookies();
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return NextResponse.json(user);
    } catch (error: unknown) {
        // if the sessionToken is not valid, clearCookie and return an error
        cookies().delete("sessionToken");
        return handleError(error);
    }
}

export async function POST(req: Request) {
    try {
        // NEW USER!!!
        const data = await req.json();
        return NextResponse.json({
            test: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function PATCH(req: Request) {
    try {
        // Log In
        // set the session token
        const genericFailureMessage = "Invalid email or password";
        const data = await req.json();
        const { email, password } = data;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user || createPasswordHash(password) !== user.password) {
            throw new Error(genericFailureMessage);
        }

        // create a sessionId, hash it, and save it to the db.
        const sessionId = getUniqueIdString();
        const userAgent = req.headers.get("User-Agent") || "User_Agent_Missing";
        const ip = req.headers.get("X-Forwarded-For") || "IP_address_Missing";

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                session_id: sessionId,
                session_expires: moment().add(1, "days").toDate(),
            },
        });
        // put the session ID in a JWT, and set in a cookie
        const sessionToken = jwt.sign(
            {
                userId: user.id,
                sessionHash: createSessionHash(sessionId, userAgent, ip),
            },
            jwtPrivateKey
        );

        cookies().set("sessionToken", sessionToken, {
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
