"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import LoginAvatar from "./loginAvatar";
import PaletteModeSwitch from "./paletteModeSwitch";
import Navigator from "./navigator";
import { useState } from "react";
const drawerWidth = 256;

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <React.Fragment>
            <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            />
            <AppBar
                color="primary"
                enableColorOnDark={true}
                position="sticky"
                elevation={0}
            >
                <Toolbar sx={{ pb: "8px" }}>
                    <Grid
                        container
                        maxWidth="md"
                        spacing={1}
                        alignItems="center"
                        sx={{ margin: "auto" }}
                    >
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid
                            sx={{
                                display: {
                                    // textTransform: "uppercase",
                                    fontFamily: "monospace",
                                },
                            }}
                            item
                        >
                            Kashley.net
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <PaletteModeSwitch />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
