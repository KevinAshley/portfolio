import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useEffect, useRef, useState } from "react";

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
        if (index == 0) {
            setTimeout(() => {
                // This is an ugly hack, to avoid a scroll position jump when the
                // chat widget inside the iHOUSEweb site loads in.
                setRevealedIframes((prev) => [...prev, index]);
            }, 7000);
        } else {
            setRevealedIframes((prev) => [...prev, index]);
        }
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
                                        pointerEvents: "none",
                                        display: iframeIsRevealed
                                            ? "block"
                                            : "none",
                                    },
                                }}
                            >
                                {loadIframes && (
                                    <iframe
                                        src={project.link}
                                        onLoad={() => handleIframeLoaded(index)}
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
