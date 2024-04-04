/* Realizar un algoritmo que calcule la edad 
de una persona a la cual solo se le solicitará 
el año en que nació.*/


//let añoActual = 2024
//let AñoQueNAcio = 1989
//let edad

//edad = añoActual-AñoQueNAcio

//console.log(edad)





// function Nombre(Argunmentos){
//    Intrucciones}

function calcularEdad(){
 
    while(true){
        let opciones
        opciones = prompt("¿Que desea hacer? \n1. Calcular Edad \n2. Salir  ")

        if (opciones === "2"){
            alert("Hasta Luego, que te valla bien, que te pise un tren")
            break
        }


        //Vamos hallar la edad apartir de aqui

        if(opciones === "1"){
            let añoActual = parseInt(prompt("Por favor ingrese el año Actual"))
            let añoNacimiento = parseInt(prompt("Por favor ingrese el año de su nacimiento"))
            let edad = añoActual - añoNacimiento
            alert("Su edad es "+ edad + " Años")
        }
    }
}

