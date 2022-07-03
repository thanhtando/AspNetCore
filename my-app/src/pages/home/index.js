

const Home = () => {


  return(
    <HomeLayout>
      <Card>
      <TTTypography
          variant="button"
          fontWeight="medium"
          color={"primary"}
          textGradient = {false}
        >Home Page</TTTypography>
        <Intro />
        {/* <FbAuthSignupBtn/> */}


        <TimeLineExample/>
        <PlanModal />
      </Card>
    </HomeLayout>
  )
}


