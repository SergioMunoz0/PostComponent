import CreatePost from "./CreatePost.js"
import PostItem from "./PostItem.js"
import {useState} from 'react'
import '../styles/css/main.css'

export default function Main(){
    //Variable que guarda los post localmente (tiene un post por defecto para mejor visualizacion)
    const [dataPosts,setDataPosts] = useState([{
        text:`El gato negro observaba atento desde el tejado. Sus ojos brillaban en la oscuridad,
        como si guardaran secretos milenarios. Un suave maullido rompió el silencio de la noche, y la luna, 
        curiosa, asomó entre las nubes para ver al misterioso felino, que parecía ser el guardián de la noche.`,
        visibility: 'publico'
    }])

    const postItems = dataPosts.map((post,index)=>{
        return <PostItem 
                    key={index === 0 ? `first-${Date.now()}` : index + 1}  //solucion rapida para generar una animacion al primer elemento
                    isFirst={index===0 ? true : false}
                    text={post.text} 
                    visibility={post.visibility}
                />})
        
    return(
        <div className="main-container">
            <CreatePost 
                dataPosts={dataPosts}
                setDataPosts={setDataPosts}
            />

            <div className="filterOptions">
                <span>Trending</span>
                <span>Friends</span>
                <span>Private Channel</span>
            </div>

            {dataPosts.length > 0 && (
                <div className="post-container">
                        {postItems}
                </div>
            )}
        </div>
    )
}