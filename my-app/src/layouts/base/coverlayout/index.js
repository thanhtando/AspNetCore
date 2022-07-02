function CoverLayout({coverHight, children, image}){

  return(
    <PageLayout>
      {/* defaultNavbar */}
      <DefaultNavbar 
        action={{
          type: "external",
          route: "http://www.google.com",
          label: "Test default",
          // color: "info",
        }}
        light={true}
        transparent={true}
      />
      {/* backgroundImage  */}
      <TTBox
        width="calc(100% - 2rem)"
        minHeight={coverHight}
        borderRadius="xl"
        m = {2}
        // mx={2}
        // my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* content */}
      <TTBox
        mt = {{xs: -20, lg: -18}}
        mx = "auto"
        px = {1}
        width="calc(100% - 2rem)"
      >
        <Grid container spacing={1} justifyContent={"center"}>
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </TTBox>
      {/* foot */}
      <Footer />
    </PageLayout>
  )
}
CoverLayout.defaultProps = {
  coverHight: "35vh"
}
CoverLayout.propTypes = {
  coverHight: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}