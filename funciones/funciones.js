/* Funcion
Es un bloque de código reutilizable
Puede tener o no parametros de entrada.
Puede devolver o no un valor.
*/

function suma(numero1, numero2) {
    //Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la función');
}

// El parseInt es por que utilizaremos numeros
let numero1 = parseInt(prompt ('Numero 1'));
let numero2 = parseInt(prompt('numero2'));
let suma = suma(numero1, numero2)

//La siguiente comilla debe ir invertida se le comoce como backstick 
//La cadena siguiente se le conoce como template string
document.write( `la suma de ${numero1} y ${numero2} es ${suma} <br>
`);
document.write('La suma de' + numero1 + 'y' + numero2 + 'es' + suma);

