//¿Qué es el ciclo?
/*
BUCLE, INTERACCIONES, LOOP
ES FINITO
SE RECOMIENDA TENER CUIDADO CON LOS LOOPS INFINITOS POR QUE PUEDE OCUPAR TODA TU MEMORIA RAM
SE DETIENE BAJO UNA CONDICIÓN

FOR(PARA) / WHILE (MIENTRAS)


SINTAXIS FOR

for (variable; condicion; incremento){
    lo que tiene que hacer
    
}


*/

// RELIZAR UNA TABLA DE MULTIPLICAR HASTA EL 10

const hastaQueTablaQuieres = 10;
const hastaQueNumeroquieres = 12;

for (let tabla = 2; tabla <= hastaQueTablaQuieres; tabla+=2) {
  console.log("********************************");

  for (let numero = 1; numero <= hastaQueNumeroquieres; numero++) {
    if (numero % 2 === 0) {
      const resultado = tabla * numero;
      console.log(tabla + "x" + numero + "=" + resultado);
    }
  }
}

// =Asignación o Operacion   == comparación  === tipo de Dato - operador de compración estricto true false
