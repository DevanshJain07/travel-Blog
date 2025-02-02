import React from "react";
import Header from "../parts/Header"
import Breadcrumb from "../parts/Breadcrumb"
import Posts from "../parts/Posts"
import Slider from "../parts/Slider"
import Footer from "../parts/Footer"
import Sidebar from "../parts/Sidebar";

const Category = () => {
  return (
    <>
    <Header/>
    <Breadcrumb/>
		<section className="blog-section">
			<div className="container">
				<div className="row">
          <Posts/>
          <Sidebar/>
				</div>
			</div>
		</section>  
    <Footer/>  
    </>
  );
};

export default Category;
