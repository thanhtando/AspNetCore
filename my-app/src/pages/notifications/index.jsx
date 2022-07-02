
const NotificationItem = forwardRef(({icon, title, ...rest}, ref)=>(
  <MenuItem {...rest} ref={ref} sx={(theme) => NavbarMenuItem(theme)}>
    <TTBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <TTTypography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </TTTypography>
      <TTTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </TTTypography>
    </TTBox>
  </MenuItem>
));



const AlertTable = () => {
  const alertContent = (name) => (
    <TTTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <TTTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </TTTypography>
      . Give it a click if you like.
    </TTTypography>
  );
  return(
    <Card>
    <TTBox p={2}>
      <TTTypography variant="h5">Alerts</TTTypography>
    </TTBox>
    <TTBox pt={2} px={2}>
      <TTAlert color="primary" dismissible={true}>
        {alertContent("primary")}
      </TTAlert>
    </TTBox>
     {/* <TTBox pt={2} px={2}>
     {ColorArr.map((itemColor) => alertContent(itemColor))}
       <Alert color="primary" dismissible> */}
       <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
      <Stack spacing={2} p={5}>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
     {/* <TTBox pt={2} px={2}>
       <Alert severity="primary" dismissible>
        {alertContent("primary")}
       </Alert>
       <Alert severity="secondary" dismissible>
       </Alert>
       <Alert severity="secondary" dismissible>
        {alertContent("secondary")}
      </Alert>
        <Alert severity="success" dismissible>
          {alertContent("success")}
        </Alert>
        <Alert severity="error" dismissible>
          {alertContent("error")}
        </Alert>
        <Alert severity="warning" dismissible>
          {alertContent("warning")}
        </Alert>
        <Alert severity="info" dismissible>
          {alertContent("info")}
        </Alert>
        <Alert severity="light" dismissible>
          {alertContent("light")}
        </Alert>
        <Alert severity="dark" dismissible>
          {alertContent("dark")}
        </Alert>
      </TTBox>  */}
    </Card>
  )
}

const NotifiTable = () => {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  //
  const ErrorSB = (<TTSnackbar
      color="error"
      icon="warning"
      title="Tan dep trai"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  )
  const SuccessSB = (
    <TTSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  )
  const WarningSB = (
    <TTSnackbar 
      color="warning"
      icon="star"
      title="Tan dep trai"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
    
  )
  // const [open, setOpen] = React.useState(false);
  const InfoSB = (
    <TTSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );
  

  const handleClick = () => {
    setInfoSB(true);
  };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return(
    <Card>
      <TTBox p={2} lineHeight={0}>
        <TTTypography variant="h5">Notifications</TTTypography>
        <TTTypography variant="button" color="text" fontWeight="regular">
          Notifications on this page use Toasts from Bootstrap. Read more details here.
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
              success notification
            </TTButton>
            {SuccessSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
              info notification
            </TTButton>
            <Button onClick={handleClick}>Open simple snackbar</Button>
            {InfoSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
              warning notification
            </TTButton>
            {WarningSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
              error notification
            </TTButton>
            {ErrorSB}
          </Grid>
        </Grid>
      </TTBox>
    </Card>
  )
}
const TestDb = () => {

  const {user} = useAuthContext();

  if(user){
    // setDoc(doc(db, 'users', user.uid), {
    //   email: user,
    //   registeredAt: Timestamp.fromDate(new Date()),
    // });
  }
  return(
    <TTBox>
      Tan dep trai
    </TTBox>
  )
}
const Notifications = () => {


  return(
  <DashboardLayout>
    {/* <TTBox mt={6} mb={3}> */}
    <Grid container spacing={3} justifyContent="center" mt={6} mb={3}>
      <Grid item xs={12} lg={8}>
        <AlertTable/>
      </Grid>
      <Grid item xs={12} lg={8}>
        <NotifiTable/>
      </Grid>
      <Grid item xs={12} lg={8}>
        <TestDb />
      </Grid>
    </Grid>
    {/* </TTBox> */}
  </DashboardLayout>
  )
}
