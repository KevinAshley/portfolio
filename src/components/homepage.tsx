"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import sacramentoSkyline from "@images/pexels-photo-12027143-cropped.jpg";
import BrandIconsGrid from "./brandIconsGrid";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PortfolioItemsGrid from "./portfolioItemsGrid";
import ProjectsGrid from "./projectsGrid";
import Divider from "@mui/material/Divider";

const Homepage = () => {
    return (
        <Fragment>
            <Box
                sx={(theme) => ({
                    backgroundImage: `linear-gradient(180deg, var(--mui-palette-backgroundOverlayGradientOne), var(--mui-palette-backgroundOverlayGradientTwo)), url(${sacramentoSkyline.src})`,
                    minHeight: "calc(100vh - 56px)",
                    [theme.breakpoints.up("md")]: {
                        minHeight: "calc(100vh - 64px)",
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "4rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderCollapse: "collapse",
                    position: "relative",
                    textAlign: "center",
                })}
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
                        <Typography variant="h1" component="h1">
                            Kevin Ashley
                        </Typography>
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Typography
                                    component="p"
                                    variant={"h4"}
                                    sx={{ textTransform: "uppercase" }}
                                >
                                    Software Engineer
                                </Typography>
                                <Divider
                                    sx={{
                                        borderBottomWidth: "2px",
                                        marginBottom: "3px",
                                        borderColor: "inherit",
                                    }}
                                />
                                <Typography
                                    component="p"
                                    variant={"h5"}
                                    sx={{ textTransform: "uppercase" }}
                                    mb={3}
                                >
                                    Full Stack Web&nbsp;Developer
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "1rem",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant={"outlined"}
                                size={"large"}
                                color={"inherit"}
                                startIcon={<GitHubIcon />}
                                href={"https://github.com/KevinAshley"}
                                target={"_blank"}
                            >
                                Github
                            </Button>
                            <Button
                                variant={"outlined"}
                                size={"large"}
                                color={"inherit"}
                                startIcon={<LinkedInIcon />}
                                href={
                                    "https://www.linkedin.com/in/kevin-ashley-06272969/"
                                }
                                target={"_blank"}
                            >
                                LinkedIn
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box py={10}>
                <Container
                    sx={(theme) => ({
                        maxWidth: "md",
                        [theme.breakpoints.up("lg")]: {
                            maxWidth: "lg",
                        },
                    })}
                >
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography
                            component={"h2"}
                            variant="h2"
                            marginBottom={2}
                        >
                            Portfolio
                        </Typography>
                        <Typography component={"p"} mb={4}>
                            Demo components and source code samples.
                        </Typography>
                        <PortfolioItemsGrid />
                    </Grid>
                </Container>
            </Box>
            <Box
                py={10}
                sx={{
                    background: "rgb(129 129 129 / 15%)",
                }}
            >
                <Container
                    sx={(theme) => ({
                        maxWidth: "md",
                        [theme.breakpoints.up("lg")]: {
                            maxWidth: "lg",
                        },
                    })}
                >
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography
                            component={"h2"}
                            variant="h2"
                            marginBottom={2}
                        >
                            Projects
                        </Typography>
                        <Typography component={"p"} mb={4}>
                            Projects I have contributed to as a Software
                            Engineer.
                        </Typography>
                        <ProjectsGrid />
                    </Grid>
                </Container>
            </Box>
            <Box py={10}>
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
                            <Typography component={"p"} mb={4}>
                                The languages, libraries, frameworks, APIs and
                                services I know and love.
                            </Typography>
                            <BrandIconsGrid />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    );
};

export default Homepage;
