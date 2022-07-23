
//materialtable
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
import {Timestamp, getFirestore, getDoc, doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import React, { useEffect, useState, forwardRef } from 'react';
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
} from '@mui/material'
import { Search, StarBorder } from '@mui/icons-material'
import MaterialTable from 'material-table'
import AddBox from '@mui/icons-material/AddBox'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import Check from '@mui/icons-material/Check'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Clear from '@mui/icons-material/Clear'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import Edit from '@mui/icons-material/Edit'
import FilterList from '@mui/icons-material/FilterList'
import FirstPage from '@mui/icons-material/FirstPage'
import LastPage from '@mui/icons-material/LastPage'
import Remove from '@mui/icons-material/Remove'
import SaveAlt from '@mui/icons-material/SaveAlt'
import ViewColumn from '@mui/icons-material/ViewColumn'
// import usePagination from 'firestore-pagination-hook'
import { serverTimestamp } from "firebase/firestore";
import  {initializeApp}  from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



// const docRef = doc(db, 'objects', 'some-id');

// // Update the timestamp field with the value from the server
// const updateTimestamp = await updateDoc(docRef, {
//     timestamp: serverTimestamp()
// });
const toSerializeObject = (obj) => JSON.parse(JSON.stringify(obj))
const toTimestamp = ({
  seconds,
  nanoseconds,
}) => new Timestamp(Number(seconds), Number(nanoseconds))
const firebaseConfig2 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  mesurentId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
const firebase = initializeApp(firebaseConfig2);
const db = getFirestore(firebase);
const storage = getStorage(firebase);

const memoList = (db) => doc(collection(db, 'others'), 'memolist');
  //firestore.collection('others').doc('memolist')

const readMemoListCollection = async (
  cn = "",
  limit = 10,
  searchTags = [],
  isOrderCreated = false,
) => {
  let query = isOrderCreated
    ? memoList(db).collection(cn).orderBy('createdAt', 'desc')
    : memoList(db).collection(cn).orderBy('point', 'desc')
  if (searchTags.length !== 0) {
    // or条件 https://blog.nabettu.com/entry/array-contains-any
    // query = query.where('tags', 'array-contains-any', searchTags)
    const target = searchTags.pop()
    query = query.where('tags', 'array-contains', target)
  }
  query = query.limit(limit)
  const querySnapshot = await query.get()
  const ret = []
  querySnapshot.forEach((doc) => {
    const data = doc.data()

    // queryでは1つしか絞り込めないので、2つ以上の絞り込みは取得結果から絞り込む
    let isNotContain = false
    searchTags.forEach((tag) => {
      if (!data.tags.includes(tag)) isNotContain = true
    })
    if (isNotContain) return
    ret.push({
      ...data,
      createdAt: toSerializeObject(data.createdAt),
      id: doc.id,
    })
  })

  return ret
}

 const createMemo = async (
  cn = "",
  memo = {},
  uid = "",
) => {
  const memos = doc(collection(db))
  const { id } = memos;
  await Promise.all([
    setDoc(memos,{
      ...memo,
      uid,
      createdAt: "2022-07-01"//firebase.firestore.FieldValue.serverTimestamp(),
    }),
  ])
  .then(res => console.log("success"))
  .catch(err => console.log(err))
  const newRef = await getDoc(memo)
  const newItem = newRef.data()
  return { ...newItem, id, createdAt: toSerializeObject(newItem.createdAt) }
}
const createMemo1 = async (cn, memo) =>
  await setDoc(doc(collection(db, cn), memo.id),{
    ...memo, createdAt: "2022/07/01"
  });
  // await memoList(db)
  //   .collection(cn)
  //   .doc(memo.id)
  //   .set({ ...memo, createdAt: toTimestamp(memo.createdAt) })
const updateMemo = async (cn, memo) =>
  await memoList(db)
    .collection(cn)
    .doc(memo.id)
    .set({ ...memo, createdAt: toTimestamp(memo.createdAt) })
const deleteMemo = async (cn, memo) =>
  await memoList(db).collection(cn).doc(memo.id).delete()
