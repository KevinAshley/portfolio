import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ihousewebHomepageImage from "@images/ihouseweb-homepage.jpg";
import oddcHomepageImage from "@images/oddc-homepage.jpg";
import Image from "next/image";

const projects = [
    {
        label: "iHOUSEweb",
        caption: "2015 - 2023",
        link: "https://www.ihouseweb.com",
        image: ihousewebHomepageImage,
        description: (
            <span>
                A website hosting company specializing in bespoke websites for
                Real&nbsp;Estate&nbsp;Agents
            </span>
        ),
        sandbox: "",
    },
    {
        label: "One Day Doors & Closets",
        caption: "2023 - Present",
        link: "https://onedaydoorsandclosets.com",
        image: oddcHomepageImage,
        description: (
            <span>
                A manufacturing and installation company specializing in door
                replacement and closet organizers
            </span>
        ),
        sandbox: "",
    },
];

const ProjectsGrid = () => {
    return (
        <Box
            sx={(theme) => ({
                display: "grid",
                gridTemplateColumns: "1fr",
                [theme.breakpoints.up("md")]: {
                    gridTemplateColumns: "1fr 1fr",
                },
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "2rem",
            })}
        >
            {projects.map((project, index) => {
                return (
                    <Card elevation={5} key={index} sx={{ height: "100%" }}>
                        <CardActionArea
                            href={project.link}
                            target={"_blank"}
                            sx={{ height: "100%" }}
                        >
                            <Box
                                sx={{
                                    aspectRatio: "16 / 9",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    "> img": {
                                        width: "100%",
                                        height: "100%",
                                    },
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={`webpage image`}
                                    height={360}
                                    width={640}
                                    loading={"lazy"}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="h3">
                                    {project.label}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant={"caption"}
                                    component={"div"}
                                >
                                    {project.caption}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                );
            })}
        </Box>
    );
};

export default ProjectsGrid;
