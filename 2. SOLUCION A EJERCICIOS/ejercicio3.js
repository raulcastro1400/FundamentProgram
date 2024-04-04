/*
Un vendedor recibe un sueldo base más un 10% extra
por comisión de sus ventas, el vendedor desea saber cuánto
dinero obtendrá por concepto de comisiones por las tres 
ventas que realiza al mes y el total que recibirá en el mes 
tomando en cuenta su sueldo base y comisiones

*/

let sueldoBase = 1025
let comision = 0.10
let cantidadVentas =20
let montoComision
let sueldoFinal

montoComision= (sueldoBase*comision)*cantidadVentas

sueldoFinal = sueldoBase + montoComision

console.log(montoComision)
console.log(sueldoFinal)