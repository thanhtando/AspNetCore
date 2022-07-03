import { createTheme } from "@mui/material";
import breakpoints from '../base/breakpoints';
import colors from '../base/colors';
import { typography_dark } from "../components/typography";
import boxShadows from '../base/boxShadows';
import borders from '../base/borders';
import { rgba } from "../function";
import { boxShadow, hexToRgb, linearGradient, pxToRem, gradientChartLine } from "../function";
import globals from '../base/globals';

const {black, dark, white} = colors;
export const themeDark = createTheme({
  breakpoints: { ...breakpoints },
  palette: { 
    ...colors,
    background: {
      default: "#1a2035",
      sidenav: "#1f283e",
      card: "#202940",
    },
    text: {
      main: "#ffffffcc",
      focus: "#ffffffcc",
    },
    light: {
      main: "#f0f2f566",
      focus: "#f0f2f566",
    },
    dark: {
      main: "#323a54",
      state: "#1a2035",
    },
  },
  typography: { ...typography_dark },
  boxShadows: { ...boxShadows,
    md: `${boxShadow([0, 2], [2, 0], black.main, 0.14)}, 
         ${boxShadow([0, 3], [1, -2],black.main, 0.2)}, 
         ${boxShadow([0, 1], [5, 0], black.main, 0.12)}`,
    navbarBoxShadow: `${boxShadow([0, 0], [1, 1], dark.main, 0.9, "inset")}, 
                      ${boxShadow([0, 20], [27, 0], black.main, 0.05)}`,

  },
  borders: { 
    ...borders,
    borderColor: rgba(white.main, 0.4),
  },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
    gradientChartLine
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       ...globals,
  //       ...container,
  //     },
  //   },
  //   MuiDrawer: { ...sidenav },
  //   // MuiList: { ...list },
  //   // MuiListItem: { ...listItem },
  //   // MuiListItemText: { ...listItemText },
  //   MuiCard: { ...card },
  //   // MuiCardMedia: { ...cardMedia },
  //   // MuiCardContent: { ...cardContent },
  //   MuiButton: { ...button },
  //   MuiIconButton: { ...iconButton },
  //   MuiInput: { ...input },
  //   MuiInputLabel: { ...inputLabel },
  //   MuiOutlinedInput: { ...inputOutlined },
  //   MuiTextField: { ...textField },
  //   MuiMenu: { ...menuCom },
  //   MuiMenuItem: { ...menuItem },
  //   MuiSwitch: { ...switchButton },
  //   MuiDivider: { ...divider },
  //   MuiTableContainer: { ...tableContainer },
  //   MuiTableHead: { ...tableHead },
  //   MuiTableCell: { ...tableCell },
  //   MuiLinearProgress: { ...linearProgress },
  //   MuiBreadcrumbs: { ...breadcrumbs },
  //   // MuiSlider: { ...slider },
  //   MuiAvatar: { ...avatar },
  //   // MuiTooltip: { ...tooltip },
  //   MuiAppBar: { ...appBar },
  //   MuiTabs: { ...tabstt },
  //   MuiTab: { ...tabtt },
  //   // MuiStepper: { ...stepper },
  //   // MuiStep: { ...step },
  //   // MuiStepConnector: { ...stepConnector },
  //   // MuiStepLabel: { ...stepLabel },
  //   // MuiStepIcon: { ...stepIcon },
  //   // MuiSelect: { ...select },
  //   // MuiFormControlLabel: { ...formControlLabel },
  //   // MuiFormLabel: { ...formLabel },
  //   MuiCheckbox: { ...checkbox },
  //   // MuiRadio: { ...radio },
  //   // MuiAutocomplete: { ...autocomplete },
  //   // MuiPopover: { ...popover },
  //   // MuiButtonBase: { ...buttonBase },
  //   MuiIcon: { ...icon },
  //   // MuiSvgIcon: { ...svgIcon },
  //   MuiLink: { ...link },
  //   // MuiDialog: { ...dialog },
  //   // MuiDialogTitle: { ...dialogTitle },
  //   // MuiDialogContent: { ...dialogContent },
  //   // MuiDialogContentText: { ...dialogContentText },
  //   // MuiDialogActions: { ...dialogActions },
  // },
})