import React, { forwardRef, useEffect } from "react";
import { 
  createContext, 
  useContext, 
  useMemo, 
  useReducer 
} from "react";
import { 
  BrowserRouter, 
  Route, 
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"
import { Box, Button, createTheme, CssBaseline, Paper, styled, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import chroma from "chroma-js";

//
const bgImage = require("../assets/images/bg-sign-in-basic.jpeg");

//full app
const FullApp = () => {

  return(
    <RootProvider>
        <ChildApp />
    </RootProvider>
    
  )
}
const HomePage = () => {

  const [UiController, dispatch] = useUiControl();
  const { layout, darkMode } = UiController;
  console.log()
  useEffect(()=>{
    setLayout(dispatch, "page")
  },[dispatch]);
  return(
    <Box
      height={500}
      sx={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Button>test</Button>
      {layout}-{darkMode.toString()}
      <Button 
        variant="outlined" 
        onClick={()=>{
          dispatch({type: "LAYOUT", value: "value"});
          setDarkMode(dispatch, !darkMode)}}
        >test layout</Button>
      <Paper style={{backgroundImage:`url(${bgImage})`}}/>
    </Box>
  )
}
//TTComponent
const TTBox = forwardRef(
  ({
    variant, bgColor, color, opacity, 
    borderRadius, shadow, coloredShadow, ...rest
  }, ref)=>(
    <BoxStyle
      {...rest}
      ref={ref}
      ownerState={{
        variant, bgColor, color, opacity,
        borderRadius, shadow, coloredShadow
      }}
    />
  )
);
TTBox.defaultProps={
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
}
TTBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};
const BoxStyle = styled(Box)(({theme, ownerState})=>{
  //TODO
  // const { palette, borders, boxShadow, functions } = theme;
  // const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;
  const { bgColor, color, opacity, borderRadius } = ownerState;
  
  //opacityValue
  let opacityValue = opacity
  //background value
  let backgroundValue = bgColor;
  //border radius value
  let borderRadiusValue = borderRadius
  //color value
  let colorValue = color;
  //boxShadow value
  let boxShadowValue = "none";
  return{
    opacity: opacityValue,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  }
})
const PageLayout = ({background, children}) =>{

  const [, dispatch] = useUiControl();
  const { pathname } = useLocation();
  

  useEffect(() => {
    setLayout(dispatch, "page");
  },[dispatch, pathname]);

  return(
    <Box
      width={"100vw"}
      height={"100%"}
      minHeight={"100vh"}           //set min height for component.
      bgColor={background}
      sx={{
        overflowX: "hidden"         //when width of child > parent
      }}    
    >
      {children}
    </Box>
  )
}
const BackgroundPage = ({image}) => {
  return(
    <Box
      position="absolute"
      width="100%"
      minHeight="100vh"
      sx={{
        backgroundImage: ({palette:{gradients}})=>image && `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />

  )
}
const BasicLayout = ({bgImage, children}) => {
  return(
    <PageLayout>
      {/* DefaultNavbar */}
      {/* BackGroundImage */}
      <BackgroundPage image={bgImage}/>
      {/* Content */}
      {children}
      {/* Footer */}
    </PageLayout>
  )
}
const SignIn = () => {
  return(
    <BasicLayout bgImage={bgImage}>
      <Typography variant="h2">SignIn</Typography>
      
    </BasicLayout>
  )
}
const ChildApp = () => {

  const [UiController] = useUiControl();
  const { darkMode } = UiController;

  return(
    <ThemeProvider theme={darkMode?themeDark:themeDefault}>
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </ThemeProvider>
  )
}
//root provider
const RootProvider = ({children}) => {
  return(
    <BrowserRouter>
      <UiProvider>
        <CssBaseline/>
        {children}
      </UiProvider>
    </BrowserRouter>
  )
}
//theme
const myColors = {

  //common color
  common:{
    background: {
      default: "#f0f2f5",
    },
  
    text: {
      main: "#7b809a",
      focus: "#7b809a",
    },
  
    transparent: {
      main: "transparent",
    },
  
    white: {
      main: "#ffffff",
      focus: "#ffffff",
    },
  
    black: {
      light: "#000000",
      main: "#000000",
      focus: "#000000",
    },
  },
  
  //clone sx of material color
  base:{
    primary: {
      main: "#e91e63",
      focus: "#e91e63",
    },
  
    secondary: {
      main: "#7b809a",
      focus: "#8f93a9",
    },
  
    info: {
      main: "#1A73E8",
      focus: "#1662C4",
    },
  
    success: {
      main: "#4CAF50",
      focus: "#67bb6a",
    },
  
    warning: {
      main: "#fb8c00",
      focus: "#fc9d26",
    },
  
    error: {
      main: "#F44335",
      focus: "#f65f53",
    },
  
    light: {
      main: "#f0f2f5",
      focus: "#f0f2f5",
    },
  
    dark: {
      main: "#344767",
      focus: "#2c3c58",
    },
    grey: {
      100: "#f8f9fa",
      200: "#f0f2f5",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    },
  },

  //advances
  gradients: {
    primary: {
      main: "#EC407A",
      state: "#D81B60",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    info: {
      main: "#49a3f1",
      state: "#1A73E8",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },

  //SNS 
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterEst: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  //archive
  badgeColors: {
    primary: {
      background: "#f8b3ca",
      text: "#cc084b",
    },

    secondary: {
      background: "#d7d9e1",
      text: "#6c757d",
    },

    info: {
      background: "#aecef7",
      text: "#095bc6",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  //
  coloredShadows: {
    primary: "#e91e62",
    secondary: "#110e0e",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  //colors of component
  element:{
    inputBorderColor: "#d2d6da",

    tabs: {
      indicator: { boxShadow: "#ddd" },
    },
  }
}
//
const responsivePoint = {
  device: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  },
  common:{
    xs: 384,    //16*16: 6*4*16   extra-small: 
    sm: 576,    //36*16: 6*6*16   small
    md: 768,    //48*16: 6*8*16   medium
    lg: 992,    //60*16: 6*10*16  large
    xl: 1200,   //72*16: 6*12*16  extra-large
    xxl: 1408,  //84*16: 6*14*16  
  },
  size: {
    xs: 0,      //0*36  
    sm: 576,    //36*16
    md: 768,    //48*16
    lg: 992,    //62*16
    xl: 1200,   //75*16
    xxl: 1408,  //88*16
  },
}
//
const myFunction = {
  pxToRem: (number, baseNumber=16)=>{return `${number/baseNumber}rem`},    //convert a px unit into a rem uint
  hexToRgb: (colorNum) => { return chroma(colorNum).rgb().join(", ")},     //helps you to change the hex color code to rgb
  //linearGradient: ()=>{return()}   //function helps you to create a linear gradient color background

}
const themeDefault = createTheme({
  palette:{...myColors},
  breakpoints: {...responsivePoint},
  function:{...myFunction}
});
const themeDark = createTheme({
  palette:{...myColors},
  breakpoints:{...responsivePoint},
});

//uiContext
const UiContext = createContext();
UiContext.displayName = "UiController";
const UI_CONSTANT = {
  LAYOUT: "LAYOUT",
  DARK_MODE: "DARK_MODE"
}
const UiReducer = (state, action) => {
  switch(action.type){
    case UI_CONSTANT.LAYOUT: return{...state, layout: action.value};
    case UI_CONSTANT.DARK_MODE: return{...state, darkMode: action.value};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const UiProvider = ({children}) => {

  const UiInit = {
    layout: "dashboard",
    darkMode: false,
  }
  const [UiController, dispatch] = useReducer(UiReducer, UiInit)
  const value = useMemo(()=>[UiController, dispatch],[UiController, dispatch])
  return(
    <UiContext.Provider value={value}>
      {children}
    </UiContext.Provider>
  )
}
//hook ui
const useUiControl = () => {
  const context = useContext(UiContext);
  
  if (!context) {
    throw new Error(
      "useUiControl should be used inside the UiProvider."
    );
  }
  return context;
}
const setLayout = (dispatch, value) => dispatch({ type: UI_CONSTANT.LAYOUT, value });
const setDarkMode = (dispatch, value) => dispatch({type: UI_CONSTANT.DARK_MODE, value})
export default FullApp;

