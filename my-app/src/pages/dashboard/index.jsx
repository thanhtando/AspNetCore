
const OrdersOverview = () => {

  return(
    <Card sx={{height: "100%"}}>
      {/* title */}
      <TTBox pt={3} px={3}>
        <TTTypography variant="h6" fontWeight="medium"> Orders Overview</TTTypography>
        <TTBox mt={0} mb={2}>
          <TTTypography variant="button" color="text" fontWeight="regular">
            <TTTypography
              display="inline" variant="body2" verticalAlign="middle"
            >
              <Icon
                sx={{color:({palette:{success}})=>success.main}}
              >arrow_upward</Icon>
            </TTTypography>&nbsp;
            <TTTypography
              variant="button" color="text" fontWeight="medium"
            >24%</TTTypography>{" "} this month
          </TTTypography>
        </TTBox>
      </TTBox>
      {/* content (timeline) */}
      <TTBox p={2}>
      {DataTimeline.map((item, index)=>(
        <TimelineChild key={index}
          color={item.color}
          icon={item.icon}
          title={item.title}
          dateTime={item.dateTime}
          lastItem={index===3}
        />
      ))}
      </TTBox>
    </Card>
  )
}
const ProjectDatas = () => {
  const avatars = (members) =>
  members.map(([image, name]) => (
    <Tooltip key={name} title={name} placeholder="bottom">
      <TTAvatar
        src={image}
        alt="name"
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));

  const Company = ({ image, name }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" />
      <TTTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </TTTypography>
    </TTBox>
  );

  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "budget", accessor: "budget", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Material UI XD Version" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={60} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={10} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Fix Platform Errors" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={100} color="success" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={100} color="success" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoJira} name="Add the New Pricing Page" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $500
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={25} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={40} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
    ],
  };
}
function Projects() {
  const { columns, rows } = ProjectDatas();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <TTBox>
          <TTTypography variant="h6" gutterBottom>
            Projects
          </TTTypography>
          <TTBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <TTTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </TTBox>
        {renderMenu}
      </TTBox>
      <TTBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </TTBox>
    </Card>
  );
}


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
const reportsBarChartData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
};
const reportsLineChartData = {
  sales: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
  },
  tasks: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Desktop apps", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
  },
};
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
                <ReportsLineChart
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