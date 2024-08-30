export default function useReadImage(handleForm){
    
    //Carga una imagen usando la API filereader
    function openFile(event){
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function(){
            var dataURL = reader.result; 
            //guardar la imagen en el formulario
            handleForm({
                target: {
                    name: "imageUrl",
                    value: dataURL
                }
            })
          };
        reader.readAsDataURL(input.files[0]); 
    }

    return [ openFile ]
}