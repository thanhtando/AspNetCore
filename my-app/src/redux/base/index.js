import {Timestamp, getFirestore, getDoc, doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import React, { useEffect, useState, forwardRef } from 'react';
import {
  combineReducers,
  configureStore,
  EnhancedStore,
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit'
// import rootReducer from './rootState'
import { createServer } from "miragejs"
import logger from 'redux-logger'
import { Provider, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Container, CssBaseline, Link, TextField, Typography } from '@mui/material';
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
import { Input, Search, StarBorder } from '@mui/icons-material'
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

const availableColors = ['green', 'blue', 'orange', 'purple', 'red']

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

//data mock
const data = {
  card1:{
    id:1,
    title: "base",
    name: "hiragana",
    content:{
      a:{
        
      }
    }
  }
}
const detail = {
  mean:"",
  read:"",
  write:"",
}
//firebase
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
const useFirestore =(path) => {

  const id = 1;
  const create = () => {}
  const add = () => {}
  const deleteId = () => {}
  const update = () => {}
  const docDb = () => {}
  const colectionDb = () => {}

  return{
    id, create, add, deleteId, update, docDb, colectionDb
  }
}
//redux
const initTodo = {
  status: 'idle',
  entities:{}
}
//
const todoAdapter = createEntityAdapter();
const initState = todoAdapter.getInitialState({
  status: 'idle',
})
//thunks
const fetchTodo = createAsyncThunk('todos/fetchTodo', async()=>{
  // const reponse = await 
  // const id = 1;
  // const title = "tan dep trai"
  // return [
  //   {id: id, title: title, completed: true, content: "lenrn react"},
  //   {id: id+1, title: title+1, completed: false, content: "learn redux"}
  // ]
  // const response = await client.get('/fakeApi/todos')
  //   .then(res => console.log(res))
  //   .then(err => console.log(err))
  // return response.todos
  const todos = []
  fetch("/fetchApi/todos")
  .then((res)=>res.json())
  .then((json)=>{
    json.map((item)=>todos.push(item));
  })
  console.log("todos:", todos);
  
  return todos;

  
});
export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async (text) => {
  // console.log(text);
  // const initialTodo = { text }
  // console.log(initialTodo);
  
  // // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  // return {id: 5, title: "heloo", completed: false, content: text}
  const initialTodo = { text }
  // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  // return response.todo
});
const todoSlice = createSlice({
  name: 'todo',
  initialState:initState,
  reducers:{
    todoDeleted: todoAdapter.removeOne,
    allTodoCompleted(state, action){
      Object.values(state.entities).forEach(todo=>{
        todo.completed = true
      })
    },
    completedTodoCleared(state, action){
      const completedId = Object.values(state.entities)
        .filter(todo => todo.completed)
        .map(todo => todo.id)
      todoAdapter.removeMany(state, completedId);
    },
    todoAdded(state,action){
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action){
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todoLoading(state, actions){
      return{...state, status: 'loading'}
    },

    //
    todoColorSelected: {
      reducer(state, action){
        const {color, todoId} = action.payload
        state.entities[todoId].color = color
      },
      prepare(todoId, color){
        return{payload:{todoId, color}}
      }      
    },
    // todoDeleted(state, action){
    //   delete state.entries[action.payload];
    // }
  },
  extraReducers: build => {build
    .addCase(fetchTodo.pending, (state, action)=>{
      state.status = 'loading'
    })
    // .addCase(fetchTodo.fulfilled, (state, action)=>{
    //   const newEntities = {};
    //   action.payload.forEach(todo=>{
    //     newEntities[todo.id] = todo
    //   });
    //   state.entities = newEntities
    //   state.status = 'idle'
    // })
    .addCase(fetchTodo.fulfilled, (state, action)=>{
      todoAdapter.setAll(state, action.payload);
      state.status = 'idle'
    })
    .addCase(saveNewTodo.fulfilled, (state, action)=>todoAdapter.addOne)
    // .addCase(saveNewTodo.fulfilled, (state, action)=>{
    //   const todo = action.payload
    //   state.entities[todo.id] = todo
    // })
  }
  
});
const {
  todoColorSelected, 
  allTodoCompleted,
  todoLoading, 
  todoToggled, 
  todoAdded, 
  completedTodoCleared,
  todoDeleted,
} = todoSlice.actions;

const {selectAll: selectTodo, selectById: selectTodoById} = todoAdapter.getSelectors(state=>state.todos)

const selectTodoId = createSelector(
  selectTodo,
  todos => todos.map(td => td.id)
);
const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodo,
  // Second input selector: all filter values
  (state) => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    const { status, colors } = filters
    const showAllCompletions = status === StatusFilters.All
    if (showAllCompletions && colors.length === 0) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    // Return either active or completed todos based on filter
    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus
      const colorMatches = colors.length === 0 || colors.includes(todo.color)
      return statusMatches && colorMatches
    })
  }
)

const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  (filteredTodos) => filteredTodos.map((todo) => {
    console.log("todo",todo);
    return todo.id
  })
)
const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
}

const initialState = {
  status: StatusFilters.All,
  colors: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload
    },
    colorFilterChanged: {
      reducer(state, action) {
        let { color, changeType } = action.payload
        const { colors } = state
        switch (changeType) {
          case 'added': {
            if (!colors.includes(color)) {
              colors.push(color)
            }
            break
          }
          case 'removed': {
            state.colors = colors.filter(
              (existingColor) => existingColor !== color
            )
          }
          default:
            return
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType },
        }
      },
    },
  },
})

