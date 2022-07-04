import { Stepper, styled } from "@mui/material";
import { forwardRef } from "react";

const StepperStyle = styled(Stepper)(({theme, ownerState})=>{

  return{
    backgroundColor: "inherit",
  }
});
const TTStepper = forwardRef(({color, bgColor, children, ...rest}, ref)=>{

  return(
    <StepperStyle
      {...rest}
      ref={ref}
      ownerState={{ color, bgColor }}
    >
    {children}
    </StepperStyle>
  )
})
export default TTStepper;
