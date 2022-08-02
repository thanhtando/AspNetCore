import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useUIController } from "./context/ui";
import { setMiniSidenav, setOpenConfigurator } from "./context/ui/module";
import RoutePath from './router/path/index';
import MeasureRender from "./FullAppUi/mesure";
import { brandDark, brandWhite } from "./res";
import ConfigNavbar from "./layouts/confignav";
import ConfigButton from './element/config/configBtn';
import Home from "./pages/home";
import { PlanUp } from './pages/plan';
import Dashboard from './pages/dashboard';
import Tables from './pages/table/index';
import Notifications from './pages/notifications';
import Profile from "./pages/profile";
import Billing from './pages/billing/index';
import SignIn from './pages/authorization/signin/index';
import SignUp from './pages/authorization/signup/index';
import SignReset from './pages/authorization/signreset/index';
import { themeLight } from './theme/themeLight';
import { themeDark } from './theme/themeDark';
import SideNavbar from './layouts/sidenav/index';
import GameApp from "./chess";
import RPG from "./examples/rpg_tochu";
// import { PrivateRoute } from "./router/private";

const Test = () => {

  //const [text, setText] = useState("");
  var abc = 'tan dep trai'
  function changeName(){
    console.log(abc);
  }
  return(
    <div>
      <label>{abc}</label>
      <button onClick={changeName}>change</button>
    </div>
  )
}

function App() {

  const [controller, dispatch] = useUIController();
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

  // console.log("darkmode:", darkMode);
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
              routes={RoutePath}
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
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/reset" element={<SignReset/>}/>
          <Route path="/dashboard" element={
            <Dashboard/>
            // <PrivateRoute>
            //   <Dashboard />
            // </PrivateRoute>
            
          }/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/tables" element={<Tables />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/billing" element={<Billing />}/>
          <Route path="/plan" element = { <PlanUp/>}/>
          {/* <Route path="/game" element = { <GameApp />} />
          <Route path="/rpg" element = { <RPG/>}/> */}
          <Route path="/test" element = {<Test/>}/>
        </Routes>
      </ThemeProvider>
    </MeasureRender>
  )
}

export default App;
