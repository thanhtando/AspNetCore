
//teststyle
import { Box, styled } from "@mui/material";
import React from "react";
import { forwardRef } from "react";
import'./styleB.scss';
const StyleTest = () => {
  const colorChange = () =>{
    console.log("test color change");
  }
  return(
    <BoxDT bgColor={"blue"} colorChange={colorChange} />
  )
}
const BoxStyle = styled(Box)(({ownerState, theme, onClick})=>{
  const { palette, functions } = theme;
  const { gradients, grey, white } = palette;
  const { bgColor, color, opacity } = ownerState;
  console.log(bgColor);
  return{
    backgroundColor: bgColor,
    color: grey[900],
  }
})
const BoxDT = forwardRef(({bgColor, color, opacity, colorChange, ...rest}, ref) => {

  return(
    <BoxStyle
      {...rest}
      ref={ref}
      onClick={colorChange}
      ownerState = {{bgColor, color, opacity}}
    >
      <label>thanhtan</label>
    </BoxStyle>
  )
})
export default StyleTest;
