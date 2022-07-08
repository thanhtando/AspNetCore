import PropTypes from 'prop-types';
import TTBox from '../../components/TTBox';
import { useUIController } from '../../context/ui';
import { Card, Grid, Tooltip } from '@mui/material';
import TTTypography from '../../components/TTTypography';
import Icon from '@mui/material';
import TTButton from '../../components/TTButton';
import DashboardLayout from '../../layouts/base/dashboardLayout';
import masterCardLogo from "../../../assets/images/logos/mastercard.png";
import visaLogo from "../../../assets/images/logos/visa.png";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";


function PaymentMethod() {
  const [controller] = useUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <TTBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <TTTypography variant="h6" fontWeight="medium">
          Payment Method
        </TTTypography>
        <TTButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </TTButton>
      </TTBox>
      <TTBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TTBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <TTBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <TTTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </TTTypography>
              <TTBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </TTBox>
            </TTBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <TTBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <TTBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <TTTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </TTTypography>
              <TTBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </TTBox>
            </TTBox>
          </Grid>
        </Grid>
      </TTBox>
    </Card>
  );
}
export default PaymentMethod;