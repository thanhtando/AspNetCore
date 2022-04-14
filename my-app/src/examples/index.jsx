
//example
import React from "react";
import ReduxExample from './reduxex/index';
import ContextEx from './contextex';
import { ContextBasic, ContextChange, ContextNone } from './contextbasic';
import MemoBasic from './memobasic';
import { ForWardRefBasic, ForWardRefNone } from './forwardref';
import StyleComponent from './stylecomponent';
import Dashboard from '../page/dashboard/index';
import AlertTT from '../components/AlertTT/index';
import ThemeProExt from "./themeprovider/ThemeProExt";
import TemporaryDrawer from "./drawerTemp";
import ContextRed from "./contextReducer";
import StyleTest from "./teststyle";

const Example = () => {
  return(
    <div>
      <StyleTest />
      {/* <ContextRed /> */}
      {/* <ThemeProExt />
      <TemporaryDrawer /> */}
        {/* <Dashboard />
        <StyleComponent />
        <AlertTT />
        <ReduxExample />
        <ContextEx />
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
