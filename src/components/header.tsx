/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import LoginAvatar from "./loginAvatar";

function Header(props: any) {
    const { onDrawerToggle } = props;

    return (
        <React.Fragment>
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
                                onClick={onDrawerToggle}
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
                            <LoginAvatar />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
