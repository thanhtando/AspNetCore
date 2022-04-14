
//contextextend

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

