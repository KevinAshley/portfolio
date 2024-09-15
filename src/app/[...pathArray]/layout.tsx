import { ReactNode, Fragment } from "react";
import SubPageWrapper from "@/sharedComponents/subPageWrapper";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    params: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    // const id = params.id;
    console.log("generateMetadata - params: ", params);

    // // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json());

    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: "TEST",
        // openGraph: {
        //     images: ["/some-specific-page-image.jpg", ...previousImages],
        // },
    };
}

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <Fragment>{children}</Fragment>;
}
