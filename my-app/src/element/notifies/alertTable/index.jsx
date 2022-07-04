import { Alert, AlertTitle, Button, Card, Stack } from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import TTAvatar from '../../../components/TTAvartar/index';
import TTAlert from '../../../components/TTAlert/index';

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
export default AlertTable;