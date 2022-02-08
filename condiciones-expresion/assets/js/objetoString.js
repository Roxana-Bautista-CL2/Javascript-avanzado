let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adiós");// Objeto string
console.log(cadena2)


console.log(cadena2.toLowerCase().includes("a"))
// convierte a minusculas o mayúsculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toLowerCase());

// cohersión y conversión
 
//cohersión - JavaScript convierte en automático un tipo de dato en otro 
console.log(cadena1.toLowerCase());


/*Función que recibe una palabra y la regresa invertida*/

let palabra = "Hola mundo";
let arreglo = palabra.split(" ");
console.log(arreglo);


function invertirPalabra(cadena) {
    let arreglo = cadena.split(""); //convirtiendo la cadena en un arreglo
    arreglo.reverse(); //invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); //une los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida);
}

invertirPalabra("Generation");
