import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={"100%"}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4, sm: 3, md: 3 }}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
