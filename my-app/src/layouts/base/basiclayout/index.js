
function BasicLayout({ image, children }) {

  // console.log("Basic layout");
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "external",
          route: "http://www.google.com",
          label: "Learn Start",
          color: "dark",
        }}
        light={false}
      />
      <TTBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        zIndex={-1}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <TTBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </TTBox>
      <Footer light />
    </PageLayout>
  );
}
// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

