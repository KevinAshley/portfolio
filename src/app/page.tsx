"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { styled, css } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { ReactLogo, MuiLogo, NextLogo, VercelLogo } from "../components/logos";
import RoutedLink from "@/components/routedLink";
import Grid from "@mui/material/Grid";

const avatarImageHeight = 130;
const avatarImageWidth = 130;

const AvatarImage = styled(Image)({
    width: avatarImageWidth,
    height: avatarImageHeight,
    border: "5px solid var(--mui-palette-border)",
    borderRadius: "50%",
    objectFit: "cover",
});

const Home = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(0deg, var(--mui-palette-backgroundOverlayGradient), var(--mui-palette-backgroundOverlayGradient)), url(/images/pexels-photo-12027143-cropped.jpg)`,
                    minHeight: "28vw",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid var(--mui-palette-ribbon)",
                    borderCollapse: "collapse",
                }}
            >
                <Box
                    maxWidth="md"
                    textAlign={"center"}
                    sx={{
                        textShadow:
                            "var(--mui-palette-backgroundOverlayTextShadow)",
                    }}
                >
                    <AvatarImage
                        src="/images/kevin-gray-sky.png"
                        alt="kevin gray sky"
                        width={avatarImageWidth}
                        height={avatarImageHeight}
                    />
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mt: 5,
                            mb: 0.5,
                        }}
                    >
                        Kevin Ashley
                    </Typography>
                    <Typography component="p" variant={"body1"}>
                        Full Stack Web Developer
                    </Typography>
                    <Typography
                        component="p"
                        variant={"caption"}
                        sx={{
                            textShadow:
                                "var(--mui-palette-backgroundOverlayTextShadow)",
                        }}
                    >
                        Sacramento, CA
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    background: "var(--mui-palette-ribbon)",
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
                variant={"caption"}
                sx={{
                    textAlign: "center",
                    padding: "10px",
                    borderBottom: "solid var(--mui-palette-border) 1px",
                    marginBottom: "3rem",
                }}
            >
                This React.js website was built with NextJS, Material UI
                components, and&nbsp;Vercel hosting. All of the code for this
                website is available to review at{" "}
                <RoutedLink
                    href="https://github.com/KevinAshley/portfolio"
                    target="_blank"
                >
                    Github
                </RoutedLink>
                .
            </Typography>
            <Grid
                container
                maxWidth="md"
                spacing={2}
                alignItems="center"
                sx={{ margin: "auto" }}
            >
                <Grid item xs={6}>
                    <Typography component={"h2"} variant="h2" marginBottom={2}>
                        About Me
                    </Typography>
                    <Typography component={"p"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography component={"p"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Home;
