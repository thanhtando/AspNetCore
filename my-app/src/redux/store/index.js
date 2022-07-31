
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import AlertSlices from '../slices';
import thunk  from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const RootState = {
  alert: AlertSlices.getInitialState(),
}
// const RootAction = {
//   alertAction: AlertSlices.actions,
// }
const RootReducer = combineReducers({
  alert: AlertSlices.reducer
  // appState,
  // player,
  // dialog,
  // gameMenu,
  // map,
  // world,
  // stats,
  // inventory,
  // monsters,
  // snackbar
})
// const perReducer = persistReducer(persistConfig, RootReducer);

// const middleWare = [logger, thunk]
const middleWare = [thunk]
const storeSetup = configureStore({
  reducer: RootReducer,
  preloadedState: RootState,
  devTools: true,
  middleware: middleWare,
  // enhancers:
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
// export const persistor = persistStore(storeSetup);
export default storeSetup