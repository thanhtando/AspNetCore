import { Container, Icon, Link } from "@mui/material";
import TTBox from "../../../../components/TTBox";
import PropTypes from 'prop-types';
import TTTypography from "../../../../components/TTTypography";
import { typography } from "../../../../theme/components/typography";

//page of footer
function FooterPage({ light }) {
  const { size } = typography;

  return (
    <TTBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <TTBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", xl: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <TTBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <TTBox fontSize={size.md} color={light ? "white" : "dark"} mb={-0.5} mx={0.25}>
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
              {/* <Favorite color="inherit" fontSize="inherit"/> */}
            </TTBox>
            by
            <Link to="https://www.google.com" target="_blank">
              <TTTypography
                variant="button" 
                fontWeight="medium" 
                color={light ? "white" : "dark"}
              >
                &nbsp;Tan Tan&nbsp;
              </TTTypography>
            </Link>
            for a better web.
          </TTBox>
          <TTBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <TTBox component="li" pr={2} lineHeight={1}>
              <Link href="/signup" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Tan Tan
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  About Us
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Blog
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" pl={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  License
                </TTTypography>
              </Link>
            </TTBox>
          </TTBox>
        </TTBox>
      </Container>
    </TTBox>
  );
}
// Setting default props for the Footer
FooterPage.defaultProps = {
  light: false,
};
// Typechecking props for the Footer
FooterPage.propTypes = {
  light: PropTypes.bool,
};

export default FooterPage;