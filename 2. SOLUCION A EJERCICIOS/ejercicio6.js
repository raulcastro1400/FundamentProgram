/*
Se necesita un sistema para un supermercado, 
el cual dará un 10% de descuento a las personas que compren
 más de 1000 soles, al cliente se debe dar el total a pagar.



*/

let montoDeCompra = 1000
let porcertajeDeDescuento = 0.10
let montoMinimo = 1000


let montoConDescuento
let montoAPagar


if(montoDeCompra > montoMinimo){
    montoConDescuento = montoDeCompra * porcertajeDeDescuento
    montoAPagar = montoDeCompra -montoConDescuento
    console.log(montoAPagar)
}else{
    console.log (montoDeCompra)
}