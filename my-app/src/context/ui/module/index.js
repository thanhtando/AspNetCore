import { UI } from "../../constant";

// Context module functions
export const setMiniSidenav = (dispatch, value) => dispatch({ type: UI.miniSideNav, value });
export const setTransparentSidenav = (dispatch, value) => dispatch({ type: UI.transSideNav, value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: UI.whiteSideNav, value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: UI.colorSideNav, value });
export const setTransparentNavbar = (dispatch, value) => dispatch({ type: UI.transNavbar, value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: UI.fixedNavbar, value });
export const setOpenConfigurator = (dispatch, value) => dispatch({ type: UI.openConfig, value });
// const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
export const setLayout = (dispatch, value) => dispatch({ type: UI.layout, value });
export const setDarkMode = (dispatch, value) => dispatch({ type: UI.darkMode, value });
