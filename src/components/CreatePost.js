import {useState} from 'react'
import "../styles/css/utils.css"
import "../styles/css/createPost.css"

//images and icons
import profilePicture from '../assets/images/profilePhoto.jpg'
import arrowDown from '../assets/icons/arrowDown.png'
import arrowUp from '../assets/icons/arrowUp.png'
import gallery from '../assets/icons/gallery.png'
import play from '../assets/icons/play.png'
import microphone from '../assets/icons/microphone.png'
import label from '../assets/icons/label.png'

export default function CreatePost(props){

    //Informacion formulario post
    const [formInfo,setFormInfo] = useState(
        {
            text: "",
            visibility: "publico"  //default visibility
        }
    )

    const [checkItem, setCheckItem] = useState("Publico")

    //Determina el layout de createPost
    const [isExtendentPost, setIsExtendentPost] = useState(false)

    function handleForm(event){
        const {name, value} = event.target
        setFormInfo(prevData =>{
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        //validar que el campo no este vacio
        if (formInfo.text.trim() === "") {
            alert("El campo de texto no puede estar vacío");
            return;
        }

        const newPost = {
            "text":formInfo.text,
            "visibility":formInfo.visibility
        }

        props.setDataPosts(prevData =>{
            return [newPost, ...prevData]
        })

        //Se llama a la funcion que controla el layout para despues de un submit
        handleCreatePostLyout("submitted")
    }

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

    //Controla el label de los iconos
    function handleIconLabel(event, element){
        const label = document.querySelector(`#${element}`)
        event === "onMouseOver" ? label.style.display = "block" : label.style.display = "none"
    }

    return(
        <div className="createPost-container">
            <form className="createPost-form" onSubmit={handleSubmit}>
                <div className="imagePost-container">
                    <img className="profilePicture" src={profilePicture} alt="ProfilePicture" />
                    <textarea
                        className="textPost-input textPost-hoverEffect"
                        onChange={handleForm}
                        onClick={handleCreatePostLyout}
                        type="text" 
                        id="post"
                        name="text"
                        placeholder="what are you thinking?" 
                        value={formInfo.text}
                    /> 
                </div>
                
                {isExtendentPost && <div className="formPost-options">
                    <div className="postAdd-options">
                        <span>Agrega</span>
                        <div>
                            <img className="post-icon gallery-icon" src={gallery} alt="gallery" 
                                    onMouseOver={()=>handleIconLabel("onMouseOver","label-photo")} onMouseOut={()=>handleIconLabel("onMouseOut","label-photo")}/>
                            <label className="icon-label" id="label-photo">Photo</label>
                        </div>   
                        <div>
                            <img className="post-icon play-icon" src={play} alt="play"
                                    onMouseOver={()=>handleIconLabel("onMouseOver","label-video")} onMouseOut={()=>handleIconLabel("onMouseOut","label-video")}/> 
                            <label className="icon-label" id="label-video">Video</label>
                        </div>
                        <div>
                            <img className="post-icon microphone-icon" src={microphone} alt="microphone"
                                    onMouseOver={()=>handleIconLabel("onMouseOver","label-voiceNote")} onMouseOut={()=>handleIconLabel("onMouseOut","label-voiceNote")}/>
                            <label className="icon-label" id="label-voiceNote">Voice note</label>
                        </div>
                        <div>
                            <img className="post-icon label-icon" src={label} alt="label" 
                                    onMouseOver={()=>handleIconLabel("onMouseOver","label-tag")} onMouseOut={()=>handleIconLabel("onMouseOut","label-tag")}/>
                            <label className="icon-label" id="label-tag">Tag</label>
                        </div>
                    </div>

                    <div className="submit-options">
                        <div className="visibility-options" onClick={handleOptionList}>
                            <p className="checked-name">{checkItem}</p>
                            <img className="arrowDown-icon" src={arrowDown} alt="arrowDown" />  
                            <img className="arrowUp-icon" src={arrowUp} alt="arrowUp" />
                            <div className='visibility-list'>
                                <input
                                    onChange={handleForm}
                                    type="radio"
                                    id="publico"    
                                    name="visibility"
                                    value="publico"
                                    checked={formInfo.visibility === "publico"}
                                />
                                {checkItem !== "Publico" &&  <label onClick={()=>setCheckItem("Publico")} htmlFor="publico">Publico</label>} 

                                <input
                                    onChange={handleForm}
                                    type="radio"
                                    id="privado"
                                    name="visibility"
                                    value="privado"
                                    checked={formInfo.visibility === "privado"}
                                />
                                {checkItem !== "Privado" &&  <label onClick={()=>setCheckItem("Privado")} htmlFor="privado">Privado</label>}

                                <input
                                    onChange={handleForm}
                                    type="radio"
                                    id="me"
                                    name="visibility"
                                    value="me"
                                    checked={formInfo.visibility === "me"}
                                />
                                {checkItem !== "Solo para mi" &&  <label onClick={()=>setCheckItem("Solo para mi")} htmlFor="me">Solo para mi</label>}
                            </div> 
                        </div>
                        <button className="submitButton" type="submit">Post</button>
                    </div>
                </div>}
            </form>
        </div>
    );
}