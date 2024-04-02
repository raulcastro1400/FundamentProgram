// OR , AND - && || O Y

// =Asignación o Operacion   == comparación  === tipo de Dato - operador de compración estricto
let edad = 17
let genero = "F"

const mayorDeEdad = 18

const esMayor = edad>= mayorDeEdad  //TRUE
const esMujer = genero == "F" // TRUE

const puedeEntrar = esMayor || esMujer

//console.log(puedeEntrar);

//EJERCICIO PARA MATRICULARTE EN CETPRO JCT 2024

//MAYOR A 16 AÑOS
//BAUCHER PAGO
//COPIA DE DNI
//CERTIFICADO DE ESTUDIOS
//FICHA INSCRIPCION


let age = 18
let VaucherPago = "SI"
let copiaDni = "SI"
let certificadoEstudios = "SI"
let fichaInscripcion = "SI"

const edadMatricularse = 16

const esMayorParaMatricula = age >= edadMatricularse //TRUE
const tieneVaucher = VaucherPago == "SI" //TRUE
const tieneCopiaDni = copiaDni == "SI" // TRUE
const tieneCertificado = certificadoEstudios == "SI" //FALSE
const tieneFicha = fichaInscripcion == "SI" //TRUE


const puedeMatricularse = esMayorParaMatricula && tieneVaucher && tieneCertificado && copiaDni && tieneFicha 
//const puedeMatricularse2 = (age >= edadMatricularse) && (VaucherPago == "SI") && (copiaDni == "SI") && (certificadoEstudios == "SI") && (fichaInscripcion == "SI")

console.log(puedeMatricularse)







