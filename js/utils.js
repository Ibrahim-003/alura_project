// // Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];

// // Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// function showInConsol(arr) {
//     arr.forEach(el => console.log(el));
// }

// showInConsol(lenguajesDeProgramacion);

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// function showReverse(arr) {
//     arr = arr.reverse();
//     arr.forEach(item => console.log(item));
// }

// showReverse(lenguajesDeProgramacion);


// // Crea una función que calcule el promedio de los elementos en una lista de números.
// function average(arr) {
//     let sum = 0;
//     arr.forEach(el => sum+= el);

//     return sum / arr.length;
// }

// // Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function maxAndMin(arr) {
//     let max = arr[0];
//     let min = arr[0];

//     arr.forEach(num => {
//         if (num > max) {
//             max= num;
//         }

//         if (num < min) {
//             min = num;
//         }
//     })

//     console.log(max);
//     console.log(min);
// }

// maxAndMin([1, 2, 3, 4, 5])

// // Crea una función que devuelva la suma de todos los elementos en una lista.
// function sum(arr) {
//     let sum = 0;

//     arr.forEach(num => sum += num);

//     return sum;
// }

// // Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// function indexOfElement(arr, item) {
//     // arr.forEach((el, index) => {
//     //     if (el === item) {
//     //         return index;
//     //     }
//     // })

//     for (let i = 0; i< arr.length; i++) {
//         let el = arr[i];
//         if (el === item) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(indexOfElement([1, 2, 3, 4 ,5, 6], 7));

// // Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function sumTwoList(arr1, arr2) {
//     let sumList = [];

//     for (let i = 0; i < arr1. length; i++) {
//         let result = arr1[i] + arr2[i];
//         sumList.push(result);
//     }

//     return sumList;
// }

// console.log(sumTwoList([1,2, 3, 4, 5], [1,2, 3, 4, 5]));

// // Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function pow(arr) {
//     return arr.map(item => Math.pow(item, 2));
// }

// console.log(pow([1, 2, 3, 4, 5]));
