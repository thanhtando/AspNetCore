//****************************インポート*******************/
import { Provider, useSelector, useDispatch } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers,  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage                          from 'redux-persist/lib/storage';
import thunk                            from 'redux-thunk';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import _debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from "react";
import { func } from "prop-types";
import { styled } from '@mui/material';

import WalkSprite from './myassets/player_walk.png';
import SwordSlash    from './myassets/sword-slash.png';
import MonsterSlash  from './myassets/monster-slash.png';
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
  CHARACTER: "CHARACTER",
}
export const DIRECTION_MAP = {
  SOUTH: 0,
  NORTH: 1,
  WEST: 2,
  EAST: 3,
}
//****************************component*******************/
//****************************component*******************/
//****************************redux_module*******************/
//slice
const appstateInit = {
  app: "test"
}
const appstateSlice = createSlice({
  name: SLICES_NAME.APP_STATE,
  initialState: appstateInit,
  reducers:{}
});
//dialogmanager
const dialogInit = {  
  gameText: false,
  gameOver: false,
  gameStart: true,
  gameInstructions: false,
  gameSelect: null,
  gameWin: false,
  paused: true,
  chest: false,
  chestOpen: false,
  shopS: false,
  settings: false,
  inventory: false,
  levelUp: false,
  gameTest: "test"
}
const dialogSlice = createSlice({
  name: 'DIALOG',
  initialState: {
    gameText: false,
    gameOver: false,
    gameStart: true,
    gameInstructions: false,
    gameSelect: null,
    gameWin: false,
    paused: true,
    chest: false,
    chestOpen: false,
    shop: false,
    settings: false,
    inventory: false,
    levelUp: false,
    gameTest: "test"
  },
  reducers:{
    pause(state, action){
      const { shopS, chest, gameStart, inventory, gameOver, gameText, gameWin, gameSelect, gameInstructions, levelUp, pause } = action.payload;
      return {
        ...state,
        levelUp: levelUp || false,
        shopS: shopS || false,
        chest: chest || false,
        gameStart: gameStart || false,
        inventory: inventory || false,
        gameOver: gameOver || false,
        gameText: gameText || false,
        gameWin: gameWin || false,
        gameSelect: gameSelect || null,
        gameInstructions: gameInstructions || false,
        paused: pause
      };
    }
  }
});
const {pause} = dialogSlice.actions;
//character state
const characterInit = {
  attackAnimationPlay: 'paused',
  attackAnimationLoc: [0, 0],
  animationWalkSound: null,
  animationAttackSound: null,
  monsterAttackAnimationPlay: 'paused',
  monsterAnimationAttackSound: null,
  monsterDeath: null,
  playerDeath: null,
  leftSideStride: true,
  stamp: 0
}
const characterSlice = createSlice({
  name: SLICES_NAME.CHARACTER,
  initialState: characterInit,
  reducers:{

  }
});

