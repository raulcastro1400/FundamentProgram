/*
Se necesita un programa para un supermercado, 
en el cual si el monto de la compra del cliente 
es mayor a 5000 se la hará un descuento del 30%, 
si es menor o igual a 5000 pero mayor que 
3000 será del 20%, si no rebasa los 3000 pero si 
los 1000 la rebaja efectiva es del 10%
y en caso de que no rebase los 1000 
no tendrá beneficio
*/

let montoDeLaCompra = 5500

let descuento1 = 0.30
let descuento2 = 0.20
let descuento3 = 0.10

let montodescuento = 0

if(montoDeLaCompra > 5000){
    montodescuento= montoDeLaCompra*descuento1
}else if (montoDeLaCompra > 3000){
    montodescuento= montoDeLaCompra*descuento2

}else if (montoDeLaCompra > 1000){
    montodescuento= montoDeLaCompra*descuento3

}else{
    montodescuento = 0
}

let total = montoDeLaCompra -  montodescuento

console.log(total)