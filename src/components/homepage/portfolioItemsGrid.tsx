import { portfolioRoutesWithoutComponents } from "@/routes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import codePhoto from "@images/pexels-markusspiske-965345.jpg";
import Grid from "@mui/material/Grid";
import NextLink from "next/link";
import Image from "next/image";

const PortfolioItemsGrid = () => {
    return (
        <Grid container spacing={3}>
            {portfolioRoutesWithoutComponents.map(
                (portfolioRoute, routeIndex) => {
                    const CardIcon = portfolioRoute.icon;
                    return (
                        <Grid item xs={12} sm={6} lg={3} key={routeIndex}>
                            <Card elevation={5}>
                                <CardActionArea
                                    component={NextLink}
                                    href={portfolioRoute.path}
                                >
                                    <CardMedia
                                        component={"div"}
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            "& img": {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                opacity: 0.2,
                                            },
                                        }}
                                    >
                                        <Image
                                            src={codePhoto.src}
                                            alt={`Code Image`}
                                            width={300}
                                            height={150}
                                        />
                                        <CardIcon
                                            sx={{
                                                fontSize: "4rem",
                                                position: "absolute",
                                            }}
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {portfolioRoute.label}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            {portfolioRoute.pageDescription}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        size="small"
                                        color="primary"
                                        component={NextLink}
                                        href={portfolioRoute.path}
                                    >
                                        Demo
                                    </Button>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href={portfolioRoute.github as string}
                                        target={"_blank"}
                                    >
                                        Source
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                }
            )}
        </Grid>
    );
};

export default PortfolioItemsGrid;
