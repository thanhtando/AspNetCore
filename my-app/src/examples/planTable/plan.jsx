
//firestore crud
//https://medium.com/exelerate/the-simplest-way-to-combine-react-redux-and-firestore-typescript-353bea49cdbd
//https://zenn.dev/aono/articles/84964fae727445
//https://github.com/Rajatgms/react-shop/tree/master/src/slice
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Container from '@mui/material/Container';
import moment from 'moment';

//TODO: lodash, immer
import { Provider, useSelector } from "react-redux";
import { combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";
import  thunk  from 'redux-thunk';
import  {initializeApp}  from 'firebase/app';
import  logger  from 'redux-logger';
import { useEffect, useState } from 'react';
import { 
  query, 
  addDoc, 
  collection, 
  doc, 
  getDoc, 
  getFirestore, 
  onSnapshot, 
  setDoc, 
  updateDoc 
} from "firebase/firestore";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card } from "@mui/material";
import { getDocs } from 'firebase/firestore';

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
const getQuery = (coll, options) => {

  const baseQuery = getFirestoreRef(coll);
  let query = baseQuery;
    if (options && options.queries) {
        const { queries } = options;
        queries.forEach(({ attribute, operator, value }) => {
        query = query.where(attribute, operator, value);
        });
    }

    if (options && options.sort) {
        const { attribute, order } = options.sort;
        query = query.orderBy(attribute, order);
    }

    if (options && options.limit) {
        query = query.limit(options.limit);
    }
    return query;
}
const CollectionListener = () => {
  const initData = {
    title: "",
    description: ""
  }
  const [data, setData] = useState(initData);

  const {notifications, loading, error} = useSelector((state) => ({
      notifications: state.notifi.data,
      loading: state.notifi.status === STATUS.LOADING,
      error: state.notifi.errors
  }))
  // const firestore = useFirestore<Notification[]>('notifications');
  const fireStore = useFirestore('notification');
  useEffect(() => {
      fireStore.collection(notificationSlice.actions, {listen: true});
  }, [fireStore]);

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!data.title || !data.description) return;
      // db.collection('mode/development/notifications')
      //     .add({
      //         title: data.title,
      //         description: data.description,
      //         createdAt: new Date(),
      //         type: 'order_placed'
      // }).then().catch(e => console.log(e));
      addDoc(collection(db, 'mode/development/notifications'), {
                title: data.title,
                description: data.description,
                createdAt: new Date(),
                type: 'order_placed'
        }).then(()=>{console.log("addDoc success")}).catch(e=>console.log(e));
  }

  return (
      <>
      <div>
          <div>
              <div>
                  {loading && (
                      <p>Loading...</p>
                  )}
                  {(!loading && !notifications?.length) && (
                      <>
                      <p>There is not data in your database.</p>
                      <p>Go to home page and click the button Add mock data or add manually through the form.</p>
                      </>
                  )}
                  {error && (
                      <p>{error}</p>
                  )}
                  {notifications && (
                      notifications.map(n => (
                          <div key={n.id} style={{ width: '18rem' }}>
                              <div>
                                  <label>{n.title}</label>
                                  <label className="mb-2 text-muted">{n.createdAt}</label>
                                  <label>
                                      {n.description}
                                  </label>
                              </div>
                          </div>
                      ))    
                  )}
              </div>
              <div>
                  <form onSubmit={handleSubmit}>
                    <form controlId="formBasicEmail">
                      <label>Title</label>
                      <input onChange={(e) => setData({...data, title: e.target.value})} type="text" placeholder="Enter title" />
                    </form>
                    <br></br>
                    <form controlId="formBasicPassword">
                        <label>Description</label>
                        <input onChange={(e) => setData({...data, description: e.target.value})} type="text" placeholder="Description" />
                    </form>
                        <br></br>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                  </form>
              </div>
          </div>
          
      </div>
      </>
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
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addData = async () => {
    setLoading(true);
    
    for (const not of notifications) {
      await db.collection('mode/development/notifications').doc(not.id).set(not)
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
      await db.collection('mode/development/users').doc(user.id).set(user)
        .then(() => {
          setError('');
          console.log('Mock data added!');
        })
        .catch(e => {
          console.log('error adding mock data', e);
          setError(e.message);
        });
    }
    await db.collection('mode/development/examples').doc('Documentstandeptrai').set({
      field: 'valueee'
    })
    setLoading(false);
  }
  const firestore = useFirestore('notifications');
  const navi = useNavigate();
  
  return (
    <div >
        <header >
        <label>test id: {firestore.id()}</label>
        <hr></hr>
        <button onClick={()=>navi("/collection")}>collection page</button>
        <button onClick={()=>navi("/doc")}>doc page</button>
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
  status: STATUS.LOADING,
  error: false
}
function createGenericSlice({
  name = 'Generic',
  initialState = GenericState,
  reducers
}){

  createSlice({
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
const userSlice = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    success(state, action){
      console.log(state.email);
    }
  }
});
const userReducer = userSlice.reducer;
const initNotification = {
  data: [
    {
      id: 1,
      title: "tan dep trai",
      description: "tan sieu dep trai",
      type: "test",
      createdAt: "2022-06-26",
      subcollections: []
    }
  ]
}
const notificationSlice = createSlice({
  name: "notifi",
  initialState: initNotification,
  reducers:{
    loading(state) {
      state.status = STATUS.LOADING;
    },
    success: {
      reducer: (state, action) => {
        state.data = action.payload;
        state.status = STATUS.DONE;
      },
      prepare: (notifications) => {
        const mapped = notifications.map(n => {
          return {...n, createdAt: "20252639"}
        })
        return {payload: mapped};
      }
    },
    
  },
});
//const { notificationReducer } = notificationSlice.reducer;
const initDocument = {
  id: 1,
  field: "column",
}
const documentExampleSlice = createGenericSlice({
  name: "document",
  initialState: initDocument,
  reducers: {}
})
//const { documentExampleReducer } = documentExampleSlice.reducer;

// const rootReducer = combineReducers({
//   // notification: notificationSlice.reducer,
//   // documentExample: documentExampleSlice.reducer,
//   user: userReducer,
// })
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
//redux: store
const StateRoot = {
  person: initPerson,
  notifi: initNotification,
  user: initUser,
}

const reducerRoot = combineReducers({
  notifi: notificationSlice.reducer,
  person: PersonReducer,
  user: userReducer,
})
const store = configureStore({
  reducer: reducerRoot,
  preloadedState: StateRoot,

});

const TestNotifi = () => {

  const {notifications, loading, error} = useSelector((state) => ({
    notifications: state.notifi.data,
    loading: state.notifi.status === STATUS.LOADING,
    error: state.notifi.errors
  }));
  const dispath = useDispatch();

  return(
    <div>
      <label>test notifications </label>
      {notifications.map((item,index) => {
        return(
          <div key={item+index}>
          <label key={item+index}>{item.title}</label>
          <label>{item.createdAt}</label>
          </div>
        )
      })}
      {/* <label>notifications: {notifications}</label> */}
      <button onClick={()=>dispath(notificationSlice.actions.success([{
          id: 100,
          title: "tan dep sieu trai cap vu tru",
          description: "tan sieu dep trai",
          type: "test tst ",
          createdAt: "2022-06-27",
          subcollections: []
      }]))}>notifiaction actions test</button>
      <label>loading: {loading}</label>
      <label>error: {error}</label>
    </div>
  )
}
// const RootDispatch = store.dispatch;
//const RootState = store.getState(State);
//hook
const ListenerState ={
  name: "",
  unsubscribe: () => {}
}
const getFirestoreRef = (path) => {
  const basePath = 'mode/development';
  console.log(`${basePath}/${path}`);
  return collection(db, `${basePath}/${path}`);
}
const collectionApi = (
  query,
  actions,
  dispatch,
  collectionListenersRef,
  lastDocRef,
  options
) => {
  dispatch(actions.loading());
  if (options && options?.listen) {
      const listener = getDocs(query)
        .then( querySnapshot => {
              const data = [];
              if (querySnapshot.empty) {
                  dispatch(actions.success([]));
                  return;
              }
              querySnapshot.forEach(doc =>
                  data.push({ id: doc.id, ...doc.data() })
              );
              console.log('test', data);
              dispatch(actions.success(data));
              if (options.lazyLoad) {
                  lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
              }
          })
        .catch(
          error => {
              dispatch(actions?.error(error.message));
              console.log('collection streaming error', error.message);
          }
        );
      collectionListenersRef.current.push({name: options.listenerName, unsubscribe: listener});
  } else {
      getDocs(query)
          .then(querySnapshot => {
              const data = [];
              querySnapshot.forEach(doc =>
                  data.push(({ id: doc.id, ...doc.data() } ) )
              );
              dispatch(actions.success((data )));
              if (options && options.lazyLoad) {
                  lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
              }
          })
          .catch(error => {
              console.log('collection get error', error.message);
              dispatch(actions?.error(error.message));
          });
  }
  
}
const docApi = (
  path, id, actions, dispatch, docListenerRef, options
) => {
  const docRef = doc(getFirestoreRef(path), id)
  dispatch(actions.loading());
  if(options.listen){
    const listener = onSnapshot(docRef, docSnapshot => {
      if(docSnapshot.exists){
        dispatch(actions.error("Document does not exists"));
        return
      }
      console.log("pelod", {id: docSnapshot.id, ...docSnapshot.data()});
      dispatch(actions.success({id: docSnapshot.id, ...docSnapshot.data()}));
    });
    docListenerRef.current.push({name: options.listenerName, unsubscribe: listener});
  }else{
    console.log("docRef.path", docRef.path);
    getDoc(docRef)
      .then(doc => {
        if(!doc.exists){
          dispatch(actions.error('document does not exists'))
          return
        }
        let result = {id: doc.id, ...doc.data()}
        dispatch(actions.success(result));
        for(const subcoll of options.subCollection){
          console.log(subcoll)
          getDocs(collection(doc.ref, subcoll.path))
            .then(snap => {
              if(!snap.empty || snap.docs.length){
                result[subcoll.storeAs] = snap.docs.map(doc=>{
                  return{id: doc.id, ...doc.data()};
                })
                dispatch(actions.success(result));
              }
            })
            .catch(err=>{
              console.log('get document error 1', err)
            })
        }
      })
      .catch(err => {
        console.log('get document error 2', err);
        dispatch(actions.error(err.message));
      })
  }

}
const useFirestore = (path) => {

  const collListenerRef = useRef([]);
  const docListenerRef = useRef([]);
  const lastDocRef = useRef([]);

  useEffect(()=>{

    return()=>{
      collListenerRef.current.forEach(listener=>{listener.unsubscribe()});
      docListenerRef.current.forEach(listener => {listener.unsubscribe()});
    }
  },[collListenerRef]);

  const dispatch = useDispatch();
  const getQuery = (collection , options) => {
    const baseQuery = getFirestoreRef(collection);
    let query = baseQuery;
    if (options && options.queries) {
        const { queries } = options;
        queries.forEach(({ attribute, operator, value }) => {
        query = query.where(attribute, operator, value);
      });
    }

    if (options && options.sort) {
        const { attribute, order } = options.sort;
        query = query.orderBy(attribute, order);
    }

    if (options && options.limit) {
        query = query.limit(options.limit);
    }

    return query;
};
  const collection = (actions, options) => {
    let query = getQuery(path, options);

    collectionApi(query, actions, dispatch, collListenerRef, lastDocRef, options);
    
    if (options?.lazyLoad) {
        return {
            loadMore: (limit) => {
                limit && (query = getQuery(path, {...options, limit}));
                query = query.startAfter(lastDocRef.current);
                collectionApi(query, actions, dispatch, collListenerRef, lastDocRef, options);
            }
        }
    }
  }
  const doc = async (
    id, actions, options
  ) => {
    docApi(path, id, actions, dispatch, docListenerRef, options);
  }

  const id = () => {
    const ref = getFirestoreRef(path);
    return ref.id
  }
  const create = async (data) => {
    return addDoc(getFirestoreRef(path), data)
    // return getFirestoreRef(path)
    // .add(data)
    .then(res => console.log('Document created with id: ', res.id))
    .catch(e => console.log('Error creating document', e))
  }
  const update = (id, data) => {
    updateDoc(getFirestoreRef(path), id)
  }
  const remove = (id) => {
    getFirestoreRef(path)
    
  }
  const unsubscribe = (listenerName) => {}

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
          <Route path="/test" element = {<TestNotifi/>}/>
          <Route path="/"  element = {<Home />}/>
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


const Colors=({data})=>{
  return(
      <>
        {
          data && data.map((d)=>{
             return(
                  <div className="card" key={d.id} style={{background:d.color}}>
                  <div className="container">
                      <h4><b>{d.name}</b></h4> 
                      <p>{d.color}</p> 
                  </div>
                  </div>
             )
         })
        }
      </>
  )
}
const FetchComplexData=()=>{
    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        fetch('https://reqres.in/api/unknown')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.ad)
                let companyData=res.data.ad;
                setData({Company:companyData.company,Description:companyData.text})
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>
        </>
    )
}

export default FsCRUD;
