'use client'
import { ThemeProvider, createTheme } from "@mui/material";
import componentOverrides from "./component";
import lightPalette from "./palette";

const AppThemeProvider = ({ children }:any) => {
  const theme = createTheme({
    components: componentOverrides,
    palette: lightPalette
  });

  return <ThemeProvider theme={theme}>
  {children}
  </ThemeProvider>;
};

export default AppThemeProvider;