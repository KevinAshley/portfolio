import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactLogo, MuiLogo, NextLogo, VercelLogo } from "../components/logos";
import RoutedLink from "@/components/routedLink";

const Home = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(0deg, var(--mui-palette-backgroundOverlayGradient), var(--mui-palette-backgroundOverlayGradient)), url(/images/pexels-photo-12027143-cropped.jpg)`,
                    width: "100%",
                    minHeight: "28vw",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "2rem",
                    display: "flex",
                    borderBottom:
                        "1px solid var(--mui-palette-background-light)",
                    borderCollapse: "collapse",
                }}
            >
                <Box
                    sx={{
                        maxWidth: 700,
                        margin: "auto",
                        overflow: "hidden",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            textAlign: "center",
                            mt: 5,
                            mb: 0.5,
                            fontSize: {
                                xs: "2rem",
                                lg: "3rem",
                            },
                            textShadow:
                                "var(--mui-palette-backgroundOverlayTextShadow)",
                        }}
                    >
                        Kevin Ashley
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "12px",
                            marginBottom: "3rem",
                            textShadow:
                                "var(--mui-palette-backgroundOverlayTextShadow)",
                        }}
                    >
                        Sacramento, CA
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            marginBottom: "3rem",
                        }}
                    >
                        Thanks for visiting my website. Check out my{" "}
                        <RoutedLink href="/portfolio/">portfolio</RoutedLink>{" "}
                        for examples of my work. All of the code for this
                        website is available to review at github.
                    </Typography>
                    <Box sx={{ mb: 5 }}>
                        {" "}
                        <Button
                            variant="contained"
                            href="https://github.com/KevinAshley/kashley.net"
                            target="_blank"
                        >
                            Github Repo
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    background: "var(--mui-palette-background-light)",
                    textAlign: "center",
                    lineHeight: 0,
                    padding: "0.5rem",
                }}
            >
                <NextLogo />
                <ReactLogo />
                <MuiLogo />
                <VercelLogo />
            </Box>
            <Typography
                component="p"
                sx={{
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "10px",
                    borderBottom: "solid var(--mui-palette-border) 1px",
                }}
            >
                This React.js website was built with NextJS, Material UI
                components, and&nbsp;Vercel hosting.
            </Typography>
        </Fragment>
    );
};

export default Home;
