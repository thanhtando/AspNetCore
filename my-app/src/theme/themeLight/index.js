import { createTheme } from "@mui/material";
import borders from "../base/borders";
import breakpoints from "../base/breakpoints";
import colors from "../base/colors";
import { typography } from "../components/typography";
import { boxShadow, hexToRgb, linearGradient, pxToRem, gradientChartLine, rgba } from "../function";
import globals from '../base/globals';

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
});