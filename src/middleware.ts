import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { routesList } from "./routes";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log("middleware ran!");
    // return NextResponse.redirect(new URL("/home", request.url));
}

// export const config = {
//     matcher: routesList,
// };
