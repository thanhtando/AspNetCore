//https://medium.com/exelerate/the-simplest-way-to-combine-react-redux-and-firestore-typescript-353bea49cdbd
//https://zenn.dev/aono/articles/84964fae727445

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Container from '@mui/material/Container';
import moment from 'moment';
//
import { Provider } from "react-redux";
import { configureStore, createSlice} from "@reduxjs/toolkit";
import  thunk  from 'redux-thunk';
import  {initializeApp}  from 'firebase/app';
import  logger  from 'redux-logger';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

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
const getFirestoreRef = (path) =>{
  const basePath = "mode/development";
  return collection(db, `${basePath}/${path}`);
}
const SortOptions = {
  attribute: "",
  order: "",//OrderByDirection,
};
const CollectionOptions = {
  listen: false,
  listenerName: "",
  sort: SortOptions,
  queries: [],
  limit: 10,
  lazyLoad: false,
};

const DocumentOptions = {
  listen: false,
  listenerName: "",
  subcollections: [{ path: "", storeAs: "" }],
};



const QueryOptions = {
  attribute: "",
  operator: "",//WhereFilterOp,
  value: []
};

const CollectionListener = () => {

  return(
    <div>CollectionListerner</div>
  )
}
const DocListener = () => {
  return(
    <div>DocListerner</div>
  )
}
const LazyLoad = () => {
  return(
    <div>LazyLoad</div>
  )
}
const Navbar = () => {

  return(
    <div>Navbar</div>
  )
}
const users = [
  {
    id: '5e884ff1b51cc1956a5avgc0',
    name: 'Naum',
    email: 'naum@exelerate.me'
  },
  {
    id: '5e883xf1b51cc1956avl1ec0',
    name: 'Ilcho',
    email: 'ilcho@exelerate.me'
  },
  {
    id: '5e8453f1b51cc195hs5a1ec0',
    name: 'Elena',
    email: 'elena@exelerate.me'
  },
  {
    id: '5e1283f1b51cc1956fga1ec0',
    name: 'Ivan',
    email: 'ivan@exelerate.me'
  },
  {
    id: '5e8883f1b51cc19565la1ec0',
    name: 'Zoki',
    email: 'zoki@exelerate.me'
  },
  {
    id: '5e88sdf1b51cc1956a5a1ec0',
    name: 'Toshe',
    email: 'toshe@exelerate.me'
  },
  {
    id: '5e8883f1bfgcc1956a5a1ec0',
    name: 'Boban',
    email: 'boban@exelerate.me'
  },
];
const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    createdAt: moment()
    .subtract(2, 'hours')
    .toDate(),
    description: 'Dummy text',
    title: 'Your order is placed',
    type: 'order_placed'
  },
  {
    id: '5e8883f7ed1486d665d8be1e',
    createdAt: moment()
    .subtract(1, 'day')
    .toDate(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  },
  {
    id: '5e8883fca0e8612044248ecf',
    createdAt:  moment()
    .subtract(3, 'days')
    .toDate(),
    description: 'Dummy text',
    title: 'Your item is shipped',
    type: 'item_shipped'
  },
  {
    id: '5e88840187f6b09b431bae68',
    createdAt: moment()
    .subtract(7, 'days')
    .toDate(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  },
  {
    id: 'ge88840187f6b09b401bae68',
    createdAt: moment()
    .subtract(7, 'days')
    .toDate(),
    description: 'You have 32 unread messages',
    title: 'Your item is too large',
    type: 'error_shipment'
  }
];
const plan = [
  {
    id: "plan1",
    title: " lap ke hoach",

  }
]

const COLL_ROOT = "GRAMMAR"
const DOC_NAME = "文法_"
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addData = async () => {
    setLoading(true);
    var idx = 0;
    for (const not of notifications) {
      idx++
      const collRoot = collection(db, "mode/development/notifications");
      const docNode1 = doc(collRoot, not.id);
      await setDoc(docNode1, not)
        .then(() => {
          setError('');
          console.log('Mock data added!');
        })
        .catch(e => {
          console.log('error adding mock data', e);
          setError(e.message);
        });
    }
    for (const user of users) {

      await setDoc(doc(collection(db, "mode/development/user"), user.id), user)
        .then(() => {
          setError('');
          console.log('Mock data added!');
        })
        .catch(e => {
          console.log('error adding mock data', e);
          setError(e.message);
        });
    }
    await setDoc(doc(collection(db, 'mode/development/examples')),{
      field: 'valueee'
    })
    setLoading(false);
  }

  return (
    <div >
        <header >
        <hr></hr>
        <hr></hr>
        
        <p>Create firebase project, firebase web app and a database, then add the app config in the .env file</p>

        <p>When you are done click the button to add mock data to your firebase firestore database.</p>
        <button disabled={loading} onClick={addData} size="lg">Add mock data</button>
        {error && (
            <p>{error}</p>
        )}
        </header>
    </div>
  );
}

