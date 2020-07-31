import React from "react"
import Postitem from "../parts/Postitem"
import Pagination from "../parts/Pagination"

const Posts=()=>{
    return(
        <div className="col-lg-8">
            <div className="blog-box list-style">
                <Postitem/>
                <Postitem/>
                <Postitem/>
                <Postitem/>
                <Pagination/>
			</div>
		</div>
    )
}

export default Posts;