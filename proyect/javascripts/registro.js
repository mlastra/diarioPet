var miFormulario= document.getElementById("miFormulario");


window.onload= iniciar;

function iniciar(){

    document.getElementById("enviar").addEventListener('click', validar, false);
}
function validaNombre(){
    var elemento = document.getElementById("nombre");
    if (elemento.value == ""){
        alert("El campo no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}
function validaUsuario(){
    var elemento = document.getElementById("usuario");
    if (elemento.value == ""){
        alert("El campo no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}
function validacorreo(){
    var elemento = document.getElementById("correo");
    if (elemento.value == ""){
        alert("El campo no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}
function validaPassword(){
    var elemento = document.getElementById("contrasenna");
    if (elemento.value == ""){
        alert("El campo  contraseña no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}
function validaPassword2(){
    var elemento = document.getElementById("contrasenna2");
    if (elemento.value == ""){
        alert("El campo contraseña no puede ser vacio ");
        error(elemento);
        return false;
    }
    return true;
}

function validartelefono(){
    var elemento = document.getElementById("telefono");
    if(isNaN (elemento.value)){
        alert ("el telefono ingresado debe ser numerico ");
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
      if (validaNombre() && validaUsuario() && validacorreo() && validaPassword() && validaPassword2()&& validartelefono()&& validarCheck() && confirm ("pulsa aceptar si deseas enviar este formulario")){
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


        



    