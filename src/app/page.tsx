"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { styled, css } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { ReactLogo, MuiLogo, NextLogo, VercelLogo } from "../components/logos";
import RoutedLink from "@/components/routedLink";

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
                <Box maxWidth="md" textAlign={"center"}>
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
                            textShadow:
                                "var(--mui-palette-backgroundOverlayTextShadow)",
                        }}
                    >
                        Full Stack Web Developer
                        <br />
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
                sx={{
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "10px",
                    borderBottom: "solid var(--mui-palette-border) 1px",
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
        </Fragment>
    );
};

export default Home;
