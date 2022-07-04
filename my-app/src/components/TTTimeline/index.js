import { Card, Divider, Icon } from "@mui/material";
import { createContext, useContext } from "react";
import { useUIController } from "../../context/ui";
import TTBox from "../TTBox";
import TTTypography from "../TTTypography";
import { PropTypes } from 'prop-types';



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
  const [controller] = useUIController();
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