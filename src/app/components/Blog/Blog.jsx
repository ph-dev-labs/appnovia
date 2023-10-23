import React from "react";
import "./Blog.css";
import NewsHolder from "../Blog-holder/NewsHolder";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-text">
        <h1 className="blog-header">read our blog posts</h1>
        <p className="blog-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed
          do eiusmod.
        </p>
      </div>
      <div className="blog-news-sec">
        <NewsHolder />
      </div>
    </div>
  );
};

export default Blog;
