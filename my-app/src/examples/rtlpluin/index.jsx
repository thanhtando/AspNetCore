
//rtlPlugin
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  direction: 'rtl',
})
const AffectedText = styled('div')`
  text-align: left;
`;

const UnaffectedText = styled('div')`
  /* @noflip */
  text-align: left;
`;
const RtlPlugin = () => {

  return(
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <label>test</label>
        <MyComponent />
        {/* <TextField placeholder="Name" variant="standard" />
        <input type="text" placeholder="Name" />     */}
      </div>
    </ThemeProvider>

  )
}
const MyComponent = () => {
  return(
    <label>test rtl</label>
  )
}
export default RtlPlugin;
