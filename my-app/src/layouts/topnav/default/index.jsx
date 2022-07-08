import { Container, Icon } from "@mui/material";
import { useEffect, useState } from "react";
import TTBox from "../../../components/TTBox";
import { useUIController } from "../../../context/ui";
import MuiLink from '@mui/material/Link';
import TTTypography from "../../../components/TTTypography";
import DefaultNavbarLink from "../navlink";
import TTButton from '../../../components/TTButton';
import breakpoints from "../../../theme/base/breakpoints";
import DefaultNavbarMobile from '../mobile/pagenavi';
import PropTypes from 'prop-types';

//navbar
function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useUIController();
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
export default DefaultNavbar;
