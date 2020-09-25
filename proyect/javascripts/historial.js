window.addEventListener('load', function(){
    
    btngenerar.addEventListener('click', function(){
        
        arr=
        [
            ["", "<b>Nombre Dueño</b>","<b>Nombre Mascota</b>","<b>tipo mascota</b>","<b>Edad</b>","<b>Telefono</b>","<b>Correo</b>","<b>Fecha</b>"],
            [1, "nachito lavin","palomito",,"perro", "3 años",,"099999999","derlycan@gmail.com", "17/07/2020"],
            [2, "orlan2 plaza","renatito",,"Perro", "11 años", "066666666","orlando.plazalastra@gmail.com","18/08/2020"],
           
        
        ]

        convertirArregloEnTabla(arr);
    
    });

})
function convertirArregloEnTabla(parreglo)
{
    let html="<table border=1 > <font size=20>"
    
    
    parreglo.forEach(elemento=>{
        
        html+="<tr>"
        elemento.forEach(col=>{
            html+=`<td> ${col} </td>`
        })
        html+="</tr>"
    
    })
    html+="</table></font>"
    divtabla.innerHTML=html
}