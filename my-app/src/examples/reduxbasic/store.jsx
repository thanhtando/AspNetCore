
/// service
/// store
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import RootReducer from '../reducer/root.reducer';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleWave = createLogger();

export const store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleWave
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
