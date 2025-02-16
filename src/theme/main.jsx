import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { createTheme, CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

//
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import customShadows from "./customShadows";
//import componentsOverride from "./overrides/index";
import GlobalStyles from "./globalStyles.jsx";
import ComponentsOverrides from "./overrides";
import { useSettingsContext } from "@contexts/SettingsContext";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { themeMode } = useSettingsContext();

  const themeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shape: { borderRadius: 8 },
      direction: "ltr",
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
