
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