const personInit = {
  name: "tan dep trai",
  age: 30,
}
const DecrementAge = (state) => {
  state.age--
}
const PersonSlice = createSlice({
  name: "person",
  initialState: personInit,
  reducers:{//(reducer + action)
    incrementAge(state, action){
      if(state.age < 5){
        state.age++
      }else{
        state.age += action.payload
      }
      
    },
    de: DecrementAge,
    changeName: (state, action)=>{
      state.name = action.payload
    }
  }
})

//const {incrementAge, changeName, de} = PersonSlice.actions;

//const PersonReducer = PersonSlice.reducer;

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
  plan: 'plan',
  scenarios: 'シナリオ',        //kichban
  tools: 'ツール',              //congcu
  assets: '素材',               //tainguyen
  communities: 'コミュニティ',  //congdong
  readings: '読み物',           //tailieudoc
  systems: 'システム',          //hethong
  supplements: 'サプリメント',  //bosung
} 
const separator = ' '
const defaultGenre = 'plan';
const memoListStateInit = {
  current: defaultGenre,
  list: {
    plan: [],
    scenarios: [],
    tools: [],
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
    },
    addItem: (
      state,
      action
    ) => {
      console.log(state.list)
      console.log(action.payload);
      console.log(action.payload.item);
      console.log(action.payload.current);
      //state.list[action.payload.current].push(action.payload.item)
    },
    setItem: (
      state,
      {
        payload: { current, item },
      }
    ) => {
      state.list[current][
        state.list[current].findIndex((i) => i.id === item.id)
      ] = item
    },
    deleteItem: (
      state,
      {
        payload: { current, item },
      }
    ) => {
      state.list[current] = state.list[current].filter((i) => i.id !== item.id)
    },
    setSearchTags: (state, action) => {
      state.searchTags = action.payload
    },
    setIsSortCreated: (state, action) => {
      state.isSortCreated = action.payload
    },
    setCurrent: (state, action) => {
      state.current = action.payload
    },
  }
})

const readMemoListCollections = async () => {
  //doc(collection())
}
const readMemoList = (current, limit = 50, searchTags=[], isSortCreated) => async (dispatch) => {
  const list = await readMemoListCollections(
    current,
    limit,
    searchTags.filter(Boolean),
    isSortCreated
  );
  dispatch(memoListSlice.actions.setList(current, list));
}
const RootReducer = combineReducers({
  person: PersonSlice.reducer,
  memo: memoListSlice.reducer
  
});
const RootPreloadedState = {
  person: PersonSlice.getInitialState(),
  // scenario: scenarioInit,
  // entrySheet: entryInit,
  // auth: authInit,
  // lost: lostInit,
  memo: memoListSlice.getInitialState(),
  // trpgManual: trpgManualInit,
  // game: gameInit,
  // tyranoudon: tyranoudonInit,
  // hakoniwa: hakoniwaInit,
}
const setupStore = (preloadedState) => {
  // const middlewares = [logger, thunk]
  const middlewares = [thunk]

  if (process.env.NODE_ENV === 'development') {
    //middlewares.push(logger)
  }

  const store = configureStore({
    reducer: RootReducer,    
    middleware: middlewares,
    devTools: true,
    preloadedState,
  });

  return store
}
const usePerson = () => {
  const dispatch = useDispatch();

  return useSelector((state)=>{
    const person = state.person
    //dispatch(PersonSlice.actions.changeName("tan dt"));
    return {
      person
    }
  })
  
}

