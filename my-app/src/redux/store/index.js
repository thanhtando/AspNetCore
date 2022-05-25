import { configStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AlertReducer from '../../examples/reduxbasic/reduce';

const StoreRedux = configStore({
  reducer:{
    alerts: AlertReducer,
  },
  middleware: [logger, thunk],
})
export default StoreRedux;