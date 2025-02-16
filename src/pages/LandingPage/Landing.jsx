import { Box } from "@mui/material";

import ThemeProvider from "@theme/main";
import Cover from "@components/LandingPage/Cover";
import Description from "@components/LandingPage/Description";
import ActionLines from "@components/LandingPage/ActionLines";
import Contact from "@components/LandingPage/Contact";

const Landing = () => {
  return (
    <ThemeProvider>
      <Box
        id="cover"
        position="relative"
        overflow="hidden"
        width="100%"
        height="auto"
      >
        <Cover />
      </Box>

      <Box
        id="description"
        position="relative"
        overflow="hidden"
        width="100%"
        height="auto"
      >
        <Description />
      </Box>

      <Box position="relative" overflow="hidden" width="100%" height="auto">
        <ActionLines />
      </Box>

      <Box
        id="contact"
        position="relative"
        overflow="hidden"
        width="100%"
        height="auto"
      >
        <Contact />
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
