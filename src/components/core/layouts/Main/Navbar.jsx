import { Fragment } from "react";
import PropTypes from "prop-types";
// import { ScrollLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// Material UI
import { AppBar, Toolbar, IconButton, Box, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Logo from "@assets/img/Logo.png";

const Navbar = ({ navItems = [], setOpenSidebar = () => {} }) => {
  return (
    <Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            component="nav"
            sx={{ minHeight: { xs: 52 }, justifyContent: "center" }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                py: 1,
                width: "100%",
              }}
            >
              {navItems.map((item, index) =>
                item.type === "image" ? (
                  <Fragment key={index}>
                    <ScrollLink
                      to={item.route}
                      style={{ display: "flex", alignItems: "center" }}
                      // smooth
                      // offset={-100}
                    >
                      <img
                        src={Logo}
                        loading="lazy"
                        alt={"logo_alt"}
                        style={{ maxHeight: "50px", cursor: "pointer" }}
                      />
                    </ScrollLink>

                    <Box sx={{ flexGrow: 1 }} />
                  </Fragment>
                ) : (
                  <ScrollLink
                    key={index}
                    to={item.route}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      fontWeight: 700,
                      fontSize: 14,
                      transition: "all 200ms ease",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        transition: "all 200ms ease",
                        "&:hover": {
                          color: "var(--logoColor)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {item.iconDesktop || item.title}
                    </Box>
                  </ScrollLink>
                )
              )}
            </Box>

            {/* Navegación móvil */}
            <Box sx={{ display: { xs: "flex", md: "none" }, py: 1 }}>
              <ScrollLink
                to="/"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={Logo}
                  loading="lazy"
                  alt={"logo_alt"}
                  style={{ maxHeight: "25px", cursor: "pointer" }}
                />
              </ScrollLink>
            </Box>

            {/* Separación */}
            <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

            {/* Botón del menú para dispositivos móviles */}
            <IconButton
              edge="start"
              aria-label={"menu"}
              onClick={setOpenSidebar}
              sx={{
                display: { xs: "flex", md: "none" },
                "&:focus-visible": { outline: "none" },
                "&:focus": { outline: "none" },
              }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

Navbar.propTypes = {
  navItems: PropTypes.array,
  setOpenSidebar: PropTypes.func.isRequired,
};
export default Navbar;
