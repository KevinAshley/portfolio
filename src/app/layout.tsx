import type { Metadata } from "next";
import PageWrapper from "@/sharedComponents/pageWrapper";
import ThemeProvider from "@/sharedComponents/themeProvider";
import MainContextProvider from "@/sharedComponents/contexts/mainContext";
import Toast from "@/sharedComponents/toast";
import { RouteGroupIf } from "@/sharedComponents/navigator";
import theme from "../theme";
import { mainRoutes, portfolioRoutes } from "../routes";

export const metadata: Metadata = {
    title: "Kevin Ashley's Portfolio",
    description: "Kevin Ashley's full-stack web development portfolio",
};

const groupedRoutes: RouteGroupIf[] = [
    {
        routes: [...mainRoutes],
    },
    {
        routes: [...portfolioRoutes],
    },
];

const websiteName = "Kevin Ashley";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeProvider theme={theme}>
                    <MainContextProvider>
                        <PageWrapper
                            groupedRoutes={groupedRoutes}
                            websiteName={websiteName}
                        >
                            {children}
                        </PageWrapper>
                        <Toast />
                    </MainContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
