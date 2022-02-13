import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import MaterialUIProvider from './context/materialprovider/index';

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
//TODO: add redux example : check
//TODO: add react-router-dom example


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
import { useEffect, useMemo, useState } from 'react';
import './App.scss';

//MyMaterial react context
import { useMyMaterial } from './context/materialprovider';
//MyMaterial react theme
import ThemeMain from './resource/theme/theme';
//rtl plugins
//import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidenav from './element/Sidenav';
import Example from './example';

const App = () => {

  const [controller, dispatch] = useMyMaterial();
  const { direction, darkMode, layout } = controller;

  // //rtl setting
  const [rtlCache, setRtlCache] = useState(null);
  
  // //setting the dir attribute for the body element
  useEffect(()=>{
    console.log("direction",direction);
    document.body.setAttribute("dir", direction);
  },[direction]);

  //cache for rtl
  // useMemo(()=>{
  //   const cacheRTL = createCache({
  //     key: "rtl",
  //     stylisPlugins: [rtlPlugin]
  //   });
  //   setRtlCache(cacheRTL);
  // },[])

  //router
  const RouterTable = (allRoutes) => {
    // const table = [];
    // allRoutes.map((route)=>{
    //   if(route.coll)
    // })
  }
  return(
    <Example />
  )
  // return ((direction==="rtl")
  //   ?<CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={ThemeMain}>
        
  //       <CssBaseline />
  //       {layout==="dashboard" &&(
  //         <div>
  //           <Sidenav />
  //         </div>
  //       )}
  //       <div>
  //         <label>rtl</label>
  //       </div>
  //     </ThemeProvider>
  //   </CacheProvider>
  //   :<ThemeProvider theme={ThemeMain}>
  //     <div>
  //       <label>none rtl</label>
  //     </div>
  //   </ThemeProvider>
  // );
}

