
import { Card, Grid } from '@mui/material';
import TTBox from '../../components/TTBox';
import TTTypography from '../../components/TTTypography';
import authorsTableData from '../../element/table/authorTable';
import projectsTableData from '../../element/table/projectTable';
import DashboardLayout from '../../layouts/base/dashboardLayout/index';
import DataTable from '../../element/common/datatable/index';
import DashboardNavbar from '../../layouts/topnav/dash';

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  // const { columns: kColumns, rows: kRows } = kanjisTableData();  
  return (
    <DashboardLayout>
      <TTBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Authors Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Projects Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
        </Grid>
      </TTBox>
      {/* <FooterDash/> */}
    </DashboardLayout>
  );
}
export default Tables;
