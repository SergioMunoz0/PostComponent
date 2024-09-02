import PostItem from '../components/PostItem.js'
import { useContext } from 'react'

//context imports
import { PostContext } from '../context/post.js'

export default function usePost(){
    //Global state post
    const { dataPosts, setDataPosts } = useContext(PostContext)
 
    const postItems = dataPosts.map((post,index)=>{
        return <PostItem 
                    key={index === 0 ? `first-${Date.now()}` : index + 1}  //solucion rapida para generar una animacion al primer elemento
                    isFirst={index===0 ? true : false}
                    text={post.text} 
                    visibility={post.visibility}
                    imageUrl={post.imageUrl} 
                />})
        
    return { dataPosts, setDataPosts, postItems }
}