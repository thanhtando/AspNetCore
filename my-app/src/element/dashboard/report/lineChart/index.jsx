
import { Card, Icon } from '@mui/material';
import { useMemo } from 'react';
import TTBox from '../../../../components/TTBox/index';
import { Line } from 'react-chartjs-2';
import TTTypography from '../../../../components/TTTypography/index';
import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
function configsLineChart(labels, datasets) {
  return {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0,
          pointRadius: 5,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(255, 255, 255, .8)",
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
          data: datasets.data,
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}
function ReportsLineChart({ color, title, description, date, chart }) {
  const { data, options } = configsLineChart(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <TTBox padding="1rem">
        {useMemo(
          () => (
            <TTBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Line data={data} options={options} key={"test1"}/>
            </TTBox>
          ),
          [color, data, options]
        )}
        <TTBox pt={3} pb={1} px={1}>
          <TTTypography variant="h6" textTransform="capitalize">
            {title}
          </TTTypography>
          <TTTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </TTTypography>
          <Divider />
          <TTBox display="flex" alignItems="center">
            <TTTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </TTTypography>
            <TTTypography variant="button" color="text" fontWeight="light">
              {date}
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of ReportsLineChart
ReportsLineChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsLineChart
ReportsLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};
export default ReportsLineChart;