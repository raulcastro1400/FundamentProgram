/*
Suponga que un individuo desea invertir su capital 
en un banco y desea saber cuanto dinero ganara después 
de un año si el banco paga a razón de 2% mensual.

*/


let montoInvertir = 100
let meses = 12
let interes = 0.03
let cuantoDineroGanara
let totalGanancia 

cuantoDineroGanara = (montoInvertir * interes) * meses

totalGanancia = montoInvertir + cuantoDineroGanara

console.log( "El dinero del interes que ganara anualmente es: " + cuantoDineroGanara)
console.log("El total de ganancias + su inversión es: "+ totalGanancia)



