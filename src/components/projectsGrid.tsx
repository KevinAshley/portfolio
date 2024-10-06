import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

const projects = [
    {
        label: "iHOUSEweb",
        link: "https://www.ihouseweb.com",
    },
    {
        label: "One Day Doors & Closets",
        link: "https://onedaydoorsandclosets.com",
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
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
            })}
        >
            {projects.map((project, index) => {
                return (
                    <Box key={index}>
                        <Box
                            sx={{
                                aspectRatio: "2 / 1",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                "& > iframe": {
                                    position: "absolute",
                                    width: "300%",
                                    height: "300%",
                                    transform: "scale(0.33)",
                                },
                            }}
                        >
                            <iframe src={project.link} />
                            <Link
                                href={project.link}
                                color={"inherit"}
                                target={"_blank"}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    textDecoration: "none",
                                }}
                            >
                                &nbsp;
                            </Link>
                        </Box>
                        <Link
                            href={project.link}
                            target={"_blank"}
                            sx={{
                                display: "block",
                                marginTop: "1rem",
                            }}
                        >
                            {project.label}
                        </Link>
                    </Box>
                );
            })}
        </Box>
    );
};

export default ProjectsGrid;
