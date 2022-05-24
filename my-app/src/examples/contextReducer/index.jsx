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