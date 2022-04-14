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