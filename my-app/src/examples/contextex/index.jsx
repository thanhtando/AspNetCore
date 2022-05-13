
//contextextend

import React from "react";
import AddArticle from "./addArticle";
import Articles from "./articles";
import ArticleProvider from "./articleProvider";


const ContextEx = () => {
  return(
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  )
}

export default ContextEx;

