import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const RouteWrapper = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Check if the path is exactly "/pl" or any other language code you support
    if (path.match(/^\/[a-z]{2}$/)) {
      // Redirect to the same path with a trailing slash if it doesn't have one
      history.push(`${path}/`);
    } else if (path.match(/^\/[a-z]{2}\/.+/) && path.endsWith("/")) {
      // If it's a subpage and ends with a slash, remove the trailing slash
      history.push(path.slice(0, -1));
    }
    // Depend on location.pathname to rerun effect when path changes
  }, [location.pathname, history]);

  return children;
};

export default RouteWrapper;
