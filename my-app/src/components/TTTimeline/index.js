
const ComplexStatisticsCard = ({
  color, title, count, percentage, icon
}) => {
  return(
    <Card>
      {/* content */}
      <TTBox display="flex" justifyContent="space-between" pt={1} px={2}>
        {/* icon */}
        <TTBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">{icon}</Icon>
        </TTBox>
        {/* title */}
        <TTBox textAlign="right" lineHeight={1.25}>
          <TTTypography variant="button" fontWeight="light" color="text">{title}</TTTypography>
          <TTTypography variant="h4">{count}</TTTypography>
        </TTBox>
      </TTBox>
      <Divider/>
      {/* percentage */}
      <TTBox pb={2} px={2}>
        <TTTypography
          component="p" 
          variant="button"
          color="text"
          display="flex"
        >
          <TTTypography 
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >{percentage.amount}</TTTypography>
          &nbsp;{percentage.label}
        </TTTypography>
      </TTBox>
    </Card>
  )
}
// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};
const DataOrder = [
  {
    color:"dark",
    icon:"weekend",
    title:"Bookings",
    count:281,
    percentage:{
      color: "success",
      amount: "+55%",
      label: "than lask week",
    }
  },
  {
    color:"primary",
    icon:"person_add",
    title:"Followers",
    count:"+91",
    percentage:{
      color: "success",
      amount: "",
      label: "Just updated",
    },
  },
  {
    icon:"leaderboard",
    title:"Today's Users",
    count:"2,300",
    percentage:{
      color: "success",
      amount: "+3%",
      label: "than last month",
    }
  },
  {
    color:"success",
    icon:"store",
    title:"Revenue",
    count:"34k",
    percentage:{
      color: "success",
      amount: "+1%",
      label: "than yesterday",
    }
  },
]
const DataTimeline = [
  {
    color:"success",
    icon:"notifications",
    title:"$2400, Design changes",
    dateTime:"22 DEC 7:20 PM",
  },
  {
    color:"error",
    icon:"inventory_2",
    title:"New order #1832412",
    dateTime:"21 DEC 11 PM",
  },
  {
    color:"warning",
    icon:"payment",
    title:"New card added for order #4395133",
    dateTime:"20 DEC 2:20 AM",
  },
  {
    color:"primary",
    icon:"vpn_key",
    title:"New card added for order #4395133",
    dateTime:"18 DEC 4:54 AM",
  },
]
// The Timeline main context
const TimelineCT = createContext();

// Timeline context provider
function TimelineProvider({ children, value }) {
  return <TimelineCT.Provider value={value}>{children}</TimelineCT.Provider>;
}

// Timeline custom hook for using context
function useTimeline() {
  return useContext(TimelineCT);
}
function TimelineList({ title, dark, children }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card>
        <TTBox
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{ background: ({ palette: { background } }) => darkMode && background.card }}
        >
          <TTBox pt={3} px={3}>
            <TTTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </TTTypography>
          </TTBox>
          <TTBox p={2}>{children}</TTBox>
        </TTBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
const TimelineChild = ({
  color, icon, title, dateTime, 
  description, lastItem
}) => {

  const isDark = useTimeline();

  return (
    <TTBox position="relative" mb={3} sx={(theme) => TimelineChildStyle(theme, { lastItem, isDark })}>
      <TTBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </TTBox>
      <TTBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <TTTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </TTTypography>
        <TTBox mt={0.5}>
          <TTTypography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </TTTypography>
        </TTBox>
        <TTBox mt={2} mb={1.5}>
          {description ? (
            <TTTypography variant="button" color={isDark ? "white" : "dark"}>
              {description}
            </TTTypography>
          ) : null}
        </TTBox>
      </TTBox>
    </TTBox>
  );
}
// Setting default values for the props of TimelineItem
TimelineChild.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineChild.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};
function TimelineChildStyle(theme, ownerState){

  const { borders } = theme;
  const { lastItem, isDark} = ownerState;

  const { borderWidth, borderColor} = borders;

  return{
    "&: after":{
      content: !lastItem && "''",
      position: "absolute",
      top: "2rem",
      left: "17px",
      height: "100%",
      opacity: isDark ? 0.1 : 1,
      borderRight: `${borderWidth[2]} solid ${borderColor}`,
    }
  }
}