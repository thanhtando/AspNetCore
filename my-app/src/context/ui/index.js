import React, { 
  createContext, 
  useReducer, 
  useMemo, 
  useContext 
} from "react";
import PropTypes from "prop-types";
import reducerUi from "./reducer";

// Material ui context
const UI = createContext();

// Setting custom name for the context which is visible on react dev tools
UI.displayName = "MaterialUIContext";

// Material context provider
function UIControllerProvider({ children }) {

  // ui init state
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducerUi, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <UI.Provider value={value}>{children}</UI.Provider>;
}

// custom hook for using context
function useUIController() {
  const context = useContext(UI);

  if (!context) {
    throw new Error(
      "useUIController should be used inside the UIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the UIControllerProvider
UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  UIControllerProvider,
  useUIController,
}