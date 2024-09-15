import { notFound } from "next/navigation";
import { allRoutes } from "@/routes";
import { Fragment } from "react";

export async function generateStaticParams() {
    return allRoutes.map((item) => ({
        pathArray: item.path.substring(1).split("/"),
        // trim off the leading slash, then split the segments
        // to match the NextJS logic for dynamic routes
    }));
    // The point is to force NextJS to build these pages
}

const PageSwitch = (props: any) => {
    const {
        params: { pathArray = [] },
    } = props;
    const pathname = `/${pathArray.join("/")}`;
    const matchingRoute = allRoutes.find((route) => {
        return route.path === pathname;
    });
    if (matchingRoute) {
        const PageComponent = matchingRoute.component;
        const ComponentWrapper = matchingRoute.componentWrapper || Fragment;
        return (
            <ComponentWrapper>
                <PageComponent />
            </ComponentWrapper>
        );
    }
    return notFound();
};

export default PageSwitch;