export default App;
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/** 
  All of the routes  React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import Dashboard from "../page/dashboard/index";
import Tables from "../page/tables";
import Billing from "../page/billing";
import RTL from "../page/rtl";
import Notifications from "./page/notification";
import Profile from "../page/profile";
import SignIn from "../page/authentication/signin";
import SignUp from "../page/authentication/signup";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;

//contextbasic
import React, { createContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useContext } from "react";

//値が変更するcontextを使う
const UserContext = createContext({
  userName: '',
  setUserName: ()=>{}
});
export const ContextChange = () => {
  const [userName, setUserName] = useState("tan tan");
  const value = useMemo(
    () => ({userName, setUserName}), 
    [userName]
  );
  return (
    <UserContext.Provider value={value}>
      <LayoutC >
        Main Content
      </LayoutC>
    </UserContext.Provider>
  )
}
const LayoutC = ({ children }) => {
  return (
    <div>
      <HeaderC />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderC = () => {
  return (
    <header>
      <UserInfoC/>
      <UserNameInput />
    </header>
  );
}
const UserInfoC = () => {
  const name = useContext(UserContext);
  return (<span>{name.userName}</span>);
}
const UserNameInput = () => {
  const { userName, setUserName } = useContext(UserContext);
  const handlerEvent = event => setUserName(event.target.value);
  return(
    <input 
      type={"text"}
      value={userName}
      onChange={handlerEvent}
    />
  )
}

//基本的なcontextを使う
const MyContext = createContext("ContextName");
export const ContextBasic = () => {
  const userName = "Thanh Tan";
  return (
    <MyContext.Provider value={userName}>
      <LayoutB >
        Main Content
      </LayoutB>
    </MyContext.Provider>
  )
}
const LayoutB = ({ children }) => {
  return (
    <div>
      <HeaderB />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderB = () => {
  return (
    <header>
      <UserInfoB/>
    </header>
  );
}
const UserInfoB = () => {
  const name = useContext(MyContext);
  return (<span>{name}</span>);
}

//もし contextをつかわなかったら、
export const ContextNone = () => {
  const UserName = "Do Thanh";
  return(
    <LayoutN userName={UserName}>
      Main Content
    </LayoutN>
  )
}
const LayoutN = ({ children, userName }) => {
  return (
    <div>
      <HeaderN userName={userName} />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderN = ({ userName }) => {
  return (
    <header>
      <UserInfoN userName={userName} />
    </header>
  );
}
const UserInfoN = ({ userName }) => {
  return (<span>{userName}</span>);
}

//contextextend
import React, { useState, useContext } from "react";
import "./styles.scss";
import { ArticleContext } from "./ArticleProvider";

const AddArticle = () => {
  const { dispatch } = useContext(ArticleContext);
  const [article, setArticle] = useState();

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };

  const addNewArticle = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ARTICLE", article });
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;

import React, { createContext, useReducer } from "react";
import { ReducerCon } from "./ReducerCon";

export const ArticleContext = createContext();

const ArticleProvider = ({children}) => {

  const [articles, dispatch ] = useReducer(ReducerCon,[
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ])
  return(
    <ArticleContext.Provider value={{articles, dispatch}}>
      {children}
    </ArticleContext.Provider>
  )
}
export default ArticleProvider;
import React, { useContext } from "react";
import { ArticleContext } from "./ArticleProvider";
import './styles.scss';

const Articles = () => {
  const {articles} = useContext(ArticleContext);
  return(
    <div>
      {articles.map((ar) => {
        return(
          <Article key={ar.id} article={ar}/>
        )
      })}
    </div>
  )
}
const Article = ({article}) => {
  return(
    <div className="article">
      <h1>{article.title}</h1>
      <p> {article.body}</p>
    </div>
  )
}
export default Articles;
import React from "react";
import AddArticle from "./AddArticle";
import Articles from "./Articles";
import ArticleProvider from "./ArticleProvider";

const ContextEx = () => {
  return(
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  )
}

export default ContextEx;

export const ReducerCon = (state, action) => {
  switch(action.type){
    case "ADD_ARTICLE":
      return[
        ...state,
        {
          id: Math.random(), // not really unique but it's just an example
          title: action.article.title,
          body: action.article.body
        }
      ];
      default: return state;
  }
}
.article {
  width: 30rem;
  margin: auto;
  border-bottom: 1px solid #333;
  color: #333;
}
.add-article {
  width: 30rem;
  height: 8rem;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  background: #f5f6f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
}

.add-article input {
  display: block;
  margin: auto;
  margin-bottom: 0.5rem;
  width: 20rem;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.3rem;
}

.add-article button {
  width: 21rem;
  padding: 0.7rem;
  border: 1px solid #333;
  background: #333;
  color: #eee;
  border-radius: 0.3rem;
}
//contextReducer

import React, { createContext, useReducer, useContext } from "react";

const ContextRed = () => {
  return(
      <ThemeProvider>
        <Content />
      </ThemeProvider>
  )
}
export default ContextRed;
const Content = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const text = theme.state.textColor;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies. Id porta nibh venenatis cras sed felis
        eget velit. A diam sollicitudin tempor id eu. Tincidunt arcu non sodales neque sodales ut etiam sit. Eu
        scelerisque felis imperdiet proin fermentum. Faucibus a pellentesque sit amet porttitor. Laoreet id donec
        ultrices tincidunt arcu non sodales neque. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
        cras. Sollicitudin tempor id eu nisl nunc. Eget velit aliquet sagittis id consectetur purus ut. Cras pulvinar
        mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi tristique
        senectus et. Sed ullamcorper morbi tincidunt ornare massa. Et egestas quis ipsum suspendisse ultrices gravida
        dictum fusce. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Diam sollicitudin tempor id eu.
        Sed pulvinar proin gravida hendrerit lectus. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae.
        Eget nunc lobortis mattis aliquam faucibus purus. Mi sit amet mauris commodo quis imperdiet massa tincidunt.
        Eget gravida cum sociis natoque penatibus et magnis dis. In massa tempor nec feugiat nisl pretium fusce. Nulla
        at volutpat diam ut venenatis tellus in metus vulputate. Purus gravida quis blandit turpis cursus in. Nulla
        porttitor massa id neque aliquam. Metus aliquam eleifend mi in nulla posuere. Consequat id porta nibh venenatis
        cras sed. A lacus vestibulum sed arcu non. Lacus viverra vitae congue eu consequat ac felis donec et. Vitae et
        leo duis ut. Consequat interdum varius sit amet mattis vulputate enim nulla. Faucibus scelerisque eleifend donec
        pretium vulputate sapien nec.
      </p>
      <SwitchButton />
      <label style={{backgroundColor: text}}>test: {theme.state.textColor}</label>

    </div>
  );
}
//theme context
const ThemeContext = createContext();
const initState = {
  darkMode: false,
  textColor: "blue"
}
const themReducer = (state, action) => {
  switch(action.type){
    case "LIGHTMODE": return{...state, darkMode: false, textColor: "red"}
    case "DARKMODE": return{...state, darkMode: true, textColor: "blue"}
    default: return state
  }
}
const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themReducer, initState);
  return(
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
//drawerTemp
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
//forwardref
import React, { useRef, useEffect } from "react";

import Input from "./input";

export const ForWardRefBasic = (props) => {

  // Creating refs for username and password
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  // We are also creating a reference to the Login button
  const submitBtnRef = useRef(null);

  // useEffect to set the initial focus to the user name input
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  // This function is used to handle the key press.
  // Whenever user hits enter it moves to the next element
  const handleKeyPress = (e, inputType) => {
    if (e.key === "Enter") {
      switch (inputType) {
        // Checks if Enter pressed from the username field?
        case "username":
          // Moves the focus to the password input field
          passwordRef.current.focus();
          break;
        // Checks if Enter pressed from the password field?
        case "password":
          // Moves the focus to the submit button
          submitBtnRef.current.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  // Function to handle the submit click from the button
  const handleSubmit = () => {
    alert("submitted");
  };

  // getting the style as prop from the parent.
  // Basic style to center the element and apply a bg color
  const { style } = props;
  return (
    <div style={style}>
      <h2>Example for using useRef Hook</h2>
      <h3>Login</h3>
      {/* New. Using the Component instead of input element */}
      <Input
        type="text"
        name="username"
        ref={userNameRef}
        onKeyDown={(e) => handleKeyPress(e, "username")}
      />
      {/* New. Using the Component instead of input element */}
      <Input
        type="password"
        name="password"
        ref={passwordRef}
        onKeyDown={(e) => handleKeyPress(e, "password")}
      />
      <button ref={submitBtnRef} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export const ForWardRefNone = (props) => {
  // Creating refs for username and password
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  // We are also creating a reference to the Login button
  const submitBtnRef = useRef(null);

  // useEffect to set the initial focus to the user name input
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  // This function is used to handle the key press.
  // Whenever user hits enter it moves to the next element
  const handleKeyPress = (e, inputType) => {
    if (e.key === "Enter") {
      switch (inputType) {
        // Checks if Enter pressed from the username field?
        case "username":
          // Moves the focus to the password input field
          passwordRef.current.focus();
          break;
        // Checks if Enter pressed from the password field?
        case "password":
          // Moves the focus to the submit button
          submitBtnRef.current.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  // Function to handle the submit click from the button
  const handleSubmit = () => {
    alert("submitted");
  };

  // getting the style as prop from the parent.
  // Basic style to center the element and apply a bg color
  const { style } = props;
  return (
    <div style={style}>
      <h2>Example for using useRef Hook</h2>
      <h3>Login</h3>
      <input
        type="text"
        name="username"
        ref={userNameRef}
        onKeyDown={(e) => handleKeyPress(e, "username")}
      />
      <input
        type="password"
        name="password"
        ref={passwordRef}
        onKeyDown={(e) => handleKeyPress(e, "password")}
      />
      <button ref={submitBtnRef} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};


import React from "react";

/* In the functional component, a second argument 
is passed called ref, which will have access to 
the refs being forwarded from the parent */
const Input = (props, ref) => {
  /* assigning the ref attribute in input and spreading 
the other props which will contain type, name, onkeydown etc */
  return <input {...props} ref={ref} />;
};

// wrapping the Input component with forwardRef
const forwardedRef = React.forwardRef(Input);

// Exporting the wrapped component
export default forwardedRef;

//usememobasic
import React, { useMemo } from "react";
import { useState } from "react";

const MemoBasic = () => {

  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  const words = ["Thanh", "Tan", "Do", "ab", "cd"];
  const word = words[wordIdx];

  const ComputeLetter = word => {
    let i = 0;
    while(i<100000000) i++;
    return word.length;
  }
  const NextWord = () => {
    const next = (wordIdx + 1) === words.length ? 0 : wordIdx + 1;
    setWordIdx(next);
  }
  const letterCount = useMemo(()=>ComputeLetter(word),[word])
  return(
    <div style={{padding: "15px"}}>
      <h2>Compute number of letters</h2>
      <p>"{word}" has {letterCount} letters </p>
      <button onClick={NextWord}>Next Word</button>
      <br />
      <br />
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default MemoBasic;

//reduex
import React from "react";
import './styles.scss';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AllAction from '../../redux/action/all.action';

const ReduxExample = () => {

  //call reducer
  const alertEx = useSelector((state) => state.AlertReducer);
  const dispatch = useDispatch();
  //call action
  useEffect(()=>{
    dispatch(AllAction.AlertActions.success("abc"));
  },[dispatch]);

  return(
    <div className="container">
      <div className={`alert ${alertEx.type}`} role={"alert"}>{alertEx.payload}</div>
      <label>thanh tan</label>

    </div>
  )
}
export default ReduxExample;

.container {
  //background-color: aqua;
  border-width: 1px;
  //border-color: aquamarine;
  width: 40%;

  .title {
    color: pink;
  }
}
//rtlPlugin
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  direction: 'rtl',
})
const AffectedText = styled('div')`
  text-align: left;
`;

const UnaffectedText = styled('div')`
  /* @noflip */
  text-align: left;
`;
const RtlPlugin = () => {

  return(
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <label>test</label>
        <MyComponent />
        {/* <TextField placeholder="Name" variant="standard" />
        <input type="text" placeholder="Name" />     */}
      </div>
    </ThemeProvider>

  )
}
const MyComponent = () => {
  return(
    <label>test rtl</label>
  )
}
export default RtlPlugin;

//styleComponent
import React, { useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const TooltipStyle = styled(Tooltip)(({className, ...props})=>{
  return{
    popper: className,
    color: "red",
  }
}
);
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;
const CustomSlider1 = styled(Slider)`
color: #20b2aa;

:hover {
  color: #2e8b57;
}
`;
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref} style={{backgroundColor: "blue"}}>Bin</div>
});
const StyleComponent = () => {
  const colorRef = useRef(null);
  useEffect(()=>{
    colorRef.current.style.backgroundColor  = "red";
  });
  return(
    <div>
      <TooltipStyle title="i am navy">
        <Button variant="contained" color="primary">
            Styled tooltip 1
        </Button>    
      </TooltipStyle>
      <StyledTooltip title={"a am default"}>
      <Button variant="contained" color="primary">
            Styled tooltip 2
        </Button>
      </StyledTooltip>
      <CustomSlider1 defaultValue={30}/>
      <Tooltip title={"Delete"}>
        <MyComponent ref={colorRef}/>
      </Tooltip>
    </div>

  )
}

export default StyleComponent;
//teststyle
import { Box, styled } from "@mui/material";
import React from "react";
import { forwardRef } from "react";
import'./styleB.scss';
const StyleTest = () => {
  const colorChange = () =>{
    console.log("test color change");
  }
  return(
    <BoxDT bgColor={"blue"} colorChange={colorChange} />
  )
}
const BoxStyle = styled(Box)(({ownerState, theme, onClick})=>{
  const { palette, functions } = theme;
  const { gradients, grey, white } = palette;
  const { bgColor, color, opacity } = ownerState;
  console.log(bgColor);
  return{
    backgroundColor: bgColor,
    color: grey[900],
  }
})
const BoxDT = forwardRef(({bgColor, color, opacity, colorChange, ...rest}, ref) => {

  return(
    <BoxStyle
      {...rest}
      ref={ref}
      onClick={colorChange}
      ownerState = {{bgColor, color, opacity}}
    >
      <label>thanhtan</label>
    </BoxStyle>
  )
})
export default StyleTest;

.superBox {
  background-color: aqua;
  // &:hover {
  //   background-color: black;
  // }
}
//themeProviderEx
import { Box, createTheme, ThemeProvider } from "@mui/material"

const themeExt = createTheme({
  palette:{
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#asd54f',
      secondary: '#46505A'
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
      dark: '#009688',
    },
  },
});
const ThemeProExt = () => {

  return(<ThemeProvider theme={themeExt}>
    <Box sx={{
      bgcolor: 'Background.paper',
      boxShadow: 1,
      borderRadius: 1,
      p: 2,
      minWidth: 100,
    }}>
      
      <Box sx={{color: 'text.primary'}} >Sessions</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium'}}>98.3k</Box>
      <Box
        
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
        style={{color: 'red'}} 
        >+18.77%</Box>
      <Box>vs. last week</Box>
    </Box>
  </ThemeProvider>)
}
export default ThemeProExt;
//example
import React from "react";
import ReduxExample from './reduxex/index';
import ContextEx from './contextex';
import { ContextBasic, ContextChange, ContextNone } from './contextbasic';
import MemoBasic from './memobasic';
import { ForWardRefBasic, ForWardRefNone } from './forwardref';
import StyleComponent from './stylecomponent';
import Dashboard from '../page/dashboard/index';
import AlertTT from '../components/AlertTT/index';
import ThemeProExt from "./themeprovider/ThemeProExt";
import TemporaryDrawer from "./drawerTemp";
import ContextRed from "./contextReducer";
import StyleTest from "./teststyle";

const Example = () => {
  return(
    <div>
      <StyleTest />
      {/* <ContextRed /> */}
      {/* <ThemeProExt />
      <TemporaryDrawer /> */}
        {/* <Dashboard />
        <StyleComponent />
        <AlertTT />
        <ReduxExample />
        <ContextEx />
        <ContextChange />
        <ContextBasic />
        <ContextNone />
        <MemoBasic/>
        <ForWardRefBasic />
        <ForWardRefNone /> */}
    </div>
  )
}
export default Example;

//helps

//layouts

import React, { useRef } from "react";
import BoxTT from "../../components/BoxTT";

const DashboardLayout = ({children}) => {
  const boxRef = useRef(null);
  return(
    <BoxTT ref={boxRef}>
      {children}
    </BoxTT>
  )
}
export default DashboardLayout;
//page

//redux
/// action
import AlertConstant from '../constant/alert.constant';

export const AlertActions = {
  success,
  error,
  clear,
}
function success(message){
  return{type: AlertConstant.SUCCESS, payload: message}
}
function error(message){
  return{type: AlertConstant.ERROR, payload: message}
}
function clear(){
  return{type: AlertConstant.CLEAR, payload: ""}
}

import { AlertActions } from './alert.actions';


const AllActions = {
  AlertActions, 
}
export default AllActions;
/// constant
const AlertConstant = {

  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
  
};
export default AlertConstant;
/// reducer
import AlertConstant from '../constant/alert.constant';

const AlertReducer = (state={}, action) => {
  const {type, payload} = action;
  switch(type){
    case AlertConstant.SUCCESS:
      return{type:'alert-success', payload: payload}
    case AlertConstant.ERROR:
      return{type:'alert-danger', payload: payload}
    case AlertConstant.CLEAR:
      return{type: 'alert-dark'}
    default:
      return state
  }
}
export default AlertReducer;
import { combineReducers } from 'redux';
import AlertReducer from './alert.reducer';


const RootReducer = combineReducers({

  AlertReducer,

});
export default RootReducer;
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

// element -> Sidenav
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import React from "react";
import { useMyMaterial } from "../../context/materialprovider";
import BoxTT from "../../components/BoxTT";

const Sidenav = ({ color, brand, brandName, routes, ...rest }) => {
  const [controller, dispatch] = useMyMaterial();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  const closeSidenav = () => {
    console.log("close side nav");
  }
  return(
    <SidenavStyle
      {...rest}
      variant="permanent"
      ownerState = {{transparentSidenav, whiteSidenav, miniSidenav, darkMode}}>
        <BoxTT pt={3} pb={1} px={4} textAlign="center">
          <BoxTT
            display={{ xs: "block", xl: "none" }}
            position="absolute"
            top={0}
            right={0}
            p={1.625}
            onClick={closeSidenav}
            sx={{ cursor: "pointer" }}
          >

          </BoxTT>
        </BoxTT>
      <label>TRANSPARENT_NAVBAR</label>
    </SidenavStyle>
  )
}
const SidenavStyle = styled(Drawer)(({theme, ownerState})=>{
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState;

  const sidebarWidth = 250;
  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;
  let backgroundValue = darkMode
    ? background.sidenav
    : linearGradient(gradients.dark.main, gradients.dark.state);

  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  }

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });
  return{
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav ? drawerCloseStyles():drawerOpenStyles()),
    },
  }
})
export default Sidenav;

