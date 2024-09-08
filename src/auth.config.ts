import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // console.log("middleware", nextUrl.pathname);
            // console.log("HELLOOOOOOOO!!!! are we logged in???", auth?.user);
            // const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            // if (isOnDashboard) {
            //     if (isLoggedIn) return true;
            //     return false; // Redirect unauthenticated users to login page
            // } else if (isLoggedIn) {
            //     return Response.redirect(new URL("/dashboard", nextUrl));
            // }
            if (nextUrl.pathname.startsWith("/admin/") && !isLoggedIn) {
                return false;
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
