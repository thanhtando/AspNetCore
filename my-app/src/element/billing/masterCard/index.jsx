import PropTypes from 'prop-types';
import TTBox from '../../../components/TTBox';
import { Card } from '@mui/material';
import TTTypography from '../../../components/TTTypography';
import Icon from '@mui/material/Icon';
import masterCardLogo from "../../../assets/images/logos/mastercard.png";
import pattern from "../../../assets/images/illustrations/pattern-tree.svg";
function MasterCard({ color, number, holder, expires }) {
  const numbers = [...`${number}`];
  
  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card
      sx={({ palette: { gradients }, functions: { linearGradient }, boxShadows: { xl } }) => ({
        background: gradients[color]
          ? linearGradient(gradients[color].main, gradients[color].state)
          : linearGradient(gradients.dark.main, gradients.dark.state),
        boxShadow: xl,
        position: "relative",
      })}
    >
      <TTBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.2}
        sx={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}
      />
      <TTBox position="relative" zIndex={2} p={2}>
        <TTBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon fontSize="default">wifi</Icon>
        </TTBox>
        <TTTypography variant="h5" color="white" fontWeight="medium" sx={{ mt: 3, mb: 5, pb: 1 }}>
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </TTTypography>
        <TTBox display="flex" justifyContent="space-between" alignItems="center">
          <TTBox display="flex" alignItems="center">
            <TTBox mr={3} lineHeight={1}>
              <TTTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Card Holder
              </TTTypography>
              <TTTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {holder}
              </TTTypography>
            </TTBox>
            <TTBox lineHeight={1}>
              <TTTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Expires
              </TTTypography>
              <TTTypography variant="h6" color="white" fontWeight="medium">
                {expires}
              </TTTypography>
            </TTBox>
          </TTBox>
          <TTBox display="flex" justifyContent="flex-end" width="20%">
            <TTBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={1} />
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;