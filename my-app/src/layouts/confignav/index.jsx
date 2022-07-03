import { Divider, Drawer, Icon, IconButton, Link, styled, Switch } from "@mui/material";
import React, {useState, useEffect} from "react";
import TTBox from "../../components/TTBox";
import TTButton from "../../components/TTButton";
import SwitchStyle from "../../components/TTSwitch";
import TTTypography from "../../components/TTTypography";
import { useMaterialUIController } from "../../context/ui";
import { setDarkMode, setFixedNavbar, setOpenConfigurator, setSidenavColor, setTransparentSidenav, setWhiteSidenav } from "../../context/ui/module";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubButton from "react-github-btn";

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

export default ConfigNavbar;