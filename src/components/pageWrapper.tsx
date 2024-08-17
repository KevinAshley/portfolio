import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Header from "./header";
import Footer from "./footer";
import { mainRoutes, portfolioRoutes } from "../routes";
import { RouteGroupIf } from "./navigator";

const groupedRoutes: RouteGroupIf[] = [
    {
        routes: [...mainRoutes],
    },
    {
        // id: "Portfolio",
        routes: [...portfolioRoutes],
        // href: "/portfolio/",
    },
];

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header
                    groupedRoutes={groupedRoutes}
                    headerText={"Kevin Ashley"}
                />
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                    }}
                >
                    {children}
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
