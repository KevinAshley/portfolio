"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import sacramentoSkyline from "@images/pexels-photo-12027143-cropped.jpg";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

const HomepageBanner = () => {
    return (
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
    );
};

export default HomepageBanner;
