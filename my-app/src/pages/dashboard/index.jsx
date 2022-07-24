
import { reportsBarChartData, reportsLineChartData } from '../../element/dashboard/report/data/index';
import DashboardLayout from '../../layouts/base/dashboardLayout';
import OrdersOverview from '../../element/dashboard/overview/index';
import { Grid } from '@mui/material';
import Projects from '../../element/dashboard/project/index';
import TTBox from '../../components/TTBox';
import ReportsLineChart from '../../element/dashboard/report/lineChart';
import ReportsBarChart from '../../element/dashboard/report/barChart/index';
import { DataOrder } from '../../element/dashboard/complexCard/data/index';
import ComplexStatisticsCard from '../../element/dashboard/complexCard/index';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

const Dashboard = () => {
  const { sales, tasks } = reportsLineChartData;
  
  return(
    <DashboardLayout>
      <TTBox py={3}>
        {/* grid totem */}
        <Grid container spacing={3}>
          {DataOrder.map((item, idx)=>(
            <Grid item xs={12} md={6} lg={3} key={idx}>
              <TTBox mb={1.5}>
                <ComplexStatisticsCard
                  color={item.color}
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                  percentage={{
                    color: item.percentage.color,
                    amount: item.percentage.amount,
                    label: item.percentage.label,
                  }}
                />
              </TTBox>
            </Grid>
          ))}

        </Grid>
        {/* chart */}
        <TTBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </TTBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </TTBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks} 
                />
              </TTBox>
            </Grid>
          </Grid>
        </TTBox>
        {/* over view */}
        <TTBox>
          <Grid container spacing={3}>
          {/* project */}
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            {/* timeline view */}
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </TTBox>

      </TTBox>
    </DashboardLayout>
  )
}
export default Dashboard;