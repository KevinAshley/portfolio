import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactLogo, MuiLogo, NextLogo, VercelLogo } from "../components/logos";
import Link from "next/link";
const backgroundGradient = "rgba(0,0,0,0.7)";

const Home = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    color: "#fff",
                    backgroundImage: `linear-gradient(0deg, ${backgroundGradient}, ${backgroundGradient}), url(/images/pexels-photo-12027143-cropped.jpg)`,
                    width: "100%",
                    minHeight: "28vw",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "2rem",
                    textShadow: "0px 0px 5px black",
                    display: "flex",
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
                        }}
                    >
                        Kevin Ashley
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "12px",
                            marginBottom: "3rem",
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
                        <Link href="/portfolio/">portfolio</Link> for examples
                        of my work. All of the code for this website is
                        available to review at github.
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
                    background: "gray",
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
                    borderBottom: "solid rgba(0,0,0,0.1) 1px",
                }}
            >
                This React.js website was built with NextJS, Material UI
                components, and&nbsp;Vercel hosting.
            </Typography>
        </Fragment>
    );
};

export default Home;