const controlInit = {
  isGamePaused: false,
  attackMonster: false,
  movePlayer: {
    test: "test"
  },
}
const controlSlice = createSlice({
  name: "CONTROL",
  initialState: controlInit,
  reducers:{

  }
})
const movePlayer = (direction) => (dispatch) => {

  //return(dispatch, getState)=>{

  //}
  //dispatch()
}
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
  controlGame: controlSlice.reducer,
  // player,
  dialog: dialogSlice.reducer,
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

  const dialog = useSelector(state=>state.dialog);
  const {gameTest, chest, inventory, gameText, gameOver, gameStart, gameSelect, gameWin, gameInstructions, paused, settings, shop, levelUp } = dialog;

  console.log("dialog", dialog);
  const dispatch = useDispatch();
  let PauseComp = null;
  let SettingsComp = null;
  let LevelUpComp = null;
  return(
    <div>
      <label> dialog manger</label>
      <button onClick={()=>dispatch(dialogSlice.actions.pause())}>check</button>
    </div>
  )
}
const CharacterStyle = styled('div')(()=>{

  return{
    color: 'red',
    backgroundColor: 'yellow',
    position: 'absolute',
    width: 40,
    height: 40,
    transition: `left 0.5s ease-in-out 0s, top 0.5s ease-in-out 0s`
  }
})
const Character = () => {

  const canvasRef = useRef();
  const characterState = useSelector(state=>state.character);
  const dispatch = useDispatch();
  console.log(characterState);
  const sprite = new Image();
  //avatar
  function avatar(action, dir = 0){
    if(canvasRef?.current){
      const ctx = canvasRef.current.getContext("2d");
      const spriteLine = dir * SPRITE_SIZE;

      let currentFrame = characterState.leftSideStride?0:5;
      let currentTick = 0;
      const ticksPerFrame = 5;
      const draw = frame => {
        if(frame > 7 || frame < 0) frame = 0;
        //ctx.clearReact(0,0, SPRITE_SIZE, SPRITE_SIZE);
        ctx.clearRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
        ctx.drawImage(
          sprite,
          frame * SPRITE_SIZE,
          spriteLine,
          SPRITE_SIZE,
          SPRITE_SIZE,
          0,
          0,
          SPRITE_SIZE,
          SPRITE_SIZE
        )
      }
      const update = () => {
        currentTick += 1;

        if (currentTick > ticksPerFrame) {
          currentTick = 0;
          currentFrame += 1;
        }
      };
      const main = () => {
        draw(currentFrame);
        update();
        const id = window.requestAnimationFrame(main);
        if (characterState.leftSideStride && currentFrame > 4) {
          window.cancelAnimationFrame(id);
        }
        if (!characterState.leftSideStride && currentFrame > 8) {
          window.cancelAnimationFrame(id);
        }
      };
      if (action === 'draw') {
        draw(0);
      }
      if (action === 'animate') {
        main();
      }
    }
  }

  //sprite

  //componentDidMount
  useEffect(()=>{
    
    sprite.src = WalkSprite;
    sprite.onload = () => {
      avatar('draw', 0);
    }
  },[]);

  //componentDidUpdate
  useEffect(()=> {
    return ()=>{

    }
  },[])
  return(
    <CharacterStyle>
      <label>character</label>
      <canvas ref={canvasRef} width={40} height={40}/>
    </CharacterStyle>
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
  const controls = useSelector(state=>state.controlGame);
  const dispatch = useDispatch();

  console.log("controls", controls);
  const {isGamePaused, attackMonster, movePlayer} = controls;
  const ANIMATION_WITH_PADDING = ANIMATION_SPEED * 1.25;
  const _handleKeyDown = _debounce(
    event => {if(!isGamePaused) handleKeyDown(event); },
    ANIMATION_WITH_PADDING,
    { maxWait: ANIMATION_WITH_PADDING, leading: true, trailing: false}
  );
  useEffect(()=>{
    // enable keyboard for player controls
    window.addEventListener('keydown', _handleKeyDown);
    return()=> window.removeEventListener('keydown', _handleKeyDown);
  }, []);
  function handleKeyDown(event) {
    event.preventDefault();
    // move with 'WASD' or Arrow keys
    switch(event.keyCode) {
      case 37:
      case 65:
        return movePlayer('WEST');
      case 38:
      case 87:
        return movePlayer('NORTH');
      case 39:
      case 68:
        return movePlayer('EAST');
      case 40:
      case 83:
        return movePlayer('SOUTH');
      case 13:
      case 32:
        // attack with enter or space key
        return attackMonster();
      default:
        // console.log('key not mapped: ', event.keyCode);
    }
  }
  return null
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
const ViewportStyle = styled('div')(()=>{

  return{
    position: 'relative',
    overflow: 'hidden',
    background: `repeating-linear-gradient(
      -45deg, var(--dark-gray), var(--dark-gray) 10px,
      var(--medium-gray) 10px, var(--medium-gray) 20px
    )`,
  }
})
const Viewport = ({children}) => {

  const appState = useSelector(state => state.appState);
  console.log("appState", appState);
  return(
    <ViewportStyle>
      {children}
    </ViewportStyle>
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
      <label>my rpg</label>
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