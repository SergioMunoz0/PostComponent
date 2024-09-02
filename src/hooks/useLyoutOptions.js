import {useState} from 'react'

export default function useLyoutOptions(setFormInfo){

    //Determina el layout de createPost
    const [isExtendentPost, setIsExtendentPost] = useState(false)

    function handleOptionList(){
        const list = document.querySelector(".visibility-list")
        list.style.display === "flex" ? list.style.display = "none" : list.style.display = "flex"
    }

    function handleCreatePostLyout(state){
        const postForm = document.querySelector(".createPost-form")
        const postInput = document.querySelector(".textPost-input")

        if(state==="submitted"){
            setIsExtendentPost(false)
            postForm.style.transition = "none"
            postForm.style.height = "40px"
            postInput.classList.add("textPost-hoverEffect");
            setFormInfo({text:""}) 
            
        }else{
            setIsExtendentPost(true)
            postForm.style.transition = "height 0.2s ease"
            postForm.style.height = "170px"
            postInput.classList.remove("textPost-hoverEffect");
        }
    }

    //Controla el label de los iconos en createPost
    function handleIconLabel(event, element){
        const label = document.querySelector(`#${element}`)
        event === "onMouseOver" ? label.style.display = "block" : label.style.display = "none"
    }


    return [handleOptionList, handleCreatePostLyout, handleIconLabel, isExtendentPost]
}