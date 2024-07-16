"use client";

import { ReactNode, useState } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./navigator";
import Header from "./header";
import { Theme } from "@mui/material/styles";

function Copyright() {
    return (
        <Typography variant="body2" color="#fff" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Kevin Ashley
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}

const drawerWidth = 256;

const baseStyles = {
    flex: 1,
};

const useFooterStyles = (theme: Theme) => {
    const { palette } = theme;
    const { grey } = palette;
    return { px: 2, py: 1, bgcolor: grey["800"] };
};

export default function PageWrapper({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <CssBaseline />
            <Box component="nav">
                <Navigator
                    PaperProps={{ style: { width: drawerWidth } }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={baseStyles}>
                    {children}
                </Box>
                <Box component="footer" sx={useFooterStyles}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}
