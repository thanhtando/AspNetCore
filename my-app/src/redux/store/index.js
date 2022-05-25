import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AlertRed from '../slices';
const StoreRedux = configureStore({
  reducer:{
    alerts: AlertRed
  },
  middleware: [logger, thunk],
})
export default StoreRedux;