const STATUS = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  DONE: "DONE"
}
const GenericState = {
  data:[],
  status: "",
  error: ()=>{}
}
const createGenericSlice = ({
  name = 'Generic',
  initialState = GenericState,
  reducers
}) => {

  return createSlice({
    name,
    initialState,
    reducers: {
      loading(state){
        state.status = STATUS.LOADING
      },
      success(state, action){
        state.data = action.payload
        state.status = STATUS.DONE
      },
      error(state, action){
        state.data = action.payload
        state.status = STATUS.ERROR
      },
      ...reducers
    }
  })
}
//const { loading, success, error} = createGenericSlice.action;
const initUser = {
  ...GenericState,
  data:[
    {
      id: 1,
      name: "",
      email: "abc@abc.com"
    }
  ]
}
const userSlice = createGenericSlice({
  name: "user",
  initialState: initUser,
  reducers: {
    success(state, action){
      console.log(state.email);
    }
  }
});
const { userReducer } = userSlice.reducer;
const initNotification = {
  ...GenericState,
  data: [
    {
      id: 1,
      title: "",
      description: "",
      type: "",
      createdAt: "",
      subcollections: []
    }
  ]
}
const notificationSlice = createGenericSlice({
  name: "notifi",
  initialState: initNotification,
  reducers:{},
});
const { notificationReducer } = notificationSlice.reducer;
const initDocument = {
  id: 1,
  field: "column",
}
const documentExampleSlice = createGenericSlice({
  name: "document",
  initialState: initDocument,
  reducers: {}
})
const { documentExampleReducer } = documentExampleSlice.reducer;

const store = configureStore({
  reducer:{
    notification: notificationSlice.reducer,
    documentExample: documentExampleSlice.reducer,
    user: userSlice.reducer
  },
  middleware:[logger, thunk]
});
const RootDispatch = store.dispatch;
const RootState = store.getState;
//hook
const ListenerState ={
  name: "",
  unsubscribe: () => {}
}
const useFirestore = (path) =>{

  const collListenerRef = useRef([]);
  const docListenerRef = useRef([]);
  const lastDocRef = useRef({});

  useEffect(()=>{

    return()=>{
      collListenerRef.current.forEach(listener=>{listener.unsubscribe()});
      docListenerRef.current.forEach(listener => {listener.unsubscribe()});
    }
  },[collListenerRef]);

  const dispatch = useDispatch();
  
  const collection = (actions, option) => {
    //let query = getQuery(path, options)
  }
  const doc = async (id, actions, option) => {
    documentExampleSlice(path, id, actions, dispatch, docListenerRef, option);
  }
  const id = () => {
    const ref = getFirestoreRef(path);
    return ref.id;
  }
  const create = async (data) => {
    await setDoc(getFirestoreRef(path), data)
    .then(res => console.log('Document created with id: ', res.id))
    .catch(e => console.log('Error creating document', e))
  }
  const update = async (id, data) => {
    await updateDoc(getFirestoreRef(path), id)
      .then(() => console.log('Document updated.'))
      .catch(e => console.log(`Error updating document with id: ${id}`, e))
  }
  const remove = async (id) => {
    await deleteDoc(getFirestoreRef(path), id)
      .then(() => console.log('Document deleted.'))
      .catch(e => console.log(`Error deleting document with id: ${id}`, e))
  }
  const unsubscribe = (listenerName) => {
    if(listenerName){
      collListenerRef.current.find(listener => listener.name === listenerName).unsubscribe();
      docListenerRef.current.find(listen=>listen.name === listenerName).unsubscribe();
      return;
    }
    collListenerRef.current.forEach(listener => listener.unsubscribe());
    docListenerRef.current.forEach(listener => listener.unsubscribe());
  }

  return{
    collection, doc, id, create, update, remove, unsubscribe
  }
}
const ChildCRUD = () => {

  return(
    <BrowserRouter>
        <Navbar />
        <Container>
        <Routes>
          <Route path="/"  element = {<Home/>}/>
          <Route path="/collection" element={<CollectionListener />}>    
          </Route>
          <Route path="/doc" element={<DocListener />}>
            
          </Route>
          <Route path="/lazy" element={<LazyLoad />}>
            
          </Route>
        </Routes>

        </Container>

    </BrowserRouter>
  )
}
const FsCRUD = () => {

  return(
    <Provider store={store}>
      <ChildCRUD />
    </Provider>
  )
}
export default FsCRUD;