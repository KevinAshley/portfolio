"use client";
import { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";

import { palleteModeType, ThemeContext } from "./themeProvider";

const PaletteModeSwitch = () => {
    const { paletteMode, setPaletteMode } = useContext(ThemeContext);

    const handlePaletteModeChange = (e: any, newValue: palleteModeType) => {
        setPaletteMode(newValue);
    };

    return (
        <ToggleButtonGroup
            value={paletteMode}
            onChange={handlePaletteModeChange}
            exclusive
            aria-label="palette-mode"
        >
            <ToggleButton value="dark" aria-label="dark">
                <Brightness4Icon />
            </ToggleButton>
            <ToggleButton value="auto" aria-label="auto">
                <BrightnessAutoIcon />
            </ToggleButton>
            <ToggleButton value="light" aria-label="light">
                <Brightness7Icon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default PaletteModeSwitch;
