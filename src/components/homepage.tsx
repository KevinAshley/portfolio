"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import sacramentoSkyline from "@images/pexels-photo-12027143-cropped.jpg";
import BrandIconsGrid from "./brandIconsGrid";
import Image, { StaticImageData } from "next/image";
import Avatar from "@mui/material/Avatar";
import kevinGraySky from "@images/kevin-gray-sky.png";

const avatarSize = "150";

const Homepage = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(180deg, var(--mui-palette-backgroundOverlayGradientOne), var(--mui-palette-backgroundOverlayGradientTwo)), url(${sacramentoSkyline.src})`,
                    minHeight: "36vw",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom:
                        "1px solid var(--mui-palette-background-default)",
                    borderCollapse: "collapse",
                    marginBottom: "3rem",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        textShadow:
                            "var(--mui-palette-backgroundOverlayTextShadow)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "3rem",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Avatar
                            sx={{
                                border: `8px solid var(--mui-palette-primary-dark)`,
                                height: `${avatarSize}px`,
                                width: `${avatarSize}px`,
                            }}
                        >
                            <Image
                                src={kevinGraySky}
                                alt="kevin gray sky"
                                width={avatarSize}
                                height={avatarSize}
                            />
                        </Avatar>
                    </Box>
                    <Box>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={
                                {
                                    // mt: 5,
                                    // mb: 0.5,
                                }
                            }
                        >
                            Kevin Ashley
                        </Typography>
                        <Typography
                            component="h2"
                            variant={"h4"}
                            sx={{ textTransform: "uppercase" }}
                        >
                            Full Stack Web Developer
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Container
                sx={(theme) => ({
                    maxWidth: "md",
                    [theme.breakpoints.up("lg")]: {
                        maxWidth: "lg",
                    },
                })}
            >
                <Grid
                    container
                    spacing={2}
                    // alignItems="center"
                    // sx={{ margin: "auto" }}
                >
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography
                            component={"h2"}
                            variant="h2"
                            marginBottom={2}
                        >
                            Technology
                        </Typography>
                        <Typography component={"p"} mb={2}>
                            The languages, libraries, frameworks, APIs and
                            services.
                        </Typography>
                        <BrandIconsGrid />
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
};

export default Homepage;
