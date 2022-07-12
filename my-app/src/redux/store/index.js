
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import AlertSlices from '../slices';

const RootState = {
  alert: AlertSlices.getInitialState(),
}
const RootAction = {
  alertAction: AlertSlices.actions,
}
const RootReducer = combineReducers({
  alert: AlertSlices.reducer
})
const middleWare = [logger]
const storeSetup = configureStore({
  reducer: RootReducer,
  preloadedState: RootState,
  devTools: true,
  middleware: middleWare,
  // enhancers:
})
export default storeSetup