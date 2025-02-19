import { Box, Drawer } from "@mui/material";
import PropTypes from "prop-types";
import SidebarNav from "./SidebarNav";

const Sidebar = (props) => {
  const { navItems, open, variant, onClose, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: { xs: "100%", sm: 400 },
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <SidebarNav navItems={navItems} onClose={onClose} />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
  //pages: PropTypes.array.isRequired,
};

export default Sidebar;
