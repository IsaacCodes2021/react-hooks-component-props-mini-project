import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from './Header'
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header title={blogData.name}/>
      <About img={blogData.image} txt={blogData.about} />
      <ArticleList articleArray={blogData.posts} />
    </div>
  );
}

export default App;
