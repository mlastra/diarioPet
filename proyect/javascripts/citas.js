window.addEventListener('load', function(){
    
    btngenerar.addEventListener('click', function(){
        arr=
        [

            ["<b>JUNIO 2020</b>"],
            ["<b>Dom.</b>","<b>Lun.</b>","<b>Mar.</b>","<b>Mie.</b>","<b>Jue.</b>","<b>Vie.</b>","<b>Sab.</b>"],
            [28, 29, 30, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, "<button>17</button>", "<button>18</button>"],
            ["<button>19</button>", 20, 21, 22, 23, 24, 25],
            [26, 27, 28, 29, 30, 31, 1]
        
        ]

        convertirArregloEnTabla(arr);
    
    });

})
function convertirArregloEnTabla(parreglo)
{
    let html="<table border=1 id='tablaValue' > <font size=20>"
    
    
    parreglo.forEach(elemento=>{
        html+="<tr>"
       

        elemento.forEach(col=>{
            html+=`<td class=btnnumero x='17'> ${col} </td>`
           // html+=`<button class=btnnumero x='17'> ${col} </button>`
           // html+="</td>"   
        })
        
        html+="</tr>"
    
    })
   
    html+="</table></font>"
    divtabla.innerHTML=html


        document.querySelectorAll("table").forEach(x=>{
            x.addEventListener('click', function(){
               /* if(x.value== arr.lenth)
               
                document.querySelectorAll("table").rows[4].cells[5].innerHTML*/
                alert(`Este día es perfecto para tu cita en DiarioPet ` )

           
            })
        })
        
        
    }
    window.onload= iniciar;
    function iniciar(){

        document.getElementById("enviar").addEventListener('click', validar, false);
    }
    function validaNombre(){
        var elemento = document.getElementById("nombre");
        if (elemento.value == ""){
            alert("El campo Nombre no puede quedar vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaMascota(){
        var elemento = document.getElementById("nombreMascota");
        if (elemento.value == ""){
            alert("Debe escribir el nombre de su mascota");
            error(elemento);
            return false;
        }
        return true;
    }
   
    function validaEdad(){
        var elemento = document.getElementById("edad");
        if (elemento.value == ""){
            alert("Debe escribir la edad de su mascota ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validartelefono(){
        var elemento = document.getElementById("telefono");
        if(isNaN (elemento.value)){
            alert ("El telefono ingresado debe ser numerico ");
            error(elemento);
            return false;
        }
        
    
        return true;
    }
    function validacorreo(){
        var elemento = document.getElementById("correo");
        if (elemento.value == ""){
            alert("No puede dejar en campo del correo vacio ");
            error(elemento);
            return false;
        }
        return true;
    }
    function validaPassword(){
        var elemento = document.getElementById("contrasenna");
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

      



