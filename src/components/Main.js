import CreatePost from "./CreatePost.js"
import '../styles/css/main.css'

//hooks
import usePost from '../hooks/usePost.js'

export default function Main(){
    
    const { dataPosts, postItems } = usePost()
   
    return(
        <div className="main-container">
            <CreatePost />

            <div className="filterOptions">
                <span>Trending</span>
                <span>Friends</span>
                <span>Private Channel</span>
            </div>

            {dataPosts.length > 0 && 
                <div className="post-container">
                        {postItems}
                </div>
            }
        </div>
    )
}