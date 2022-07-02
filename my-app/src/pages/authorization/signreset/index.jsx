const SignReset = () =>{
  return(
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </TTTypography>
          <TTTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </TTTypography>
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form">
            <TTBox mb={4}>
              <TTInput type="email" label="Email" variant="standard" fullWidth />
            </TTBox>
            <TTBox mt={6} mb={1}>
              <TTButton variant="gradient" color="info" fullWidth>
                reset
              </TTButton>
            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </CoverLayout>
  )
}