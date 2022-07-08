
import { Card, Divider, Icon} from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import PropTypes from 'prop-types';


function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <TTBox p={2} mx={3} display="flex" justifyContent="center">
        <TTBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </TTBox>
      </TTBox>
      <TTBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
        {description && (
          <TTTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </TTTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <TTTypography variant="h5" fontWeight="medium">
            {value}
          </TTTypography>
        )}
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;