//context
///constants
const ContextConstant = {
  MINI: "MINI_SIDENAV",
  TRANSPARENT_SIDENAV: "TRANSPARENT_SIDENAV",
  WHITE: "WHITE_SIDENAV",
  COLOR: "COLOR_SIDENAV",
  TRANSPARENT_NAVBAR: "TRANSPARENT_NAVBAR",
  FIXED: "FIXED_NAVBAR",
  OPEN_CONFIG: "OPEN_CONFIGURATOR",
  DIRECTION: "DIRECTION",
  LAYOUT: "LAYOUT",
  DARK_MODE: "DARK_MODE"
}
export default ContextConstant;
///materialprovider
import { createContext, useContext, useReducer } from "react";
import ContextConstant from "../constants";
import ContextReducer from "../reducer";

const MyMaterial = createContext();
MyMaterial.displayName = "MyMaterialContext";     //TODO: context (langue, theme, )

//react custom hook for using context
export function useMyMaterial(){

  const context = useContext(MyMaterial);
  if(!context){
    throw new Error(
      "useMyMaterialController should be used inside the MyMaterial"
    )
  }
  return context;
}

//context module state
export const setMiniSidenav = (dispatch, value) => dispatch({ type: ContextConstant.MINI, value });
export const setTransparentSidenav = (dispatch, value) => dispatch({ type: ContextConstant.TRANSPARENT_SIDENAV, value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: ContextConstant.WHITE, value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: ContextConstant.COLOR, value });
export const setTransparentNavbar = (dispatch, value) => dispatch({ type: ContextConstant.TRANSPARENT_NAVBAR, value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: ContextConstant.FIXED, value });
export const setOpenConfigurator = (dispatch, value) => dispatch({ type: ContextConstant.OPEN_CONFIG, value });
export const setDirection = (dispatch, value) => dispatch({ type: ContextConstant.DIRECTION, value });
export const setLayout = (dispatch, value) => dispatch({ type: ContextConstant.LAYOUT, value });
export const setDarkMode = (dispatch, value) => dispatch({ type: ContextConstant.DARK_MODE, value });

