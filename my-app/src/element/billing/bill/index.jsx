import PropTypes from 'prop-types';
import TTBox from '../../components/TTBox';
import { useUIController } from '../../context/ui';
import { Card, Grid } from '@mui/material';
import TTTypography from '../../components/TTTypography';
import Icon from '@mui/material';
import TTButton from '../../components/TTButton';
import DashboardLayout from '../../layouts/base/dashboardLayout';

function Bill({ name, company, email, vat, noGutter }) {
  const [controller] = useUIController();
  const { darkMode } = controller;

  return (
    <TTBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <TTBox width="100%" display="flex" flexDirection="column">
        <TTBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <TTTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </TTTypography>

          <TTBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <TTBox mr={1}>
              <TTButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </TTButton>
            </TTBox>
            <TTButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </TTButton>
          </TTBox>
        </TTBox>
        <TTBox mb={1} lineHeight={0}>
          <TTTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <TTTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {company}
            </TTTypography>
          </TTTypography>
        </TTBox>
        <TTBox mb={1} lineHeight={0}>
          <TTTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <TTTypography variant="caption" fontWeight="medium">
              {email}
            </TTTypography>
          </TTTypography>
        </TTBox>
        <TTTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <TTTypography variant="caption" fontWeight="medium">
            {vat}
          </TTTypography>
        </TTTypography>
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};
export default Bill;