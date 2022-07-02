function BreadcrumbsTT({icon, title, route, light}){

  const routes = route.slice(0, -1); 

  return(
    <TTBox mr={{ xs: 0, xl: 8 }}>
      <Breadcrumbs sx={{
        "& .MuiBreadcrumbs-separator": {
          color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
        }
      }}>
        {/* link */}
        <Link href="/">
          <TTTypography
            component="span"
            variant="body2"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            <Icon>{icon}</Icon>
          </TTTypography>
        </Link>
        {/* route */}
        {routes.map((el)=>(
          <Link href={`/${el}`} key={el}>
            <TTTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              opacity={light ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >{el}</TTTypography>
          </Link>
        ))}
        {/* title */}
        <TTTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {title.replace("-", " ")}
        </TTTypography>
      </Breadcrumbs>
      {/* title */}
      <TTTypography     
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        color={light ? "white" : "dark"}
        noWrap
      >
        {title.replace("-"," ")}
      </TTTypography>
    </TTBox>
  )
}
// Setting default values for the props of Breadcrumbs
BreadcrumbsTT.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
BreadcrumbsTT.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
}