
import PropTypes from 'prop-types';
import { Card, Divider, Icon } from '@mui/material';
import TTBox from '../../../../components/TTBox/index';
import { useMemo } from 'react';
import TTTypography from '../../../../components/TTTypography/index';
import { Bar } from 'react-chartjs-2';

function configsBarChart(labels, datasets) {

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
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
      },
    },
  };
}
function ReportsBarChart({ color, title, description, date, chart }) {
  const { data, options } = configsBarChart(chart.labels || [], chart.datasets || {});

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
              <Bar data={data} options={options} />
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

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};
export default ReportsBarChart;