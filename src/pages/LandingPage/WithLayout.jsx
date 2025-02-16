import { useEffect } from "react";
import PropTypes from "prop-types";

import { Paper, useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AOS from "aos";
import "aos/dist/aos.css";
import { getTheme } from "@theme";

const WithLayout = ({ page: Component, layout: Layout }) => {
  document.title = window.location.hostname;
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <CssBaseline />
      <Paper
        elevation={0}
        sx={{ backgroundColor: theme.palette.primary.lighter }}
      >
        <Layout>
          <Component />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
};

WithLayout.propTypes = {
  page: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};
export default WithLayout;
