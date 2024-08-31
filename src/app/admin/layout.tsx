import { ReactNode } from "react";
import SubPageWrapper from "@/sharedComponents/subPageWrapper";

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <SubPageWrapper>{children}</SubPageWrapper>;
}
