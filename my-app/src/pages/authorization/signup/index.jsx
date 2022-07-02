const SignUp = () => {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
      event.preventDefault();
      //firebase
      const { email, password, name } = event.target.elements;
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential)=>{
            //signed in
            const user = userCredential.user;
            console.log("user: ", user);
            navigate("/dashboard")
        })
        .catch((error)=>{
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage: ", errorMessage);
        })
  }
  return(
    <CoverLayout image={bgImage_su}>
    {/* <CoverLayout image={bgTest2}> */}
      <Card>
        {/* intro */}
        <TTBox
         variant = "gradient"
         bgColor = "info"
         borderRadius = "lg"
         coloredShadow = "success"
         mx={2}
         mt={-3}
         p={3}
         mb={1}
         textAlign="center"
        >
          <TTTypography
            variant = "h4"
            fontWeight = "medium"
            color = "white"
            mt = {1}
          >Join us today</TTTypography>
          <TTTypography
            display="block" 
            variant="button" 
            color="white" 
            my={1}
          >Enter your email and password to register</TTTypography>
        </TTBox>
        {/* content form*/}
        <TTBox  component="form" role="form" onSubmit={handleSubmit}
          pt={4} pb={3} px={3}
        >
          {/* input */}
          <TTBox>
            <TTBox mb={2}>
              <TTInput type="text" name="name" label="Name" variant="standard" fullWidth></TTInput>
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="email" name="email" label="Email" variant="standard" fullWidth></TTInput>
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="password" name="password" label="Password" variant="standard" fullWidth></TTInput>
            </TTBox>
          </TTBox>
          {/* term and condition */}
          <TTBox
            display="flex"
            alignItems="center"
            ml = {-1}
          >
            <Checkbox/>
            <TTTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >&nbsp;&nbsp;I agree the&nbsp;</TTTypography>
            <TTTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="bold"
              color="info"
              textGradient = {true}
            >Terms and Conditions</TTTypography>
          </TTBox>
          {/* submit */}
          <TTBox mt={4} mb={1}>
            <TTButton
              variant="gradient"
              color="info"
              fullWidth
              type="submit"
            >sign Up</TTButton>
          </TTBox>
          {/* form of footer */}
          <TTBox textAlign="center" mt={3} mb={1}>
            <TTTypography variant="button" color="text">
              Already have an account?{" "}
              <TTTypography
                component={MuiLink}
                // to={"/signin"}
                href={"/signin"}
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient={true}
              >Sign In</TTTypography>
            </TTTypography>
          </TTBox>
        </TTBox>
      </Card>
    </CoverLayout>
  )
}