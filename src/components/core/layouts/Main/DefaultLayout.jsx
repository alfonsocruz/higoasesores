/* eslint-disable react/prop-types */
// Material UI
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const DefaultLayout = ({
  children,
  sx,
  disablePadding = false,
  centerItems = false,
  separateItems = false,
}) => {
  const padding = disablePadding ? {} : { p: 1.5, pt: 6.5, pb: 2 };
  const center = centerItems
    ? { display: "flex", justifyContent: "center", alignItems: "center" }
    : {};
  const separate = separateItems
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }
    : {};
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: grey[200],
        ...padding,
        ...center,
        ...separate,
        flex: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultLayout;
