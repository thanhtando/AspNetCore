import React from "react";
import MeasureRender from '../../performance/measure/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import storeSetup, { persistor } from "../../redux/store";
import { UIControllerProvider } from "../../context/ui";
import AuthProvider from "../../context/auth";
// import { PersistGate } from 'redux-persist/integration/react';
import Spinner from '../../examples/rpg_tochu/spinner/index';

const RootProvider = ({children}) => {
  return(
    <MeasureRender name={"RootProvider"}>
      <AuthProvider>
        <Provider store={storeSetup}>
          {/* <PersistGate loading={<Spinner/>} persistor={persistor}> */}
            <BrowserRouter>
              <UIControllerProvider>
                {children}
              </UIControllerProvider>
            </BrowserRouter>
          {/* </PersistGate> */}
        </Provider>
      </AuthProvider>
    </MeasureRender>
  )
}
export default RootProvider;
