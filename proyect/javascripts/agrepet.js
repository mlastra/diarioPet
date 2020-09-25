
    window.onload= iniciar;
    function iniciar(){

        document.getElementById("enviar").addEventListener('click', validar, false);
    }
    
    
    function validaPassword(){
        var elemento = document.getElementById("ficha");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("nombreMascota");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("raza");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("edad");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("peso");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("sexo");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("color");
        if (elemento.value == ""){
            alert("El campo no puede ser vacio ");
            error(elemento);
            return false;
        }
        return true;
    }


   
    
   
    
    function validarCheck(){
        var campoCheck = document.getElementById ("aceptar");
           if ( !campoCheck.checked){
           alert ("Debes ser aceptar los terminos de seguridad");
           error(elemento);
                return false
       }
       return true;
    }
    
     function validar (e){
          if (validaNombre() && validaMascota() && validaEdad() && validartelefono() && validacorreo()&&  validarCheck() && confirm ("pulsa aceptar si deseas enviar este formulario")){
              return true
          }else {
              e.preventDefault();
              return false;
          }
     }
    
     function error (elemento){
         elemento.classNmae="error";
         elemento.focus();
    
     }
     function limpiarError(elemento){
         elemento.className = "";
     }

      



