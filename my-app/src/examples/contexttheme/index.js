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