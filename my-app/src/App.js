import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useMaterialUIController } from "./context/ui";
import { setMiniSidenav, setOpenConfigurator } from "./context/ui/module";
import { routes } from './router/path/index';
import { themeDark, themeLight } from './theme';
import SideNavbar from "./layout/sidenav";
import MeasureRender from "./FullAppUi/mesure";
import { PrivateRouter } from './router/index';
import { brandDark, brandWhite } from "./res";
import ConfigNavbar from "./layouts/confignav";
import ConfigButton from './element/config/configBtn';
import Home from "./pages/home";
import { PlanUp } from './pages/plan';
import Dashboard from './pages/dashboard';
import Tables from './pages/table/index';
import Notifications from './pages/notifications';


function App() {

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    // direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  const [ isOnMouseEnter, setOnMouseEnter] = useState(false);  

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !isOnMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (isOnMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  return(
    <MeasureRender name="ChildApp">
      <ThemeProvider theme={darkMode?themeDark:themeLight}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <SideNavbar 
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Learn Japanese"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}            
            />
            <ConfigNavbar />
            <ConfigButton handleConfiguratorOpen={handleConfiguratorOpen}/>
          </>
        )}
        {layout === "vr" && <ConfigNavbar />}
        <Routes>
          {/* {getRoutes(routes)} */}
          {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
          <Route path="*" element={<Home />}/>
          <Route path="/test" element={<TestMaterial/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/reset" element={<SignReset/>}/>
          <Route path="/dashboard" element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
            
          }/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/tables" element={<Tables />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/billing" element={<Billing />}/>
          <Route path="/plan" element = { <PlanUp/>}/>
        </Routes>
      </ThemeProvider>
    </MeasureRender>
  )
}

export default App;
