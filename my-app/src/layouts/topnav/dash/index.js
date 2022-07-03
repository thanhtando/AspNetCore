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

function DashboardNavbar({absolute, light, isMini}){

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
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
          <BreadcrumbsTT icon="home" title={route[route.length-1]} route={route} light={false}/>
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

//navbar
function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <TTBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <TTBox
          component={MuiLink}
          to="/dashboard"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <TTTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            Learn Japanese
          </TTTypography>
        </TTBox>
        <TTBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink icon={"donut_large"} name="dashboard" route="/dashboard" light={light}/>
          <DefaultNavbarLink icon={"person"} name="profile" route="/profile" light={light} />
          <DefaultNavbarLink icon={"account_circle"} name="sign up" route="/signup" light={light}/>
          <DefaultNavbarLink icon={"key"} name="sign in" route="/signin" light={light}/>
        </TTBox>
        <TTBox>
          {action &&
            (action.type === "internal" ? (
              <TTBox display={{ xs: "none", lg: "inline-block" }}>
                <TTButton
                  component={MuiLink}
                  // to={action.route}
                  href={action.route}
                  variant="gradient"
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </TTButton>
              </TTBox>
            ) : (
              <TTBox display={{ xs: "none", lg: "inline-block" }}>
                <TTButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant="gradient"
                  color={action.color ? action.color : "info"}
                  size="small"
                  sx={{ mt: -0.3 }}
                >
                  {action.label}
                </TTButton>
              </TTBox>
            ))}
        </TTBox>

        <TTBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          {/* {mobileNavbar?<Close fontSize="default"/>:<Menu fontSize="default"/>} */}
        </TTBox>
      </TTBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}
// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};
// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

// default navbar link
function DefaultNavbarLink({ icon, name, route, light}) {
  // console.log(icon, name, route, light)
  return (
    <TTBox
      component={MuiLink}
      // to={"/signup"}
      href={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "" }}
    >
      <Icon
        fontSize="small"
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: "middle",
        }}
      >
        {icon}
      </Icon>
      <TTTypography
        variant="button"
        fontWeight="regular"
        color={light ? "white" : "dark"}
        textTransform="capitalize"
        sx={{ width: "100%", lineHeight: 0 }}
      >
        &nbsp;{name}
      </TTTypography>
    </TTBox>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <MenuCom
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <TTBox px={0.5}>
        <DefaultNavbarLink icon={"donut_large"} name="dashboard" route="/dashboard" light={false}/>
        <DefaultNavbarLink icon={"person"} name="profile" route="/profile" light={false}/>
        <DefaultNavbarLink icon={"account_circle"} name="sign up" route="/signup" light={false}/>
        <DefaultNavbarLink icon={"key"} name="sign in" route="/signin" light={false}/>
      </TTBox>
    </MenuCom>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};
