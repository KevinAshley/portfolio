import { portfolioRoutesWithoutComponents } from "@/routes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import sacramentoSkyline from "@images/pexels-photo-12027143-cropped.jpg";
import Grid from "@mui/material/Grid";
import NextLink from "next/link";

const PortfolioItemsGrid = () => {
    return (
        <Grid container spacing={3}>
            {portfolioRoutesWithoutComponents.map(
                (portfolioRoute, routeIndex) => {
                    return (
                        <Grid item xs={12} sm={6} lg={3} key={routeIndex}>
                            <Card elevation={5}>
                                <CardActionArea
                                    component={NextLink}
                                    href={portfolioRoute.path}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={sacramentoSkyline.src}
                                        alt="green iguana"
                                    />
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
