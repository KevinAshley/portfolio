import React, { Fragment, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BrandIconsGrid from "./homepage/brandIconsGrid";
import PortfolioItemsGrid from "./homepage/portfolioItemsGrid";
import ProjectsGrid from "./homepage/projectsGrid";
import HomepageBanner from "./homepage/homepageBanner";
import { PaddedBox, ResponsiveContainer } from "./homepage/layout";

const SectionHeading = ({ children }: { children: string }) => {
    return (
        <Typography component={"h2"} variant="h2" marginBottom={2}>
            {children}
        </Typography>
    );
};

const SectionDescription = ({ children }: { children: string }) => {
    return (
        <Typography component={"p"} mb={4}>
            {children}
        </Typography>
    );
};

const Homepage = () => {
    return (
        <Fragment>
            <HomepageBanner />
            <PaddedBox>
                <ResponsiveContainer>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <SectionHeading>Portfolio</SectionHeading>
                        <SectionDescription>
                            Demo components and source code samples.
                        </SectionDescription>
                        <PortfolioItemsGrid />
                    </Grid>
                </ResponsiveContainer>
            </PaddedBox>
            <PaddedBox
                sx={{
                    background: "rgb(129 129 129 / 15%)",
                }}
            >
                <ResponsiveContainer>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <SectionHeading>Projects</SectionHeading>
                        <SectionDescription>
                            Projects I have contributed to as a Software
                            Engineer.
                        </SectionDescription>
                        <ProjectsGrid />
                    </Grid>
                </ResponsiveContainer>
            </PaddedBox>
            <PaddedBox>
                <ResponsiveContainer>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <SectionHeading>Technology</SectionHeading>
                        <SectionDescription>
                            The languages, libraries, frameworks, APIs and
                            services I know and love.
                        </SectionDescription>
                        <BrandIconsGrid />
                    </Grid>
                </ResponsiveContainer>
            </PaddedBox>
        </Fragment>
    );
};

export default Homepage;
