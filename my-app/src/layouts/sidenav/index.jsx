import React from "react";

function sidenavLogoLabel(theme, ownerState) {
  const { functions, transitions, typography, breakpoints } = theme;
  const { miniSidenav } = ownerState;

  const { pxToRem } = functions;
  const { fontWeightMedium } = typography;

  return {
    ml: 0.5,
    fontWeight: fontWeightMedium,
    wordSpacing: pxToRem(-1),
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav ? 0 : 1,
    },
  };
}
function collapseItemStyle(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state)
      : transparent.main,
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: active && !whiteSidenav && !darkMode && !transparentSidenav ? md : "none",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue =
            transparentSidenav && !darkMode
              ? grey[300]
              : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBoxStyle(theme, ownerState) {
  const { palette, transitions, borders, functions } = theme;
  const { transparentSidenav, whiteSidenav, darkMode, active } = ownerState;

  const { white, dark } = palette;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& svg, svg g": {
      color: transparentSidenav || whiteSidenav ? dark.main : white.main,
    },
  };
}

const collapseIconStyle = ({ palette: { white, gradients } }, { active }) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseTextStyle(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { size, fontWeightRegular, fontWeightLight } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(10),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

function SidenavCollapse({icon, name, active, ...rest}){
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  return(
    <ListItem component={"li"}>
      <TTBox {...rest} sx={(theme)=>collapseItemStyle(theme,{
        active, transparentSidenav, whiteSidenav, darkMode, sidenavColor
      })}>
        <ListItemIcon sx={(theme)=>collapseIconBoxStyle(theme,{
          transparentSidenav, whiteSidenav, darkMode, active
        })}>
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIconStyle(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>
        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseTextStyle(theme, {
              miniSidenav,
              transparentSidenav,
              whiteSidenav,
              active,
            })
          }
        />
      </TTBox>
    </ListItem>
  )
}
// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
function SideNavbar({color, brand, brandName, routes, ...rest}){

  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor} = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";
  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, whiteSidenav, transparentSidenav]);

  const ListRoute = routes.map(({
    type, name, icon, title, noCollapse, key, href, route
  })=>{
    let ItemValue
  
    switch (type) {
      case "collapse":
        ItemValue = href
          ?<Link key={key} href={href} target="_blank" rel="noreferrer" sx={{textDecoration:"none"}}>
            <SidenavCollapse
              icon={icon}
              name={name}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
          :<NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
          </NavLink>
        break;
      case "title":
        ItemValue = (
          <TTTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >{title}</TTTypography>
        )
        break;
      case "divider":
        ItemValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        )
        break;
      default:
        break;
    }
    return ItemValue;
  });
  return(
    <SideNavbarStyle 
      {...rest}
      variant="permanent"
      ownerState={{transparentSidenav, whiteSidenav, miniSidenav, darkMode}}
    >
      {/* sideNav header */}
      <TTBox pt={3} pb={1} px={4} textAlign="center">
        {/* icon close */}
        <TTBox
          display={{xs:"block", xl: "none"}}
          position="absolute"
          top={0} right={0}
          p={1.5}
          onClick={closeSidenav}
          sx={{cursor:"pointer"}}
        >
          <TTTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </TTTypography>
        </TTBox>
        {/* title */}
        <TTBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <TTBox component="img" src={brand} alt="Brand" width="2rem" />}
          <TTBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <TTTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      {/* sideNav content */}
      <List>
        {ListRoute}
      </List>
      {/* sideNav footer */}
      <TTBox p={2} mt="auto">
        <TTButton
          component="a"
          href="https://www.creative-tim.com/product/material-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          fullWidth
        >
          contact me
        </TTButton>
      </TTBox>
    </SideNavbarStyle>
  )
}
SideNavbar.defaultProps = {
  color: "info",
  brand: "",
}
SideNavbar.propTypes = {
  color: PropTypes.oneOf([
    "primary", "secondary", 
    "info", "dark",
    "success", "error", "warning"
  ]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
const SideNavbarStyle = styled(Drawer)(({theme, ownerState})=>{

  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState;

  const sidebarWidth = 250;
  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;

  let backgroundValue = darkMode
    ? background.sidenav
    : linearGradient(gradients.dark.main, gradients.dark.state);

  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  }

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });
  //style for the sidenav miniSidenav = true
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });
  return{
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav?drawerCloseStyles():drawerOpenStyles()),
    }
  }
})
export default SideNavbar;