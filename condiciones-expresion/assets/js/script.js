/* Operaciones Aritméticas*/
// + - / * % ()

let operacion = 3 * 5 + (10 -5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
//boolean true false

console.log(7 < 7); // no estamos incluyendo el numero a comparar
console.log(7 <= 7); // incluyendo el numero a comparar

console.log(7 == "7");//compara el valor
console.log(7 === "7");//compara valor y tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5 ;
//incremento += 5;
incremento = incremento + 5;
console.log(incremento); //10

incremento -= 5;
//incremento = incremento - 5;
console.log(incremento);//5

incremento *= 5;
//incremento = incremento * 5 ;
console.log(incremento);//25

incremento /= 5;
//incremento = incremento / 5;
console.log(incremento);//5

/*Operador usuario*/
// ++, --
// sumar uno, restar uno

let sumar = 0;
console.log(sumar + "linea 49");
sumar++;
console.log(sumar + "linea 51");
sumar++;
console.log(sumar);
sumar--;
sumar--;
sumar--;
console.log(sumar);//-1





/* */
for(let i = 0; i < 10; i++ ){
    //codigo 
}
/*
++variable = preincremento -primero modifica el valor y ya despues hace uso de la variable 
variable++ = postincremento - usando la variable y 
despues hace el incremento */
let num = 5;
console.log(num++);//5
console.log(num);//6


for(let i = 0; i < 5; i++) {
    //iteracion
    //primer iteracion, se detiene
    console.log("Este es el ciclo padre")
    
    for(let j = 0; j < 5; j++){
        //hace sus iteraciones (repeticiones) propias
        console.log("Este es el ciclo hijo")
    }
}