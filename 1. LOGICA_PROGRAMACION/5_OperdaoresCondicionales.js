//OPERADORES CONDICIONALES SON AQUELLOS QUE EVALUA UN SITUACIÓN O CONDICIÓN
//if (CONDICIÓN){EL VALOR VERDADERO{else EL VALOR SI FALSO }} 


// INGRESAR 3 NOTAS OBTENER EL RESULTADO Y DEFINIR SI EL ESTUDIANTE APRUEBA Ó
// DESAPRUEBA, NOTA MINIMA PARA APROBAR 11

let nota1, nota2, nota3, promedio
const promedioMinimo = 11


nota1 = 10
nota2= 5
nota3 = 11

promedio = (nota1+nota2+nota3)/3

if(promedio >= 11){
console.log("EL ESTUDIANTE A APROBADO CON UN PROMEDIO DE : ", promedio)
}else{
console.log("EL ESTUDIANTE A DESAPROBADO CON UN PROMEDIO DE : ", promedio )
}
