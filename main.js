// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 1- Create a function that receives a number as a parameter and tells the console if the number is even or odd.

console.log('Ejercicio 1');

const numerosParEimpar = (numero = 0) => { 

    if (numero % 2 === 0 ) {
        console.log(`El numero ${numero} es par`);
    } else {
        console.log(`El numero  ${numero} es impar`);
    }
  }

  numerosParEimpar(17);

console.log('---------------');

  
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 2- Create a function that receives two numbers per parameter and indicates to the console which number is greater, and if neither is, indicate to the console that they are equal.

console.log('Ejercicio 2');
 const numeroMayor = (num1, num2) => {
    if (num1 > num2) {
        console.log(`El numero ${num1} es mayor que el numero ${num2}.`)
    } else if (num1 < num2) {
        console.log(`El numero ${num1} es menor que el numero ${num2}, por lo cual el numero ${num2} es mayor.`)
    } else if (num1 == num2) {
        console.log(`El numero ${num1} y el numero ${num2} son iguales.`)
    }
 }

 numeroMayor(23, 23);

 console.log('---------------');


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 3- Create a function that receives a number by parameter and indicates in the console if that number is a multiple of 5.

console.log('Ejercicio 3');
const multiploDeCinco = (num) => {
    if (num % 5 === 0) {
        console.log(`El numero ${num} ingresado es multiplo de cinco.`)
    } else {
        console.log(`El numero ${num} ingresado no es multiplo de cinco.`)
    }
}

multiploDeCinco(12);

console.log('---------------');


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 4- Create a function that receives a number as a parameter and prints all the numbers from 0 to that number on the console.

console.log('Ejercicio 4');
const imprimirNumero = (numero) => {
    for (let i = 0; i <= numero; i++)  console.log(i);
}

imprimirNumero(4);

console.log('---------------');


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 5 - Create a function that receives a word and a number by parameter and prints the quantity corresponding to the indicated number on the console.

console.log('Ejercicio 5');
const repetirTexto = (texto = "", veces = undefined) => {
    for (let i= 1; i <= veces; i++) console.log(`${texto}, ${i}`);
}

repetirTexto("tobias", 3);

console.log('---------------');


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 6 - Create a function that receives an array by parameter and prints all the values of that array on the console.

console.log('Ejercicio 6');
const imprimirArray = (arr) => {
    
     for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}

imprimirArray(['Naranja',  'Manzana', 'Banana', 'Sandia', 'Melon', 'Pera']);

console.log('---------------');


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 7 - Create a function that receives an array with 10 numbers and prints to the console all the values of that array, except the one that is in the 5th position of it. Help: Remember that the first index of an array is "0".

console.log('Ejercicio 7');
const quitarElemento = (array) => {

    return console.log({
        original: array,
        quitandoElemento: array.filter(array => array != [6])});
    
}

quitarElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log('---------------');
 

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. 
// 8 - Create a function that receives an array of numbers and a number by parameter and prints to the console each number in the array multiplied by the number passed by parameter.

console.log('Ejercicio 8');
const multiplicarValores = (arr = [], numero = Number) => {

     for(let i = 0; i < arr.length; i++ ) {
       console.log( arr[i] * numero)
     }
}

multiplicarValores([2, 4, 6, 8, 10], 2)

console.log('---------------');

