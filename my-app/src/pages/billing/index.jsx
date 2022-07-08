
import { Card, Grid } from '@mui/material';
import TTTypography from '../../components/TTTypography';
import DashboardLayout from '../../layouts/base/dashboardLayout';
import Bill from '../../element/billing/bill/index';
import MasterCard from '../../element/billing/masterCard/index';
import DefaultInfoCard from '../../element/profile/DefaultInfo/index';
import PaymentMethod from '../../element/billing/payMethod/index';
import Invoices from '../../element/billing/invoices/index';
import Transactions from '../../element/billing/transaction/index';
import TTBox from '../../components/TTBox/index';

function BillingInformation() {
  return (
    <Card id="delete-account">
      <TTBox pt={3} px={2}>
        <TTTypography variant="h6" fontWeight="medium">
          Billing Information
        </TTTypography>
      </TTBox>
      <TTBox pt={1} pb={2} px={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </TTBox>
      </TTBox>
    </Card>
  );
}
const Billing = () => {

  return(
    <DashboardLayout>
      <TTBox mt={8}>
        <TTBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </TTBox>
        <TTBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </TTBox>
      </TTBox>
    </DashboardLayout>
  )
}
export default Billing;