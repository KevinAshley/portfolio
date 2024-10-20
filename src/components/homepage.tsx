import React, { Fragment, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BrandIconsGrid from "./homepage/brandIconsGrid";
import PortfolioItemsGrid from "./homepage/portfolioItemsGrid";
import ProjectsGrid from "./homepage/projectsGrid";
import HomepageBanner from "./homepage/homepageBanner";
import { PaddedBox, ResponsiveContainer } from "./homepage/layout";
import Box from "@mui/material/Box";

const SectionBox = ({ children }: { children: ReactNode | ReactNode[] }) => {
    return <Box sx={{ textAlign: "center" }}>{children}</Box>;
};

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
                    <SectionBox>
                        <SectionHeading>Portfolio</SectionHeading>
                        <SectionDescription>
                            Demo components and source code samples.
                        </SectionDescription>
                        <PortfolioItemsGrid />
                    </SectionBox>
                </ResponsiveContainer>
            </PaddedBox>
            <PaddedBox
                sx={{
                    background: "rgb(129 129 129 / 15%)",
                }}
            >
                <ResponsiveContainer>
                    <SectionBox>
                        <SectionHeading>Projects</SectionHeading>
                        <SectionDescription>
                            Projects I have contributed to as a Software
                            Engineer.
                        </SectionDescription>
                        <ProjectsGrid />
                    </SectionBox>
                </ResponsiveContainer>
            </PaddedBox>
            <PaddedBox>
                <ResponsiveContainer>
                    <SectionBox>
                        <SectionHeading>Technology</SectionHeading>
                        <SectionDescription>
                            The languages, libraries, frameworks, APIs and
                            services I know and love.
                        </SectionDescription>
                        <BrandIconsGrid />
                    </SectionBox>
                </ResponsiveContainer>
            </PaddedBox>
        </Fragment>
    );
};

export default Homepage;
