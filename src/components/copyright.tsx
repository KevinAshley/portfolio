import Typography from "@mui/material/Typography";
import RoutedLink from "./routedLink";

export default function Copyright() {
    return (
        <Typography variant="body2" color="#fff" align="center">
            Kevin Ashley
            {" © "}
            {new Date().getFullYear()}
        </Typography>
    );
}
