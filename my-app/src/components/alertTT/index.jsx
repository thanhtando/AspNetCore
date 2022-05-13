
// components
/// AlertTTimport React from "react";
// import { Alert, AlertTitle, Fade } from "@mui/material";
import { Fade } from "@mui/material";
import { useState } from "react";
// import { styled } from "@mui/material/styles";
// import { fontWeight } from "@mui/system";

const ALERTSTATE = {
  MOUNT: "mount",
  UNMOUNT: "unmount",
  FADEOUT: "fadeOut",
  FADEIN: "fadeIn",
}
// const AlertTTColseIcon = styled("span")(({theme})=>{

//   const { palette, typography, functions} = theme;
//   const {white} = palette;
//   const {size, fontWeightMedium} = typography;
//   const {pxToRem} = functions
//   return{
//     color: white.main,
//     fontSize: size.xl,
//     padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
//     marginLeft: pxToRem(40),
//     fontWeight: fontWeightMedium,
//     cursor: "pointer",
//     lineHeight: 0,
//   }

// })
const AlertTT = ({
  color, dismissible, children, ...rest
}) => {

  const [alertStatus, setAlertStatus] = useState("mount");
  // const handleAlertStatus = () =>{
  //   setAlertStatus("fadeOut");
  // }

  const AlertTemplate = (mount=true) => {
    return(
      <Fade in={mount} timeout={300} >
        <div style={{backgroundColor: "aqua", width: 200}}>
          <label>test</label>
        </div>
      </Fade>
    )
  }

  switch(alertStatus){
    case ALERTSTATE.MOUNT: return AlertTemplate(true);
    case ALERTSTATE.FADEOUT: {
      setTimeout(() => setAlertStatus(ALERTSTATE.UNMOUNT), 400);
      return AlertTemplate(false);
    }
    default: AlertTemplate(); break;
  }
  return null;
  // return(
  //   <div>
  //     <Alert severity="error">
  //         <AlertTitle>Error</AlertTitle>
  //         This is an error alert — <strong>check it out!</strong>
  //     </Alert>
  //     <AlertTemplate />
  //   </div>
  // )
}

export default AlertTT;