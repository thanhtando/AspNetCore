
//context module state
export const setMiniSidenav = (dispatch, value) => dispatch({ type: ContextConstant.MINI, value });
export const setTransparentSidenav = (dispatch, value) => dispatch({ type: ContextConstant.TRANSPARENT_SIDENAV, value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: ContextConstant.WHITE, value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: ContextConstant.COLOR, value });
export const setTransparentNavbar = (dispatch, value) => dispatch({ type: ContextConstant.TRANSPARENT_NAVBAR, value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: ContextConstant.FIXED, value });
export const setOpenConfigurator = (dispatch, value) => dispatch({ type: ContextConstant.OPEN_CONFIG, value });
export const setDirection = (dispatch, value) => dispatch({ type: ContextConstant.DIRECTION, value });
export const setLayout = (dispatch, value) => dispatch({ type: ContextConstant.LAYOUT, value });
export const setDarkMode = (dispatch, value) => dispatch({ type: ContextConstant.DARK_MODE, value });

const MaterialUIProvider = ({children}) => {
  const initState = {
    miniSidenav: false,             //mini
    transparentSidenav: false,      //trong suot
    whiteSidenav: false,
    sidenavColor: "info",
    fixedNavbar: true,              //固定
    openConfigurator: false,
    direction: "rtl",              //方向
    layout: "dashboard",
    darMode: false,
  }
  const [controller, dispatch] = useReducer(ContextReducer, initState);

  return<MyMaterial.Provider value={[controller, dispatch]}>{children}</MyMaterial.Provider>
}
export default MaterialUIProvider;