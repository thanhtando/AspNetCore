import React, { createContext, useContext, useMemo, useReducer } from "react";
import UiReducer from "./reducer";

// context
const UiContext = createContext();
UiContext.displayName = "MyUi";

// hook context
export const useUi = () => {

  const context = useContext(UiContext);
  if(!context){
    throw new Error(
      "useMyMaterial should be used inside the Material"
    )
  }
}

// context of provide
const UiProvider = ({children}) => {

  const UiInit = {
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
  }
  const [controller, dispatch] = useReducer(UiReducer, UiInit)
  const value = useMemo(()=>[controller, dispatch],[controller, dispatch]);
  return(
    <UiContext.Provider value={value}>
      {children}
    </UiContext.Provider>
  )
}
export default UiProvider;

// Context module functions
// export const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
// export const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
// export const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
// export const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
// export const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
// export const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
// export const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
// export const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
// export const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
// export const setDarkMode = (dispatch, value) => dispatch({ type: "DARK_MODE", value });

