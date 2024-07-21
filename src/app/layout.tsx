import type { Metadata } from "next";
import PageWrapper from "@/components/pageWrapper";
import ThemeProvider from "@/components/themeProvider";

export const metadata: Metadata = {
    title: "Kevin Ashley's Portfolio",
    description: "Kevin Ashley's full-stack web development portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeProvider>
                    <PageWrapper>{children}</PageWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
