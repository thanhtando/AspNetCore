
import { AppBar, Card, Divider, Grid, Icon, Tab, Tabs } from "@mui/material";
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
import { useEffect, useState } from 'react';
import breakpoints from '../../theme/base/breakpoints';
import TTAvatar from "../../components/TTAvatar";
import backgroundProfile from "../assets/images/bg-profile.jpeg";
import taurus from "../assets/images/avatar/taurus.jpg";


function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <TTBox p={2} mx={3} display="flex" justifyContent="center">
        <TTBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </TTBox>
      </TTBox>
      <TTBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
        {description && (
          <TTTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </TTTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <TTTypography variant="h5" fontWeight="medium">
            {value}
          </TTTypography>
        )}
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;