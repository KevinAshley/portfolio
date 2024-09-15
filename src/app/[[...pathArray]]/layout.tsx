import { ReactNode, Fragment } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { allRoutes, makePageTitle } from "@/routes";

export async function generateMetadata(
    { params }: { params: { pathArray: string[] } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { pathArray = [] } = params;
    const pathname = `/${pathArray.join("/")}`;
    const matchingRoute = allRoutes.find((route) => {
        return route.path === pathname;
    });

    if (matchingRoute) {
        return {
            title: matchingRoute.pageTitle,
            description: matchingRoute.pageDescription,
        };
    }

    return {
        title: makePageTitle("404"),
        description: "Page Not Found",
    };
}

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <Fragment>{children}</Fragment>;
}
