import PropTypes from 'prop-types';
import TTAvatar from '../../../components/TTAvatar';
import TTBox from '../../../components/TTBox';
import TTButton from '../../../components/TTButton';
import TTTypography from '../../../components/TTTypography';
import { Link, Card } from '@mui/material';
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";

export const profilesListData = [
  {
    image: "kal",
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "marie",
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: "ivana",
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team4,
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team3,
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];
function ProfilesList({ title, profiles, shadow }) {

  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <TTBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <TTBox mr={2}>
        <TTAvatar src={image} alt="something here" shadow="md" />
      </TTBox>
      <TTBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <TTTypography variant="button" fontWeight="medium">
          {name}
        </TTTypography>
        <TTTypography variant="caption" color="text">
          {description}
        </TTTypography>
      </TTBox>
      <TTBox ml="auto">
        {action.type === "internal" ? (
          <TTButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </TTButton>
        ) : (
          <TTButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </TTButton>
        )}
      </TTBox>
    </TTBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <TTBox pt={2} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};
export default ProfilesList;