import { createTheme } from "@mui/material";
import breakpoints from "../base/breakpoints";

//can add new breakpoints using this file
//can customized the breakpoints for the entire using this file
const ThemeDefault = createTheme({
  breakpoints: {...breakpoints},

});

export default ThemeDefault;