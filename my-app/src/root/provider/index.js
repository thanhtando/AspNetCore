import React from "react";
import MeasureRender from '../../performance/measure/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import storeSetup from "../../redux/store";
import { UIControllerProvider } from "../../context/ui";
import AuthProvider from "../../context/auth";

const RootProvider = ({children}) => {
  return(
    <MeasureRender name={"RootProvider"}>
      <AuthProvider>
        <Provider store={storeSetup}>
          <BrowserRouter>
            <UIControllerProvider>
              {children}
            </UIControllerProvider>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </MeasureRender>
  )
}
export default RootProvider;
