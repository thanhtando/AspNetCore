
//styleComponent
import React, { useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const TooltipStyle = styled(Tooltip)(({className, ...props})=>{
  return{
    popper: className,
    color: "red",
  }
}
);
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;
const CustomSlider1 = styled(Slider)`
color: #20b2aa;

:hover {
  color: #2e8b57;
}
`;
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref} style={{backgroundColor: "blue"}}>Bin</div>
});
const StyleComponent = () => {
  const colorRef = useRef(null);
  useEffect(()=>{
    colorRef.current.style.backgroundColor  = "red";
  });
  return(
    <div>
      <TooltipStyle title="i am navy">
        <Button variant="contained" color="primary">
            Styled tooltip 1
        </Button>    
      </TooltipStyle>
      <StyledTooltip title={"a am default"}>
      <Button variant="contained" color="primary">
            Styled tooltip 2
        </Button>
      </StyledTooltip>
      <CustomSlider1 defaultValue={30}/>
      <Tooltip title={"Delete"}>
        <MyComponent ref={colorRef}/>
      </Tooltip>
    </div>

  )
}

export default StyleComponent;