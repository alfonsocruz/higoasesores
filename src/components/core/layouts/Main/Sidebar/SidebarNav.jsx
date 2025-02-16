import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";
import { Link as ScrollLink } from "react-scroll";
import Logo from "@assets/img/Logo.png";

const SidebarNav = ({ onClose, navItems }) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box paddingX={2} paddingBottom={2}>
        {navItems.map((item, i) =>
          item.type === "image" ? (
            <ScrollLink
              to={item.route}
              key={i}
              style={{ textDecoration: "none" }}
            >
              <Box
                display={"flex"}
                alignItems="baseline"
                justifyContent="center"
                underline="none"
                width={"100%"}
                marginBottom={4}
                key={i}
              >
                <img width={"30%"} src={Logo} alt="gtologo" />
              </Box>
            </ScrollLink>
          ) : (
            <ScrollLink
              to={item.route}
              key={i}
              style={{ textDecoration: "none" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  color: blue[900],
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Box>
            </ScrollLink>
          )
        )}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  navItems: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
