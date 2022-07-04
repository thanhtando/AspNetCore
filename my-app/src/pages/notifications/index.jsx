import { Grid } from "@mui/material";
import TTBox from "../../components/TTBox";
import DashboardLayout from "../../layouts/base/dashboardLayout";
import AlertTable from '../../element/notifies/alertTable/index';
import NotifiTable from '../../element/notifies/notifiTable/index';
import TestDb from '../../examples/TestDb/index';

const Notifications = () => {


  return(
  <DashboardLayout>
    {/* <TTBox mt={6} mb={3}> */}
    <Grid container spacing={3} justifyContent="center" mt={6} mb={3}>
      <Grid item xs={12} lg={8}>
        <AlertTable/>
      </Grid>
      <Grid item xs={12} lg={8}>
        <NotifiTable/>
      </Grid>
      <Grid item xs={12} lg={8}>
        <TestDb />
      </Grid>
    </Grid>
    {/* </TTBox> */}
  </DashboardLayout>
  )
}
export default Notifications;
