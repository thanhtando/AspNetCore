const navbarContainer = ({ breakpoints }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});
const navbarRow = ({breakpoints},{isMini})=>({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  [breakpoints.up("md")]:{
    justifyContent: isMini?"space-between": "stretch",
    width: isMini?"100%": "max-content",
  },
  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
})
const navbarIconBtn = ({typography:{size}, breakpoints}) => ({
  px: 1,
  "& .material-icon, .material-icon-round": { fontSize: `${size.xl}!important`},
  "& .MuiTypography-root":{
    display: "none",
    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  }
})
const navbarMobileMenu = ({breakpoints}) => ({
  display: "inline-block",
  lineHeight: 0,
  [breakpoints.up("xl")]:{
    display: "none"
  }
})
function navbar(theme, ownerState){

  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light, darkMode } = ownerState;

  const { dark, white, text, transparent, background } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  let boxShadowValue = transparentNavbar || absolute 
    ? "none"
    : navbarBoxShadow;

  let backgroundColorValue = transparentNavbar || absolute 
    ? `${transparent.main} !important`
    : rgba(darkMode?background.default:white.main, 0.8);
  
  let backdropFilterValue = transparentNavbar || absolute 
  ? "none"
  : `saturate(200%) blur(${pxToRem(50)})`;
    // blur()       : lm mo, mo ho
    // brightness() : do sang
    // contrast()   : tuong phan
    // drop-shadow(): bong
    // grayscale()  : thang do xam
    // hue-rotate() : xoay mau
    // invert()     : 
    // opacity()  
    // saturate()   : bao hoa
    // sepia()      : nau do
    // url() – (for applying SVG filters): dung cho svg
  
  let colorValue = dark.main;
  if (light) {
    colorValue = white.main;
  } else if (transparentNavbar) {
    colorValue = text.main;
  } else {
    colorValue = dark.main;
  }


  return{
    boxShadow: boxShadowValue,
    backgroundColor: backgroundColorValue,
    backdropFilter: backdropFilterValue,
    color: colorValue,
    opacity: 1,
    top: absolute ? 0 : pxToRem(12),
    minHeight: pxToRem(75),
    display: "grid",
    alignItems: "center",
    borderRadius: borderRadius.xl,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,
    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  }
}
const NavbarMenuItem = (theme) => {

  const { palette, borders, transitions} = theme;

  const { secondary, light, dark } = palette;
  const { borderRadius } = borders;

  return{
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: secondary.main,
    borderRadius: borderRadius.md,
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& *": {
      transition: "color 100ms linear",
    },

    "&:not(:last-child)": {
      mb: 1,
    },

    "&:hover": {
      backgroundColor: light.main,

      "& *": {
        color: dark.main,
      },
    },
  }
}
