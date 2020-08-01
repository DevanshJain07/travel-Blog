import React from "react"
import Postitem from "../parts/Postitem"
import Pagination from "../parts/Pagination"
import {useSelector,useDispatch} from "react-redux"

const Posts=()=>{

    const posts=useSelector((state)=>state.posts)
    const dispatch=useDispatch()
    const postitems=posts.map((post)=><Postitem post={post}/>)

    return(
        <div className="col-lg-8">
            <div className="blog-box list-style">
                {postitems}
                <Pagination/>
			</div>
		</div>
    )
}

export default Posts;