import PropTypes from 'prop-types';
import TTBox from '../../components/TTBox';
import { useUIController } from '../../context/ui';
import { Card, Grid } from '@mui/material';
import TTTypography from '../../components/TTTypography';
import Icon from '@mui/material';
import TTButton from '../../components/TTButton';
import DashboardLayout from '../../layouts/base/dashboardLayout';


function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </TTTypography>
        <TTBox display="flex" alignItems="flex-start">
          <TTBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </TTBox>
          <TTTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </TTTypography>
        </TTBox>
      </TTBox>
      <TTBox pt={3} pb={2} px={2}>
        <TTBox mb={2}>
          <TTTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </TTTypography>
        </TTBox>
        <TTBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="expand_more"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          />
        </TTBox>
        <TTBox mt={1} mb={2}>
          <TTTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </TTTypography>
        </TTBox>
        <TTBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </TTBox>
      </TTBox>
    </Card>
  );
}
function Transaction({ color, icon, name, description, value }) {
  return (
    <TTBox key={name} component="li" py={1} pr={2} mb={1}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center">
        <TTBox display="flex" alignItems="center">
          <TTBox mr={2}>
            <TTButton variant="outlined" color={color} iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </TTButton>
          </TTBox>
          <TTBox display="flex" flexDirection="column">
            <TTTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </TTTypography>
            <TTTypography variant="caption" color="text" fontWeight="regular">
              {description}
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </TTTypography>
      </TTBox>
    </TTBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transactions;
