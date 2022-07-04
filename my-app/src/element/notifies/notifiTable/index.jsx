import { Card, Grid } from "@mui/material";
import { useState } from "react";
import TTBox from "../../../components/TTBox";
import TTButton from "../../../components/TTButton";
import TTSnackbar from "../../../components/TTSnackbar";
import TTTypography from "../../../components/TTTypography";


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
  const ErrorSB = (
    <TTSnackbar
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
            <TTButton onClick={handleClick}>Open simple snackbar</TTButton>
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
export default NotifiTable;