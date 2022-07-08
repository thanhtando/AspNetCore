import { AppBar, Card, Divider, Grid, Icon, Tab, Tabs } from "@mui/material";
import TTBox from "../../components/TTBox";
import TTTypography from "../../components/TTTypography";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import breakpoints from '../../theme/base/breakpoints';
import TTAvatar from "../../components/TTAvatar";
import backgroundProfile from "../assets/images/bg-profile.jpeg";
import taurus from "../assets/images/avatar/taurus.jpg";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <TTBox sx={{ p: 3 }}>
          <TTTypography>{children}</TTTypography>
        </TTBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ProfileHeader = ({children}) => {

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return(
    <TTBox position={"relative"} mb={5}>
      {/* header image */}
      <TTBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundProfile})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      {/*  */}
      <Card sx = {{
        position: "relative",
        mt: -8,
        mx: 3,
        py: 2,
        px: 2,
      }}>
        <Grid container spacing={3} alignItems="center">
          {/* avartar */}
          <Grid item>
            <TTAvatar src={taurus} alt="profile-image" size="xl" shadow="sm"/>
          </Grid>
          {/* name info */}
          <Grid item>
            <TTBox height="100%" mt={0.5} lineHeight={1}>
              <TTTypography variant="h5" fontWeight="medium">
                Thanh Tan
              </TTTypography>
              <TTTypography variant="button" color="text" fontWeight="regular">
                TEST / Co-Founder
              </TTTypography>
            </TTBox>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                {/* tab app */}
                <Tab 
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                  {...a11yProps(0)}
                />
                {/* tab mesage */}
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                 {...a11yProps(1)}
                />
                {/* tab setting */}
                <Tab 
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
          </Grid>
        </Grid>
        {children}
      </Card>
      
    </TTBox>
  )
}
// Setting default props for the Header
ProfileHeader.defaultProps = {
  children: "",
};

// Typechecking props for the Header
ProfileHeader.propTypes = {
  children: PropTypes.node,
};

export default ProfileHeader;