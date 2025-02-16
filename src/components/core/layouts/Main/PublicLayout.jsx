import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import AnimatedTransition from "./AnimatedTransition";
import Sidebar from "./Sidebar/Sidebar";

const PublicLayout = ({ children }) => {
  const navItems = [
    { title: "logotipo", route: "cover", type: "image" },
    { title: "¿Qué somos?", route: "description", type: "link" },
    { title: "Líneas de acción", route: "lines", type: "link" },
    { title: "Contacto", route: "contact", type: "link" },
  ];
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <Fragment>
      <Navbar navItems={navItems} setOpenSidebar={handleOpenSidebar} />
      <Sidebar
        navItems={navItems}
        open={openSidebar}
        variant="temporary"
        onClose={handleOpenSidebar}
      />
      <AnimatedTransition>{children}</AnimatedTransition>
    </Fragment>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node,
};

export default PublicLayout;
