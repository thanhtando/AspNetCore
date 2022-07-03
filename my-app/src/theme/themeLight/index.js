import { createTheme } from "@mui/material";
import breakpoints from '../base/breakpoints';
import colors from '../base/colors';
import { typography } from "../components/typography";
import borders from '../base/borders';
import { rgba } from "../function";
import { boxShadow, hexToRgb, linearGradient, pxToRem, gradientChartLine } from "../function";
import globals from '../base/globals';
import container from "../components/container";
import card from "../components/card";
import button from "../components/button";
import sidenav from "../components/sidenav";
import iconButton from '../components/iconButton';
import input from '../components/input';
import inputLabel from '../components/inputLabel';
import inputOutlined from '../components/inputOutlined';
import textField from '../components/textField';
import menuCom from '../components/menuCom';
import menuItem from '../components/menuItem';
import switchButton from '../components/switchButton';
import divider from '../components/divider';
import tableContainer from '../components/tableContainer';
import tableHead from '../components/tableHead';
import tableCell from '../components/tableCell';
import linearProgress from '../components/linearProgress';
import breadcrumbs from '../components/breadcrumbs';
import avatar from '../components/avatar';
import appBar from '../components/appBar';
import tabstt from '../components/tabstt';
import tabtt from '../components/tabtt';
import checkbox from '../components/checkbox';
import icon from '../components/icon';
import link from '../components/link';
const {black, white, grey} = colors
export const themeLight = createTheme({
  breakpoints: { ...breakpoints },
  palette: { 
    ...colors,
    background: {
      default: "#f0f2f5",
    },
    text: {
      main: "#7b809a",
      focus: "#7b809a",
    },
    light: {
      main: "#f0f2f5",
      focus: "#f0f2f5",
    },
    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },
  typography: { ...typography },
  boxShadows: { ...boxShadow,
    md: `${boxShadow([0, 4], [6, -1], black.main, 0.1)}, 
         ${boxShadow([0, 2], [4, -1], black.main, 0.06)}`,
    navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, 
                      ${boxShadow([0, 20],[27, 0], black.main, 0.05 )}`,
  },
  borders: { 
    ...borders,
    borderColor: grey[300],
  },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
    gradientChartLine
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    // MuiList: { ...list },
    // MuiListItem: { ...listItem },
    // MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    // MuiCardMedia: { ...cardMedia },
    // MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menuCom },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    // MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabstt },
    MuiTab: { ...tabtt },
    // MuiStepper: { ...stepper },
    // MuiStep: { ...step },
    // MuiStepConnector: { ...stepConnector },
    // MuiStepLabel: { ...stepLabel },
    // MuiStepIcon: { ...stepIcon },
    // MuiSelect: { ...select },
    // MuiFormControlLabel: { ...formControlLabel },
    // MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    // MuiRadio: { ...radio },
    // MuiAutocomplete: { ...autocomplete },
    // MuiPopover: { ...popover },
    // MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    // MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    // MuiDialog: { ...dialog },
    // MuiDialogTitle: { ...dialogTitle },
    // MuiDialogContent: { ...dialogContent },
    // MuiDialogContentText: { ...dialogContentText },
    // MuiDialogActions: { ...dialogActions },
  },
});