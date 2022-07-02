const PlanModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const innerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleSubmit = (event) => {
    console.log(event.target.elements);
  }
  return (
    <TTBox>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalLayout>
        <Fade in={open}>
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
                  <TTInput type="text" name="name" variant="standard" fullWidth></TTInput>
                </TTBox>
                <TTBox mb={2}>
                  <TTInput type="email" name="email" variant="standard" fullWidth></TTInput>
                </TTBox>
                <TTBox mb={2}>
                  <TTInput type="password" name="password" variant="standard" fullWidth></TTInput>
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
        </Fade>
        </ModalLayout>

      </Modal>
    </TTBox>
  );
}