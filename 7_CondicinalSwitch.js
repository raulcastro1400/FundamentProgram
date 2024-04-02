//condicional switch trabaja bajo casos 

/* 
SWITCH(CONDICIÓN - EXPRESIÓN ){
    CASE "COMPARACIÓN" : 
    QUE VA HA SUCEDER
    BREAK
}
*/

let descuento = 0
let precioPasaje = 4000
let PrecioFinal
let pais = "EE.UU"


switch(pais){
    case "Argentina":
        descuento = 1000
        precioFinal = precioPasaje-descuento 
    break
    
    case "Corea":
        descuento = 1050
        precioFinal = precioPasaje-descuento 
    break

    case  "Japon":
        descuento = 950
        precioFinal = precioPasaje-descuento 
    break

    case "EE.UU":
        descuento = 1250
        precioFinal = precioPasaje-descuento 
    break

    case "Peru":
        descuento = 500
        precioFinal = precioPasaje-descuento 
    break

}

console.log("El precio final de tu pasaje es: S/."+ precioFinal)