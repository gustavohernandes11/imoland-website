import { ThemeProvider } from "styled-components";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

let darkMUITheme = createTheme(darkTheme);
darkMUITheme = responsiveFontSizes(darkMUITheme);
let lightMUITheme = responsiveFontSizes(createTheme(lightTheme));

interface ThemePropTypes {
    children?: React.ReactNode;
}

export function Theme({ children }: ThemePropTypes) {
    return <ThemeProvider theme={lightMUITheme}>{children}</ThemeProvider>;
}
