
// element -> Sidenav
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import React from "react";
import { useMyMaterial } from "../../context/materialprovider";
import BoxTT from "../../components/BoxTT";

const Sidenav = ({ color, brand, brandName, routes, ...rest }) => {
  const [controller, dispatch] = useMyMaterial();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  const closeSidenav = () => {
    console.log("close side nav");
  }
  return(
    <SidenavStyle
      {...rest}
      variant="permanent"
      ownerState = {{transparentSidenav, whiteSidenav, miniSidenav, darkMode}}>
        <BoxTT pt={3} pb={1} px={4} textAlign="center">
          <BoxTT
            display={{ xs: "block", xl: "none" }}
            position="absolute"
            top={0}
            right={0}
            p={1.625}
            onClick={closeSidenav}
            sx={{ cursor: "pointer" }}
          >

          </BoxTT>
        </BoxTT>
      <label>TRANSPARENT_NAVBAR</label>
    </SidenavStyle>
  )
}
const SidenavStyle = styled(Drawer)(({theme, ownerState})=>{
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

  // styles for the sidenav when miniSidenav={false}
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
  return{
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav ? drawerCloseStyles():drawerOpenStyles()),
    },
  }
})
export default Sidenav;
