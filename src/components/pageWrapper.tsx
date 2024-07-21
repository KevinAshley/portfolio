import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Header from "./header";
import { grey } from "@mui/material/colors";
import Copyright from "./copyright";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                    }}
                >
                    {children}
                </Box>
                <Box
                    component="footer"
                    sx={{ px: 2, py: 1, bgcolor: grey["800"] }}
                >
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}
