
import { AppBar, Card, Divider, Grid, Icon, Link, Tab, Tabs, Tooltip } from "@mui/material";
import TTBox from "../../components/TTBox";
import DashboardLayout from "../../layouts/base/dashboardLayout";
import FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TTTypography from "../../components/TTTypography";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
// Images
import homeDecor1 from "../assets/images/home-decor-1.jpg";
import homeDecor2 from "../assets/images/home-decor-2.jpg";
import homeDecor3 from "../assets/images/home-decor-3.jpg";
import homeDecor4 from "../assets/images/home-decor-4.jpeg";
import ProfilesList from "../../element/profile/list";
import PropTypes from 'prop-types';
import colors from "../../../theme/base/colors";
import { typography } from "../../../theme/components/typography";

function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <TTBox key={label} display="flex" py={1} pr={2}>
      <TTTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </TTTypography>
      <TTTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </TTTypography>
    </TTBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <TTBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </TTBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
        <TTTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <TTBox mb={2} lineHeight={1}>
          <TTTypography variant="button" color="text" fontWeight="light">
            {description}
          </TTTypography>
        </TTBox>
        <TTBox opacity={0.3}>
          <Divider />
        </TTBox>
        <TTBox>
          {renderItems}
          <TTBox display="flex" py={1} pr={2}>
            <TTTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </TTTypography>
            {renderSocial}
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};
export default ProfileInfoCard;
