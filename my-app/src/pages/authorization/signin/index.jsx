const SignIn = () => {

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  //
  const navigate = useNavigate()
  const handleSubmit = (event) => {
      event.preventDefault();
      //firebase
      const { email, password } = event.target.elements;
      signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential)=>{
              //signed in
              const user = userCredential.user;
              console.log("user: ", user);
              navigate("/dashboard");
          })
          .catch((error)=>{
              // const errorCode = error.code;
              const errorMessage = error.message;
              console.log("errorMessage: ", errorMessage);
          })
  }
  return (
    <BasicLayout image={bgImage}>
    {/* <BasicLayout image={bgTest2}> */}
      <Card sx={{mt: 2}}>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </TTTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
          </Grid>
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form" onSubmit={handleSubmit}>
            <TTBox mb={2}>
              <TTInput 
                type="email" 
                name="email" 
                label="Email"
                fullWidth
                // disabled 
                // error
                // success
              />
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="password" label="Password" name="password" fullWidth />
            </TTBox>
            <TTBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <TTTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </TTTypography>
            </TTBox>
            <TTBox mt={4} mb={1}>
              <TTButton 
                variant="gradient" 
                color="info" 
                fullWidth = {true}
                type="submit"
                // onClick={handleSubmit}
              >
                sign in
              </TTButton>
            </TTBox>
            <TTBox mt={3} mb={1} textAlign="center" display="flex" flexDirection="column">
              <TTTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <TTTypography
                  component={Link}
                  // to="/signup"
                  href="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient={true}
                >
                  Sign up
                </TTTypography>
              </TTTypography>
                <TTTypography
                  component={Link}
                  // to="/signup"
                  href="/reset"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient={true}
                >
                  Reset Password
                </TTTypography>

            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </BasicLayout>
  );
}