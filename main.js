/*
let nombrearray = [];//array

console.log(nombrearray);

let frutasarray = ['Lulo', 'Maracuya', 'Mandarina', 'Pera'];
console.log(frutasarray);

console.log(frutasarray[1]);
console.log(frutasarray[3]);


frutasarray[2] = "Uvas";
console.log(frutasarray);



console.log(frutasarray.length)


nombrearray.push("Oscar");
nombrearray.push("Ana");
nombrearray.push("Fer");
nombrearray.push("Diego");
console.log(nombrearray);

nombrearray.pop();
console.log(nombrearray);

nombrearray.push("Diego");


frutasarray.unshift("Aguacate");
console.log(frutasarray);
frutasarray.shift();
console.log(frutasarray);



console.log(frutasarray.sort())
console.log(frutasarray.reverse())

*/

//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

// Crear un array vacío
let numerosAleatorios = [];

// Generar 10 números al azar y guardarlos en el array
for (let i = 0; i < 10; i++) {
    // Generar un número al azar entre 0 y 100
    let numero = Math.floor(Math.random() * 101);
    // Agregar el número al array
    numerosAleatorios.push(numero);
}

// Mostrar en consola el resultado del array
console.log(numerosAleatorios);




//2. Solicitar al usuario que ingrese un string con varias palabras separadas por coma
let inputString = prompt("Ingresa varios numeros  separadas por coma:");

// Convertir el string en un array usando split()
let arrayResultante = inputString.split(",");

// Mostrar en consola el resultado del array usando un bucle for
for (let i = 0; i < arrayResultante.length; i++) {
    console.log(arrayResultante[i]);
}



//3.De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let array = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
array.sort((a, b) => a - b);

/// Encontrar el número menor usando Math.min y recorriendo el array
var numeroMenor = Math.min.apply(null, array);

// Encontrar el número mayor usando Math.max y recorriendo el array
var numeroMayor = Math.max.apply(null, array);

// Mostrar el array ordenado en la consola
console.log("Array ordenado de menor a mayor:", array);

// Mostrar el número menor y el número mayor en la consola
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);