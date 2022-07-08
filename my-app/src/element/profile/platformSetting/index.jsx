
import { 
  Card, 
  Switch, 
} from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import { useState } from 'react';


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