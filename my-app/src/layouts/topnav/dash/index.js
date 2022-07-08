import { AppBar, Icon, IconButton, Link, Menu, MenuItem, Toolbar } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TTBox from "../../../components/TTBox";
import TTBreadcrumbs from "../../../components/TTBreadcrum";
import { auth } from "../../../connection/firebase";
import { useUIController } from "../../../context/ui";
import { setMiniSidenav, setOpenConfigurator, setTransparentNavbar } from "../../../context/ui/module";
import TTInput from '../../../components/TTInput/index';
import PropTypes from 'prop-types';
import navbarMobileMenu from "../mobile/dashnav";
import TTTypography from "../../../components/TTTypography";

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
const NotificationItem = forwardRef(({icon, title, ...rest}, ref)=>(
  <MenuItem {...rest} ref={ref} sx={(theme) => NavbarMenuItem(theme)}>
    <TTBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <TTTypography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </TTTypography>
      <TTTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </TTTypography>
    </TTBox>
  </MenuItem>
));
function DashboardNavbar({absolute, light, isMini}){

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);

  const route = useLocation().pathname.split("/").slice(1);
  console.log(route);
  console.log(useLocation().pathname);

  useEffect(()=>{

    //setting the navbar type
    if(fixedNavbar){ setNavbarType("sticky") }
    else{ setNavbarType("static") }

    //when scrolling the window.
    function handleTransparentNavbar(){
      // console.log("handleTransparentNavbar")
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);
    //to set the state with the initial value
    handleTransparentNavbar();

    //remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  },[dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  
  //notification menu
  const MenuComp = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  )
  //style for navbar icon
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });
  
  const handleSignOut = () =>{
    auth.signOut()
      .then(()=>{console.log("log out success")})
      .catch((error)=>{console.log(error)});
  }
  return(
    <AppBar
      position={absolute?"absolute":navbarType}
      color="inherit"
      sx={(theme)=>navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme)=>navbarContainer(theme)}>
        {/* Breadcrumns */}
        <TTBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <TTBreadcrumbs icon="home" title={route[route.length-1]} route={route} light={false}/>
        </TTBox>
        {/*  */}
        {isMini?null:<TTBox sx={(theme)=>navbarRow(theme,{isMini})}>
          {/* search bar */}
          <TTBox pr={1}>
            <TTInput label={"Search here"}/>
          </TTBox>
          {/* icon tool */}
          <TTBox color={light?"white": "inherit"}>
            <Link href="/signin">
              <IconButton onClick={handleSignOut} sx={navbarIconBtn} size="small" disableRipple>
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
            </Link>
            <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconBtn}
                onClick={handleConfiguratorOpen}
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconBtn}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {MenuComp()}
          </TTBox>
        </TTBox>}
      </Toolbar>
    </AppBar>
  )
}
// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};
export default DashboardNavbar;

