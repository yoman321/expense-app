import PropTypes from "prop-types";
import MainNavigation from "./MainNavigation";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultPropTypes = {};

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      {children}
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultPropTypes = defaultPropTypes;

export default Layout;
