import React from "react";
import PostDesc from "../parts/PostDesc"
import Header from "../parts/Header"
import Footer from "../parts/Footer"
import Comment from "../parts/Comment"
const Single = () => {
  return (
    <>
    <Header/>
    <div className="single-post no-sidebar">
      <PostDesc/>
      <Comment/>
        </div>
      <Footer/>
      </>
  );
};

export default Single;
