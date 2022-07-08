import PropTypes from 'prop-types';
import TTBox from '../../components/TTBox';
import { useUIController } from '../../context/ui';
import { Card, Grid } from '@mui/material';
import TTTypography from '../../components/TTTypography';
import Icon from '@mui/material';
import TTButton from '../../components/TTButton';
import DashboardLayout from '../../layouts/base/dashboardLayout';


function Invoice({ date, id, price, noGutter }) {
  return (
    <TTBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <TTBox lineHeight={1.125}>
        <TTTypography display="block" variant="button" fontWeight="medium">
          {date}
        </TTTypography>
        <TTTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </TTTypography>
      </TTBox>
      <TTBox display="flex" alignItems="center">
        <TTTypography variant="button" fontWeight="regular" color="text">
          {price}
        </TTTypography>
        <TTBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <TTTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </TTTypography>
        </TTBox>
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};
function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <TTBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <TTTypography variant="h6" fontWeight="medium">
          Invoices
        </TTTypography>
        <TTButton variant="outlined" color="info" size="small">
          view all
        </TTButton>
      </TTBox>
      <TTBox p={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </TTBox>
      </TTBox>
    </Card>
  );
}

export default Invoices;