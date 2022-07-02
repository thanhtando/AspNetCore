
//page of footer
function Footer({ light }) {
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
Footer.defaultProps = {
  light: false,
};
// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};


// dashboard of footer
function FooterDash({company, links}){
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <TTBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <TTTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </TTTypography>
        </Link>
      </TTBox>
    ));
  return(
    <TTBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <TTBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <TTBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </TTBox>
        by
        <Link href={href} target="_blank">
          <TTTypography variant="button" fontWeight="medium">
            &nbsp;{name}&nbsp;
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
        {renderLinks()}
      </TTBox>
    </TTBox>
  )
}
FooterDash.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Tan Tan" },
  links: [
    { href: "https://www.google.com/", name: "Tan Tan" },
    { href: "https://www.google.com/presentation", name: "About Us" },
    { href: "https://www.google.com/blog", name: "Blog" },
    { href: "https://www.google.com/license", name: "License" },
  ],
}
FooterDash.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
}
// const ColorArr = [
//   "primary", "secondary", 
//   "info", "success", "error", "warning",
//   "light", "dark"
// ]