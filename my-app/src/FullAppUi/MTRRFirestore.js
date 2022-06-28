// https://dev.to/vetswhocode/build-a-crud-firestore-app-in-react-gatsby-with-hooks-4ig9
// https://qiita.com/hibohiboo/items/3d0665b9a85342f42264
//https://github.com/hibohiboo/create-now
// ireabase/config/firestore.rules
// rules_version = '2';
// service cloud.firestore {
//   function isSignedIn() {
//     return request.auth != null;
//   }
//   function isOwner(rsc) {
//     // データ作成した本人であることを確認
//     return isSignedIn() && request.auth.uid == rsc.data.uid;
//   }

//   // マッチングルール
//   match /databases/{database}/documents {
//     match /others/memolist/{documents=**} {
//       allow read, create, update
//       allow delete: if isOwner(resource)
//     }
//   }
// }
import React, { useEffect, useState } from 'react';
import {
  combineReducers,
  configureStore,
  EnhancedStore,
  createSlice
} from '@reduxjs/toolkit'
// import rootReducer from './rootState'
import logger from 'redux-logger'
import { Provider, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Container, CssBaseline, Link, Typography } from '@mui/material';
import {
  Box,
  Button,
  Switch,
  FormControlLabel,
  Chip,
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core'
import { Search, StarBorder } from '@material-ui/icons'
import MaterialTable from 'material-table'

const initPerson = {
  name: "tan dep trai",
  age: 30,
}
const DecrementAge = (state) => {
  state.age--
}
const PersonSlice = createSlice({
  name: "person",
  initialState: initPerson,
  reducers:{//reducer + action
    incrementAge(state){state.age++},
    de: DecrementAge,
    changeName: (state, action)=>{
      state.name = action.payload
    }
  }
})

const {incrementAge, changeName, de} = PersonSlice.actions;

const PersonReducer = PersonSlice.reducer;

const MemoListItem = {
  name: "",
  tags: [],
  memo: "",
  point: 0,
  uid: "",
  id: "",
  nickname: "",
  url: "",
  crateAt: "",
}
const genres = {
  scenarios: 'シナリオ',        //kichban
  tools: 'ツール',              //congcu
  assets: '素材',               //tainguyen
  communities: 'コミュニティ',  //congdong
  readings: '読み物',           //tailieudoc
  systems: 'システム',          //hethong
  supplements: 'サプリメント',  //bosung
} 
const memoListStateInit = {
  current: 'scenarios',
  list: {
    scenarios: [
      MemoListItem,
      MemoListItem
    ],
    tools: [1, 2, 3],
    systems: [],
    readings: [],
    communities: [],
    supplements: [],
    assets: [],
  },
  searchTags: '',
  isSortCreated: false,
}
const memoListSlice = createSlice({
  name: 'memo',
  initialState: memoListStateInit,
  reducers: {
    setList: (state, action) => {
      state.list[action.payload.current] = action.payload.list
    }
  }
})
const {setList} = memoListSlice.actions;

const MemoListRead = async (dispatch) => {

}
const RootReducer = combineReducers({
  person: PersonReducer,
  memo: memoListSlice.reducer
  
});
const RootPreloadedState = {
  // scenario: scenarioInit,
  // entrySheet: entryInit,
  // auth: authInit,
  // lost: lostInit,
  memo: memoListStateInit,
  // trpgManual: trpgManualInit,
  // game: gameInit,
  // tyranoudon: tyranoudonInit,
  // hakoniwa: hakoniwaInit,
}
const setupStore = (preloadedState) => {
  const middlewares = [logger, thunk]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const store = configureStore({
    reducer: RootReducer,    
    middleware: middlewares,
    devTools: true,
    preloadedState,
  });

  return store
}

const store = setupStore(RootPreloadedState);
const Home = () => {
  return(
    <div>Home</div>
  )
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
const viewTable = {
  search: false,
  sorting: false,
  paging: false,
  draggable: false,
  rowStyle: {
    whiteSpace: 'nowrap',
  },
  headerStyle: {
    whiteSpace: 'nowrap',
  },
}

const TWITTER_USER_NAME = 'hibohiboo'
const SITE_NAME = 'hibohiboo TRPG サポートページ'
const SITE_DOMAIN = 'https://create-now.now.sh'
const Component = ({
  title,
  description,
  url,
  image = 'https://lostrpg-751c1.firebaseapp.com/assets/images/losttop.png',
  keywords = 'LOSTRPG,廃墟,子供たち,キャラクターシート,TRPG,廃墟の森,ポストアポカリプス',
}) => (
  <head>
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta name="twitter:creator" content={`@${TWITTER_USER_NAME}`} />
    <meta
      name="twitter:card"
      content={image ? 'summary_large_image' : 'summary'}
    />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={`${SITE_DOMAIN}${url}`} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={image} />}
    {keywords && <meta name="keywords" content={keywords} />}
    <meta property="og:site_name" content={SITE_NAME} />
  </head>
)

const separator = '-'
//TODO:useViewmodel
const useViewModel = () => {
  const dispatch = useDispatch();
  return useSelector((state)=>{
    const stateMemo = state.memo;
    console.log(stateMemo.current);
    
    console.log(stateMemo.list[stateMemo.current])
    return{
      currentName: stateMemo.current,      
      data: stateMemo.list[stateMemo.current].map((item)=>({...item, tags: item.tags.join(separator),}))
    }
  })
}
const TableIcons = () => {

}
const MemoList = () => {
  const vm = useViewModel();
  const [value, setValue] = useState(0);
  const columns = [
    {title: '★', field: 'point', type: 'numeric', editable: 'never', renderData: '',},
    {title: '名称', field: 'nickname',renderData: '',},
    {title: '名前', field: 'name',renderData: '',},
    {title: 'タグ', field: 'tag',renderData: '',},
    {title: '', field: '',renderData: '',},
    {title: '', field: '',renderData: '',},
  ]

  return(
    <Container>
      {/* //title */}
      <Typography>Memo List</Typography>
      {/* //login */}
      <p>
        <Link href={'/auth/login'}>Login</Link>
      </p>
      {/* //paper */}
      {/* //search */}
      {/* materailTable */}
      <MaterialTable
        title={vm.currentName}
        // icons={TableIcons}
        // options={vm.options}
        // columns={columns}
        // data={vm.data}
        // editable={vm.editHandler}
        // localization={vm.localization}
      />
      <Link href='/'>Back</Link>
    </Container>
  )
}
const MyApp = () => {

  return(
    <Provider store={store}>
      <React.Fragment>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
              <Component {...pageProps} />
            </I18n> */}
            <MemoList />
          </ThemeProvider>
        </React.Fragment>
    </Provider>
  )
}
export default MyApp;

