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