const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions

const planSlice = createSlice({
  name: 'plan',
  initialState: [],
  reducers: {
    planAdded(state,action){state.push(action.payload)},
    planToggled(state, action){
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    planLoading(state, actions){
      return{...state, status: 'loading'}
    }
  }
})
const RootReducers = combineReducers({
  todos: todoSlice.reducer,
  filters: filtersSlice.reducer,
  plan: planSlice.reducer
})
const store = configureStore({
  devTools: true,
  // preloadedState: {},
  reducer: RootReducers,
  middleware:[thunk],
})
//app
const HeaderTodo = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = async (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      // Create and dispatch the thunk function itself
      setStatus('loading')
      await dispatch(saveNewTodo(trimmedText))
      // And clear out the text input
      setText('')
      setStatus('idle')
    }
  }

  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null

  return (
    <header className="header">
      <input
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </header>
  )
}

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  )
}
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id))
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch(todoColorSelected(todo.id, color))
  }

  const onDelete = () => {
    dispatch(todoDeleted(todo.id))
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div>
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div>{text}</div>
        </div>
        <div>
          <select
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button onClick={onDelete}>X
            {/* <TimesSolid /> */}
          </button>
        </div>
      </div>
    </li>
  )
}

const TodoList = () => {

  const todoIds = useSelector(selectFilteredTodoIds)
  console.log("todoIds",todoIds)
  const loadingStatus = useSelector((state) => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div>
        <div/>
      </div>
    )
  }

  const renderedListItems = todoIds.map((todoId) => {

    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul>{renderedListItems}</ul>

}

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector((state) => {
    // console.log("state",state);
    const uncompletedTodos = selectTodo(state).filter(
      (todo) => !todo.completed
    )
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector((state) => state.filters)

  const onMarkCompletedClicked = () => dispatch(allTodoCompleted())
  const onClearCompletedClicked = () => dispatch(completedTodoCleared())

  const onColorChange = (color, changeType) =>
    dispatch(colorFilterChanged(color, changeType))

  const onStatusChange = (status) => dispatch(statusFilterChanged(status))

  return (
    <footer>
      <div>
        <h5>Actions</h5>
        <button onClick={onMarkCompletedClicked}>
          Mark All Completed
        </button>
        <button onClick={onClearCompletedClicked}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

let server = createServer();
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] });
// server.get("/api/todos", { todos: [{ id: 1, content: "tan dep" }] });
server.get("/fetchApi/todos", {todos: [
  {id: 1, content: "abc", completed: false, color: 'blue'},
  {id: 2, content: "tan dep trai", completed: false, color: 'green'},
  {id: 3, content: "learn redux", completed: false, color: 'red'},
  {id: 4, content: "learn angula", completed: true, color: 'blue'},
  {id: 5, content: "learn react", completed: false, color: 'blue'},
]})


const RefireCrud = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    store.dispatch(fetchTodo());
  },[]);
  useEffect(()=>{
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  },[])
  return(
    <Provider store={store}>
      <div>
        <nav>
          <section>
            <h1>Redux Fundamentals Example</h1>

          </section>
        </nav>
        <main>
          <section>
            <h2>Todos</h2>
            <div>
              {/* <HeaderTodo />
              <TodoList />
              <Footer /> */}
            </div>
          </section>
        </main>
        <ul>
          {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
        </ul>
      </div>
    </Provider>

  )
}
function TestCrud() {
  const [input, setInput] = useState("")

  //GETTINGS LISTS
  const [lists, setLists] = useState([])
    useEffect(()=> {
      const q = query(collection(db, "shopping-lists"),  orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setLists(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        setInput("")
      });
        return () => unsubscribe()
  }, [])   
//ENDS HERE

//ADDING LISTS
  const handleClick = (e) => {
    e.preventDefault()

    if(input) {
      addDoc(collection(db, "shopping-lists"), {
        name: input,
        timestamp: new Date()
      }).catch(err => console.error(err))
    }//end of If statement
  
  }//end of handleClick

  //DELETE A DOC
  async function deleteDocument(id) {
      let request = await deleteDoc(doc(db, "shopping-lists", id));
      console.log(request)
  } 
  //UPDATE A DOC

async function updateDocument(id) {
  const itemRef = doc(db, "shopping-lists", id);
  let name =  prompt("What would you like to update it to?")
  setDoc(itemRef, {
    name: name,
    timestamp: new Date()
  })
  
}
  
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center flex-col">
      <h2 className="text-2xl text-gray-800 font-bold mb-6">Shopping List</h2>

      <div className="w-2/3 border shadow-md p-7">
      
        <form className="flex items-center justify-between mb-7">
            <input 
              type="text" name="item" 
              className="w-2/3 h-10 p-3 outline-none border border-gray-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              />
            <button className="bg-green-400 p-3 rounded text-white" onClick={handleClick}>Save</button>
        </form>
        <div className="w-full ">
            {lists.map(list => (
              <div className="border-b w-full h-16 flex items-center justify-between" key={list.id}>
                <p>{list.name}</p>
                <div>
                  <IconButton   onClick={() => updateDocument(list.id)}>
                    <EditIcon/>
                  </IconButton>
                  
                  <IconButton onClick={() => deleteDocument(list.id)}>
                  <DeleteIcon/>
                  </IconButton>
                
                </div>
           
          </div>
            ))}        
        </div>
      </div>
    </div>
  );
}
export default RefireCrud;