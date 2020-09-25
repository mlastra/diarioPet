var miFormulario= document.getElementById("miFormulario");


window.onload= iniciar;

function iniciar(){

    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaCorreo(){
    var elemento = document.getElementById("usuario");
    if (elemento.value == ""){
        alert("El campo no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}
function validaPassword(){
    var elemento = document.getElementById("correo");
    if (elemento.value == ""){
        alert("El campo no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}



 function validar (e){
      if ( validacorreo() && validaPassword() && confirm ("pulsa aceptar si deseas enviar este formulario")){
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

