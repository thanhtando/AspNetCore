
import { AppBar, Card, Divider, Grid, Icon, Switch, Tab, Tabs } from "@mui/material";
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


function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <TTBox p={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </TTTypography>
      </TTBox>
      <TTBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <TTTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </TTTypography>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox mt={3}>
          <TTTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </TTTypography>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

export default PlatformSettings;