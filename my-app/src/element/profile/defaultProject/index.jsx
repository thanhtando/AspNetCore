import { AppBar, Card, CardMedia, Divider, Grid, Icon, Link, Tab, Tabs, Tooltip } from "@mui/material";
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
import ProfilesList, { profilesListData } from "../../element/profile/list";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import breakpoints from '../../theme/base/breakpoints';
import TTAvatar from "../../components/TTAvatar";
import backgroundProfile from "../assets/images/bg-profile.jpeg";
import taurus from "../assets/images/avatar/taurus.jpg";
import ProfileHeader from '../../element/profile/profileHeader/index';
import PlatformSettings from '../../element/profile/platformSetting/index';
import ProfileInfoCard from "../../element/profile/profileInfo";
import TTButton from "../../../components/TTButton";

function DefaultProjectCard({ image, label, title, description, action, authors }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <TTAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <TTBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </TTBox>
      <TTBox mt={1} mx={0.5}>
        <TTTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </TTTypography>
        <TTBox mb={1}>
          {action.type === "internal" ? (
            <TTTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </TTTypography>
          ) : (
            <TTTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </TTTypography>
          )}
        </TTBox>
        <TTBox mb={3} lineHeight={0}>
          <TTTypography variant="button" fontWeight="light" color="text">
            {description}
          </TTTypography>
        </TTBox>
        <TTBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <TTButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </TTButton>
          ) : (
            <TTButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </TTButton>
          )}
          <TTBox display="flex">{renderAuthors}</TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};
export default DefaultProjectCard;