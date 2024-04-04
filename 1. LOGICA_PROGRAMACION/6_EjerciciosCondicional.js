/* 
CONDICIÓN SI
ARGENTINA TENDRÁ UN DESCUENTO 1000
KOREA TENDRÁ UN DESCUENTO 1050
JAPON TENDRÁ UN DESCUENTO 950
EE.UU TENDRA UN DESCUENT0 1250
PERU TENDRA UN DESCUENTO 500
*/

let precioPasaje = 4000
let pais = "Colombia"

let descuento = 0
let precioFinal 

if(pais == "Argentina"){
    descuento = 0
} else if(pais == "Korea"){
    descuento = 1050
}else if(pais == "Japon"){
    descuento = 950
}else if(pais == "EE.UU"){
    descuento = 1250
}else if (pais == "Perú"){
    descuento = 500
}


precioFinal = precioPasaje-descuento

console.log("TU PRECIO FINAL AL PAIS DE: " + pais + " " + "es S/."+  precioFinal)