const store = setupStore(RootPreloadedState);
const storeState = store.getState();
const TestRedux = () => {
  //const person = useSelector((state)=>state.person)
  const {person} = usePerson();
  //const dispatch = useDispatch();

  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <label>name: {person.name}</label>
      <label>age: {person.age}</label>
      <button>increment</button>
    </div>
  )
}
const Home = () => {
  return(
    <div>
      <Typography>HOME</Typography>
      <TestRedux />
    </div>
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
const createMemoListItem = (data) => ({
  id: data.id || '',
  uid: data.uid || '',
  name: data.name || 'ななし',
  tags: data.tags ,
  memo: data.memo || '',
  point: data.point || 0,
  nickname: data.nickname || '',
  url: data.url || '',
  createdAt: data.createdAt || '',
})

const addMemoItem = (
  current,
  data,
  uid
) => async (dispatch) => {
  const item = createMemoListItem(data)
  const newItem = await createMemo(current, item, uid)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  dispatch(
    memoListSlice.actions.addItem({
      current,
      item: { ...item, ...newItem },
    }),
  )
}

const updateMemoItem = (
  current,
  data,
) => async (dispatch) => {
  const item = createMemoListItem(data)
  await store.updateMemo(current, item)
  dispatch(memoListSlice.actions.setItem({ current, item }))
}

const deleteMemoItem = (
  current,
  data,
) => async (dispatch) => {
  const item = createMemoListItem(data)
  await store.deleteMemo(current, item)
  dispatch(memoListSlice.actions.deleteItem({ current, item }))
}

//TODO:useViewmodel
const searchLimit = 50;
const useViewModel = () => {

  const dispatch = useDispatch();

  //初期読み込み
  useEffect(()=>{
    // dispatch(createAuthClientSide())
    dispatch(readMemoList(defaultGenre));
  })

  return useSelector((state)=>{
    const stateMemo = state.memo;
    //console.log(stateMemo.current);
    const editHandler = {
        isDeletable: (rowData) => console.log(rowData),
        onRowAdd: async (newData) => {
          dispatch(addMemoItem(memoList.current, newData))
        },
        onRowUpdate: async (newData, oldData) => {
          dispatch(updateMemoItem(memoList.current, newData))
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 300)
          })
        },
        onRowDelete: (oldData) => {
          dispatch(deleteMemoItem(memoList.current, oldData))
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 300)
          })
        },
      }
    const options = {
      sorting: false,
      paging: false,
      rowStyle: {
        whiteSpace: 'nowrap',
      },
      headerStyle: {
        whiteSpace: 'nowrap',
      },
      actionsColumnIndex: 6,
      addRowPosition: 'first',
    }
    //console.log(stateMemo.list[stateMemo.current])
    return{
      currentName: stateMemo.current, 
      data: stateMemo.list[stateMemo.current].map((item)=>({...item, tags: item.tags.join(separator),})),
      options: options,
      editHandler,
      searchTags: memoList.searchTags,
      searchHandler: () => {
        dispatch(
          readMemoList(
            memoList.current,
            searchLimit,
            memoListSlice.actions.separateTags(memoList.searchTags),
            memoList.isSortCreated,
          ),
        )
      },
      //searchTagsChangeHandler: (e) => dispatch(setSearchTags(e.target.value)),
      toggleIsSortCreated: (event) => {
        dispatch(memoListSlice.actions.setIsSortCreated(event.target.checked))
      },
      isSortCreated: memoList.isSortCreated,
      tagClickHandler: async (tag) => {
        dispatch(memoListSlice.actions.setSearchTags(tag))
      },
      localization: {
        header: {
          actions: '',
        },
        body: {
          editRow: { deleteText: '削除しますか?' },
          addTooltip: '新しい行を追加',
          deleteTooltip: '削除',
          editTooltip: '削除',
        },
        toolbar: { searchPlaceholder: '検索結果の絞り込み' },
      },
      //auth: authUser,
      pointClickHandler: async (memo) => {
        dispatch(
          updateMemoItem(memoList.current, {
            ...memo,
            point: memo.point + 1,
          }),
        )
      },
      currentName: genres[memoList.current],
      genres: genres,
      genreChangeHandler: (genre) => {
        dispatch(memoListSlice.actions.setCurrent(genre))
        if (memoList.list[genre].length !== 0) return
        dispatch(
          readMemoList(
            genre,
            searchLimit,
            memoListSlice.actions.separateTags(memoList.searchTags),
            memoList.isSortCreated,
          ),
        )
      },
    }
  })
}
const TableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
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
        icons={TableIcons}
        options={vm.options}
        columns={columns}
        data={vm.data}
        editable={vm.editHandler}
        localization={vm.localization}
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
            <Home />
          </ThemeProvider>
        </React.Fragment>
    </Provider>
  )
}
const CardJP = {
 card1: {
  id:1,
  title: "hiragana",
  name:"hiragana",
  constent: {
    
  }
 } 
}
export default MyApp;

//newcpn
import { Card, CardHeader } from "@mui/material"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const CardEx = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return(
    <Card sx={{maxWidth: 450}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        onClick={()=>console.log("card Header click")}
      />
      <CardMedia
        component="img"
        height="50"
        image="/logo512.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
const Mission = () => {

  return(
    <div style={{padding: 50}}>
      <CardEx/>
    </div>
    
  )
}

