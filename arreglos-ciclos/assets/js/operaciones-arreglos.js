let numeros = [1, 3, 10, 20, 100, 34, 68, 350, 190, 480];

/*ejemplo1:numeros.forEach(function (numero){
    document.write(numero + ',');*/ // la , nos ayuda a que aparezca ene l mismo renglon separados por coma. 

    numeros.forEach( elemento => {
        document.write(elemento + ',');

});

let numeros2 = numeros.map(function(elemento){
    return elemento;

})

document.write('<br>' + numeros2 + '<br>');

let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push ('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas + '<br>');




/* Include  */
document.write('<br>' + numeros.includes('hola')+ '<br>');

let numerosPares = numeros.filter((elemento) => {
    if (elemento % 2 == 0){
        return false;
    } else {
        return true;
    } 
     console.log(elemento % 2 == 0); 
     return elemento % 2 == 0;
})

if (elemento > 10) {
    return true;
});

document.write ('<br>' + numerosPares + '<br>');

let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate', 'sandia']

let frutasFiltro = frutas.filter ((fruta) => {
    /*if (fruta.includes('i') == true) {
        return true;
    }*/
    // Mango toLowerCase mango.include('m'); 

    return fruta.toLowerCase().includes('m');
});

document.write('<br>' + frutasFiltro + '<br>');

/*Sort ordena los elementos*/
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

//document.write('<br>' + numeros.sort() + '<br>');

/* reverse invierte orden de los elementos de un arreglo*/
document.write('<br>' + numeros.reverse() + '<br>');

/* FIND*/

let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLowerCase().includes('manzana');
});

document.write('<br>' + frutaEncontrada + '<br>');