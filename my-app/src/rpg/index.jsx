//****************************インポート*******************/
import { Provider, useSelector, useDispatch } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers,  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage                          from 'redux-persist/lib/storage';
import thunk                            from 'redux-thunk';
import { configureStore, createSlice } from "@reduxjs/toolkit";

import { useState } from "react";

//****************************constants*******************/
// max number of inventory items
export const MAX_ITEMS = 8;
export const MAX_ITEMS_UPGRADE = 12;
// how far the player can 'see' or 'explore'
export const SIGHT_RADIUS = 3;
// how fast the player move animation plays (ms)
export const ANIMATION_SPEED = 350;
// size of tiles
export const SPRITE_SIZE = 40;
// number of tiles in the map
const TILE_HEIGHT = 15;
const TILE_WIDTH = 20;
export const MAP_DIMENSIONS = [TILE_WIDTH, TILE_HEIGHT];
// map size is set to 800 x 600
export const MAP_HEIGHT = SPRITE_SIZE * TILE_HEIGHT;
export const MAP_WIDTH = SPRITE_SIZE * TILE_WIDTH;
// configs for random map generation
export const MAX_TUNNELS = 60;
export const MAX_LENGTH = 5;
// set the main game's start map
export const START_MAP = '1_1';
// set the duration for showing the snackbar (ms)
export const SNACK_DURATION = 2500;
// set the size for the game viewport (in pixels)
export const GAME_VIEWPORT_SIZE = 350;
export const GAME_VIEWPORT_SIZE_LG = 400;
// set the minimum level for tier 2 items
export const TIER_2 = 10;
// set the pixel values for the different screen sizes
export const SCREEN_SMALL_WIDTH = 410;
export const SCREEN_SMALL_HEIGHT = 410;
export const SCREEN_MEDIUM_WIDTH = 600;
export const SCREEN_MEDIUM_HEIGHT = 680;
// set the number of tiles to pad the map with (so the player cant see edge)
export const MAP_PADDING_DISTANCE = 5;
// set the time for the map to transition in/out
export const MAP_TRANSITION_DELAY = 500;

export const SLICES_NAME = {
  COUNTER: "COUNTER",
  APP_STATE: "APP_STATE",
  WORLD: "WORLD",
  CHARACTER: "CHARCATER",
}

//****************************component*******************/
//****************************component*******************/
//****************************redux_module*******************/
  //slice
  const appstateInit = {}
  const appstateSlice = createSlice({
    name: SLICES_NAME.APP_STATE,
    initialState: appstateInit,
    reducers:{}
  });
// chacrater slice
const characInit = {
  direction: 'SOUTH',
  position: [0, 0],
  playerMoved: false,
  playerAttacked: false,
  monsterAttacked: false,
  playerDied: false,
  monsterDied: false
};
const characterSlice = createSlice({
  name: SLICES_NAME.CHARACTER,
  initialState: characInit,
  reducers:{}
});

  //counter slice
const counterSlice = createSlice({
  name: SLICES_NAME.COUNTER,
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
const { increment, decrement, incrementByAmount } = counterSlice.actions
{/*The function below is called a thunk and allows us to perform async logic. Itcan be dispatched like a regular action: `dispatch(incrementAsync(10))`. Thiswill call the thunk with the `dispatch` function as the first argument. Asynccode can then be executed and other actions can be dispatched*/}
const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
const selectCount = (state) => state.counter.value



  //config
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  appState: appstateSlice.reducer,
  character: characterSlice.reducer,
  // player,
  // dialog,
  // gameMenu,
  // map,
  // world,
  // stats,
  // inventory,
  // monsters,
  // snackbar
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeRpg = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(storeRpg);
//****************************コンポーネント*******************/

const DialogManager = () => {

  return(
    <div>
      <label> dialog manger</label>
    </div>
  )
}
const Character = () => {

  return(
    <div>
      <label>character</label>
    </div>
  )
}
const Footer = () => {
  return(
    <div>
      <label>footer</label>
    </div>
  )
}
const Counter = () => {
  const count = useSelector(selectCount);
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <label>test:{counter.value}</label>
      <div >
        <button

          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span >{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div >
        <input

          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button

          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button

          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
const GameMap = () => {
  return(
    <div>game map</div>
  )
}
const Controls = () => {
  return(
    <div>control</div>
  )
}
const Player = () => {
  return(
    <div>player</div>
  )
}
const Monsters = () => {
  return(
    <div>monsters</div>
  )
}
const World = () => {
  return(
    <div style={{padding: 30}}>
      <label>world</label>
      <Counter/>
      
      <Controls />

      <GameMap />

      <Player />
      <Character/>

      <Monsters />
    </div>
  )
}
const Viewport = ({children}) => {

  return(
    <div>
      {children}
    </div>
  )
}
const GameMenu = () => {

  return(
    <div>
      <label>game menu</label>
    </div>
  )
}
const MyRpg = () => {

  return(
    <div>
      <label>myrpg</label>
      <Viewport>
        <World/>
        <DialogManager/>
        <Footer/>
      </Viewport>
      <GameMenu/>
    </div>
  )
}
const RPG = () => {

  console.log("test rpg")
  return(
    <Provider store={storeRpg}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <MyRpg/>
      </PersistGate>
    </Provider>
  )
}

export default RPG;

//rpg-react-redux-master