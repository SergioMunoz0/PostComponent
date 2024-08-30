import { useState } from "react"

export default function useForm(initialValues){
     //Informacion formulario post
     const [formInfo,setFormInfo] = useState(initialValues)

    function handleForm(event){
        const {name, value} = event.target
        setFormInfo(prevData =>{
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return [formInfo, handleForm, setFormInfo]
}