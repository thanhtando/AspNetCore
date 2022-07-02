


const SwitchStyle = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
function ConfigNavbar(){

  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // sidenav type buttons styles
const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? background.sidenav : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? background.sidenav : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });

  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.sidenav : white.main,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.sidenav : white.main,
    },
  });  const ItemColor = ({color}) => {
    // console.log("color:",color);
    return(
      <IconButton 
        onClick={()=>setSidenavColor(dispatch, color)}
        sx={({
          borders:{borderWidth}, 
          palette:{white, dark, background},
          transitions,
        })=>({
          width: "24px",
          height: "24px",
          padding: 0,
          border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
          borderColor: ()=>{
            let borderColorValue = sidenavColor===color && dark.main;
            if(darkMode===sidenavColor===color){
              borderColorValue = white.main
            }
            return borderColorValue
          },
          transition: transitions.create("border-color", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
          }),
          backgroundImage: ({functions:{linearGradient}, palette:{gradients}})=>linearGradient(gradients[color].main, gradients[color].state),
          "&:not(:last-child)":{ mr: 1},
          "&:hover, &:focus, &:active": {
            borderColor: darkMode ? white.main : dark.main,
          },
        })}
      />
    )
  }
  return(
    <ConfigNavbarStyle variant="permanent" ownerState={{openConfigurator}}>
      {/* config header */}
      <TTBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <TTBox>
          <TTTypography variant={"h5"}>UI Configurator</TTTypography>
          <TTTypography variant={"body2"} color="text">
            See our dashboard options.
          </TTTypography>
        </TTBox>
        <Icon 
          onClick={handleCloseConfigurator}
          sx={({typography: {size}, palette:{dark, white}})=>({
            fontSize:  `${size.lg} !important`,
            color: darkMode?white.main:dark.main,
            stroke: "currentColor",                       //TODO: currentcolor
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}          
        >close</Icon>
      </TTBox>
      <Divider />
      {/* content */}
      <TTBox pt={0.5} px={3}>
        {/* config color */}
        <TTBox>
          <TTBox>
            <TTTypography variant="h6">Sidenav Colors</TTTypography>
          </TTBox>
          <TTBox  display="flex" mb={0.5} justifyContent="right">
            {sidenavColors.map((itemColor, index)=>(
              <ItemColor color={itemColor} key={itemColor}/>
            ))}
          </TTBox>
        </TTBox>
        <Divider />
        {/* config type*/}
        <TTBox my={1} lineHeight={1} >
          <TTTypography variant="h6">Sidenav Type</TTTypography>
          <TTTypography variant="button" color="text">
            Choose between different sidenav types.
          </TTTypography>

          <TTBox
            sx={{
              display: "flex",
              mt: 2,
              mr: 1,
            }}
          >
            <TTButton
              color="dark"
              variant="gradient"
              onClick={handleDarkSidenav}
              disabled={disabled}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              Dark
            </TTButton>
            <TTBox sx={{ mx: 1, width: "8rem", minWidth: "8rem" }}>
              <TTButton
                color="dark"
                variant="gradient"
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                Transparent
              </TTButton>
            </TTBox>
            <TTButton
              color="dark"
              variant="gradient"
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              White
            </TTButton>
          </TTBox>
        </TTBox>
        <Divider/>
        {/* config mode navbar fixed*/}
        <TTBox>
          <TTTypography variant="h6">Mode</TTTypography>
          <TTBox
            display="flex"
            justifyContent= "space-between"
            alignItems= "center"
            lineHeight={1}
            pl={2}
          >
            <TTTypography variant="body2">Navbar Fixed</TTTypography>
            <Switch checked={fixedNavbar} onChange={handleFixedNavbar}/>
          </TTBox>
          <TTBox
            display="flex"
            justifyContent= "space-between"
            alignItems= "center"
            lineHeight={1}
            pl={2}
          >
            <TTTypography variant="body2">Light/Dark</TTTypography>
            <Switch checked={darkMode} onChange={handleDarkMode}/>
            <SwitchStyle checked={darkMode} onChange = {handleDarkMode}/>
          </TTBox>
        </TTBox>
      </TTBox>
      <Divider/>
      {/* config footer */}
      <TTBox px={3}>
        <TTBox mt={2} mb={2}>
            <TTButton
              component={Link}
              href="https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/"
              target="_blank"
              rel="noreferrer"
              color={darkMode ? "light" : "dark"}
              variant="outlined"
              fullWidth
            >
              view documentation
            </TTButton>
        </TTBox>
        <TTBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/material-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/material-dashboard-react on GitHub"
          >
            Star
          </GitHubButton>
        </TTBox>
        <TTBox mt={2} textAlign="center">
          <TTBox mb={0.5}>
            <TTTypography variant="h6">Thank you for sharing!</TTTypography>
          </TTBox>

          <TTBox display="flex" justifyContent="center">
            <TTBox mr={1.5}>
              <TTButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20Material%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-dashboard-react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </TTButton>
            </TTBox>
            <TTButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </TTButton>
          </TTBox>
        </TTBox>
      </TTBox>
    </ConfigNavbarStyle>
  )
}
const ConfigNavbarStyle = styled(Drawer)(({theme, ownerState})=>{

  const { boxShadows, functions, transitions} = theme;
  const { lg } = boxShadows;
  const { pxToRem } = functions;
  const {openConfigurator} = ownerState;
  // console.log("openConfigurator:", openConfigurator);
  const configuratorWidth = 360;
   // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });
  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });
  return{
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator?drawerOpenStyles():drawerCloseStyles())
    },
  }
})