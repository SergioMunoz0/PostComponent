import { createContext, useState } from "react";

//Este es el que se consume
export const PostContext = createContext()

//Este provee acceso al contexto
export function PostProvider({children}){
     //Variable que guarda los post localmente (tiene un post por defecto para mejor visualizacion)
     const [dataPosts,setDataPosts] = useState([{
        text:`El gato negro observaba atento desde el tejado. Sus ojos brillaban en la oscuridad,
        como si guardaran secretos milenarios. Un suave maullido rompió el silencio de la noche, y la luna, 
        curiosa, asomó entre las nubes para ver al misterioso felino, que parecía ser el guardián de la noche.`,
        visibility: 'publico',
        imageUrl: ''
    }])

    return (
        <PostContext.Provider value={{
            dataPosts,
            setDataPosts
        }}>
            {children}  
        </PostContext.Provider>
    )
}