const MaterialUIProvider = ({children}) => {
  const initState = {
    miniSidenav: false,             //mini
    transparentSidenav: false,      //trong suot
    whiteSidenav: false,
    sidenavColor: "info",
    fixedNavbar: true,              //固定
    openConfigurator: false,
    direction: "rtl",              //方向
    layout: "dashboard",
    darMode: false,
  }
  const [controller, dispatch] = useReducer(ContextReducer, initState);

  return<MyMaterial.Provider value={[controller, dispatch]}>{children}</MyMaterial.Provider>
}
export default MaterialUIProvider;
///reducer
import ContextConstant from "../constants";

//material react reducer 
const ContextReducer = (state, action) => {
  const {type, value} = action;
  //TODO: reduce
  switch(type){
    case ContextConstant.MINI: {
      return { ...state, miniSidenav: value };
    }
    case ContextConstant.TRANSPARENT_SIDENAV: {
      return { ...state, transparentSidenav: value };
    }
    case ContextConstant.WHITE: {
      return { ...state, whiteSidenav: value };
    }
    case ContextConstant.COLOR: {
      return { ...state, sidenavColor: value };
    }
    case ContextConstant.TRANSPARENT_NAVBAR: {
      return { ...state, transparentNavbar: value };
    }
    case ContextConstant.FIXED: {
      return { ...state, fixedNavbar: value };
    }
    case ContextConstant.OPEN_CONFIG: {
      return { ...state, openConfigurator: value };
    }
    case ContextConstant.DIRECTION: {
      return { ...state, direction: value };
    }
    case ContextConstant.LAYOUT: {
      return { ...state, layout: value };
    }
    case ContextConstant.DARK_MODE: {
      return { ...state, darkMode: value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
export default ContextReducer;

// components
/// AlertTTimport React from "react";
import { Alert, AlertTitle, Fade } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { fontWeight } from "@mui/system";

const ALERTSTATE = {
  MOUNT: "mount",
  UNMOUNT: "unmount",
  FADEOUT: "fadeOut",
  FADEIN: "fadeIn",
}
const AlertTTColseIcon = styled("span")(({theme})=>{

  const { palette, typography, functions} = theme;
  const {white} = palette;
  const {size, fontWeightMedium} = typography;
  const {pxToRem} = functions
  return{
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: "pointer",
    lineHeight: 0,
  }

})
const AlertTT = ({
  color, dismissible, children, ...rest
}) => {

  const [alertStatus, setAlertStatus] = useState("mount");
  const handleAlertStatus = () =>{
    setAlertStatus("fadeOut");
  }

  const AlertTemplate = (mount=true) => {
    return(
      <Fade in={mount} timeout={300} >
        <div style={{backgroundColor: "aqua", width: 200}}>
          <label>test</label>
        </div>
      </Fade>
    )
  }

  switch(alertStatus){
    case ALERTSTATE.MOUNT: return AlertTemplate(true);
    case ALERTSTATE.FADEOUT: {
      setTimeout(() => setAlertStatus(ALERTSTATE.UNMOUNT), 400);
      return AlertTemplate(false);
    }
    default: AlertTemplate(); break;
  }
  return null;
  // return(
  //   <div>
  //     <Alert severity="error">
  //         <AlertTitle>Error</AlertTitle>
  //         This is an error alert — <strong>check it out!</strong>
  //     </Alert>
  //     <AlertTemplate />
  //   </div>
  // )
}

export default AlertTT;
/// BoxTT
import React from "react";
import { forwardRef } from "react";

//MUI material ui component
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BoxTT = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <BoxStyle
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);
//custom styles for BoxTT
const BoxStyle = styled(Box)(({theme, ownerState})=>{
  const { palette, functions, borders, boxShadows} = theme
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;
  //const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;
  
  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };

  const validGradients = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ];

  const validColors = [
    "transparent",
    "white",
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "grey-100",
    "grey-200",
    "grey-300",
    "grey-400",
    "grey-500",
    "grey-600",
    "grey-700",
    "grey-800",
    "grey-900",
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

  // background value
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow) {
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});

export default BoxTT;