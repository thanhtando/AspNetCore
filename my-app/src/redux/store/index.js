import thunk from 'redux-thunk';
import AlertRed from '../slices';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

const RootState = {

}
const RootReducer = combineReducers({
  
})
const middleWare = [logger, thunk]
const storeSetup = configureStore({
  reducer: RootReducer,
  preloadedState: RootState,
  devTools: true,
  middleware: middleWare,
  // enhancers:
})
export default storeSetup