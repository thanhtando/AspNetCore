import React, { createContext, useContext, useReducer } from "react";

// context
const MyMaterialContext = createContext();
MyMaterialContext.displayName = MyMaterial;

// context of react reducer
const MyReducer = (state, action) => {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// hook context
export const useMyMaterial = () => {

  const context = useContext(MyMaterialContext);
  if(!context){
    throw new Error(
      "useMyMaterial should be used inside the Material"
    )
  }
}

// context of provide
const MyMaterialProvider = ({children}) => {

  const initState = {
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
  const [controller, dispatch] = useReducer(MyReducer, initState);

  return(
    <MyMaterialContext.Provider value={[controller, dispatch]}>
      {children}
    </MyMaterialContext.Provider>
  )
}

export default MyMaterialProvider;

// context module function
// Context module functions
export const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
export const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
export const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
export const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
export const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });

