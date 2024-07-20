import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const PaletteModeSwitch = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="contained"
            onClick={() => {
                if (mode === "light") {
                    setMode("dark");
                } else {
                    setMode("light");
                }
            }}
        >
            {mode === "light" ? "Dark" : "Light"}
        </Button>
    );
};

export default PaletteModeSwitch;
