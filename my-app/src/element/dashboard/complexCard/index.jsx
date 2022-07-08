import { Card, Divider, Icon } from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import PropTypes from 'prop-types';

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
export default ComplexStatisticsCard;
