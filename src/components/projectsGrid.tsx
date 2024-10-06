import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const projects = [
    {
        label: "iHOUSEweb",
        caption: "2015 - 2023",
        link: "https://www.ihouseweb.com",
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
        description: (
            <span>
                A manufacturing and installation company specializing in door
                replacement and closet organizers
            </span>
        ),
        sandbox: "allow-scripts allow-same-origin",
    },
];

const ProjectsGrid = () => {
    const [loadIframes, setLoadIframes] = useState(false);
    const [revealedIframes, setRevealedIframes] = useState<number[]>([]);
    const observerRef = useRef();

    useEffect(() => {
        // We don't want the iframes to load until they enter the viewport!
        const callbackFunction = (entries: any) => {
            const [entry] = entries;
            const isIntersecting = entry.isIntersecting;
            if (isIntersecting) {
                setLoadIframes(true);
            }
        };
        const observedElement = observerRef.current;
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            rootMargin: "1px",
            threshold: 0.1,
        });
        if (observedElement) {
            observer.observe(observedElement);
        }
        return () => {
            if (observedElement) {
                observer.unobserve(observedElement);
            }
        };
    }, []);

    const handleIframeLoaded = (index: number) => {
        setRevealedIframes((prev) => [...prev, index]);
    };

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
            ref={observerRef}
        >
            {projects.map((project, index) => {
                const iframeIsRevealed = revealedIframes.includes(index);
                return (
                    <Card elevation={5} key={index} sx={{ height: "100%" }}>
                        <CardActionArea
                            href={project.link}
                            target={"_blank"}
                            sx={{ height: "100%" }}
                        >
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
                                        transform: "scale(0.33334)",
                                        border: "none",
                                        opacity: "0.99",
                                        pointerEvents: "none",
                                        display: iframeIsRevealed
                                            ? "block"
                                            : "none",
                                    },
                                }}
                            >
                                {!iframeIsRevealed && <CircularProgress />}
                                {loadIframes && (
                                    <iframe
                                        src={project.link}
                                        onLoad={() => handleIframeLoaded(index)}
                                        sandbox={project.sandbox}
                                    />
                                )}
                                <Box
                                    // covers the iframe
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(180deg,  transparent, rgba(0,0,0,0.3))",
                                    }}
                                >
                                    &nbsp;
                                </Box>
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
