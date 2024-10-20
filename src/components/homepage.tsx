"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BrandIconsGrid from "./brandIconsGrid";
import PortfolioItemsGrid from "./portfolioItemsGrid";
import ProjectsGrid from "./projectsGrid";
import HomepageBanner from "./homepageBanner";

const Homepage = () => {
    return (
        <Fragment>
            <HomepageBanner />
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
