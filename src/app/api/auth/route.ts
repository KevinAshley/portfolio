// import { NextResponse } from "next/server";
// import { PrismaClient, User } from "@prisma/client";
// import { getUniqueIdString, handleError } from "@/sharedComponents/nextApi";
// import { cookies } from "next/headers";
// import {
//     createPasswordHash,
//     createSessionHash,
//     getUserIdFromCookies,
//     jwtPrivateKey,
// } from "@/sharedComponents/nextApi/authentication";
// import jwt from "jsonwebtoken";
// import moment from "moment";

// const prisma = new PrismaClient();

// export async function GET(req: Request) {
//     try {
//         const userId = getUserIdFromCookies();
//         const user = await prisma.user.findUnique({
//             where: {
//                 id: userId,
//             },
//         });
//         return NextResponse.json(user);
//     } catch (error: unknown) {
//         // if the sessionToken is not valid, clearCookie and return an error
//         cookies().delete("sessionToken");
//         return handleError(error);
//     }
// }

// const setUserSession = async ({ req, user }: { req: Request; user: User }) => {
//     // create a sessionId, hash it, save to db, and set JWT
//     return new Promise(async (resolve, reject) => {
//         try {
//             const sessionId = getUniqueIdString();
//             const userAgent =
//                 req.headers.get("User-Agent") || "User_Agent_Missing";
//             const ip =
//                 req.headers.get("X-Forwarded-For") || "IP_address_Missing";

//             await prisma.user.update({
//                 where: {
//                     id: user.id,
//                 },
//                 data: {
//                     session_id: sessionId,
//                     session_expires: moment().add(1, "days").toDate(),
//                 },
//             });
//             // put the session ID in a JWT, and set in a cookie
//             const sessionToken = jwt.sign(
//                 {
//                     userId: user.id,
//                     sessionHash: createSessionHash(sessionId, userAgent, ip),
//                 },
//                 jwtPrivateKey
//             );
//             cookies().set("sessionToken", sessionToken, {
//                 secure: true,
//                 maxAge: 86400000,
//                 httpOnly: true,
//             });
//             resolve(true);
//         } catch (e: any) {
//             reject(e.message);
//         }
//     });
// };

// export async function POST(req: Request) {
//     try {
//         // New User Signup
//         const data = await req.json();
//         const { name, email, password } = data;
//         const user = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 password: createPasswordHash(password),
//             },
//         });
//         await setUserSession({ req, user });
//         return NextResponse.json({
//             test: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }

// export async function PATCH(req: Request) {
//     try {
//         // Log In
//         const genericFailureMessage = "Invalid email or password";
//         const data = await req.json();
//         const { email, password } = data;
//         const user = await prisma.user.findUnique({
//             where: {
//                 email,
//             },
//         });
//         if (!user || createPasswordHash(password) !== user.password) {
//             throw new Error(genericFailureMessage);
//         }
//         await setUserSession({ req, user });
//         return NextResponse.json({
//             test: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }

// export async function DELETE(req: Request, res: Response) {
//     try {
//         // Log Out
//         cookies().delete("sessionToken");
//         return NextResponse.json({
//             test: true,
//         });
//     } catch (error: unknown) {
//         return handleError(error);
//     }
// }
