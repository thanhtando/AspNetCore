import TTBox from "../../../components/TTBox";
import { MuiLink } from '@mui/material/Link';
import { Icon } from "@mui/material";
import TTTypography from '../../../components/TTTypography';
import { PropTypes } from 'prop-types';

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
export default DefaultNavbarLink;