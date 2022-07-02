import { UI } from '../../constant/index';
// Material reducer
function reducerUi(state, action) {
  switch (action.type) {
    case UI.miniSideNav: {
      return { ...state, miniSidenav: action.value };
    }
    case UI.transSideNav: {
      return { ...state, transparentSidenav: action.value };
    }
    case UI.whiteSideNav: {
      return { ...state, whiteSidenav: action.value };
    }
    case UI.colorSideNav: {
      return { ...state, sidenavColor: action.value };
    }
    case UI.transNavbar: {
      return { ...state, transparentNavbar: action.value };
    }
    case UI.fixedNavbar: {
      return { ...state, fixedNavbar: action.value };
    }
    case UI.openConfig: {
      return { ...state, openConfigurator: action.value };
    }
    case UI.direction: {
      return { ...state, direction: action.value };
    }
    case UI.layout: {
      return { ...state, layout: action.value };
    }
    case UI.darkMode: {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducerUi;