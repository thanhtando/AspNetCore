
//example
import React from "react";
// import ReduxExample from './reduxEx/index';
// import ContextEx from './contextEx';
// import { ContextBasic, ContextChange, ContextNone } from './contextBasic';
// import MemoBasic from './memoBasic';
// import { ForWardRefBasic, ForWardRefNone } from './forwardRef';
// import StyleComponent from './styleComponent';
// import ThemeProExt from "./themeProvider";
// import TemporaryDrawer from "./drawerTemp";
// import ContextRed from "./contextReducer";
// import StyleTest from "./testStyle";

const Example = () => {
  const test = process.env.REACT_APP_PROJECT_ID;
  console.log("test environment:", test);
  return(
    <div>
      <label>abc_{process.env.REACT_APP_PROJECT_ID}</label>
      {/* <StyleTest />
      <ContextRed />
      <ThemeProExt />
      <TemporaryDrawer />
        <StyleComponent /> */}
        {/* <AlertTT /> */}
        {/* <ReduxExample /> */}
        {/* <ContextEx />
        <ContextChange />
        <ContextBasic />
        <ContextNone />
        <MemoBasic/>
        <ForWardRefBasic />
        <ForWardRefNone /> */}
    </div>
  )
}
export default Example;
