export function multi(a,b) {
    return a*b;
}
export const multi2 = (a,b) => a * b;
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
// "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
// function z2(name, surname, age) {
//     return `Привет ${name} ${surname} с возростом ${age} лет`;
//
// }
// const z2_1 = (name, surname, age) => `Привет ${name} ${surname} с возростом ${age} лет`;
// // Написать функцию, которая принимает пол человека ('M','F') в виде строки,
// // результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"
// function z3(sex) {
//     switch (sex) {
//         case 'M' || 'm':
//             return "Ваш пол мужской";
//         case 'F' || 'f':
//             return "Ваш пол женский";
//         default:
//             return "Ваш пол не опеределен";
//     }
// }
// // Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function z4(day) {
//     let obj = {
//         1: 'пн',
//         2: 'вт',
//         3: 'ср',
//         4: 'чт',
//         5: 'пт',
//         6: 'сб',
//         7: 'вс'
//     };
//     for (let key in obj) {
//
//         if (Number(key) === day) {
//             return obj[key];
//         } else {
//             return 'вы ввели не правельный параметор';
//         }
//     }
// }
// function z4_1(day) {
//     switch (day) {
//         case 1:
//             return 'пн';
//         case 2:
//             return 'вт';
//         case 3:
//             return 'ср';
//         case 4:
//             return 'чт';
//         case 5:
//             return 'пт';
//         case 6:
//             return 'сб';
//         case 7:
//             return 'вс';
//         default :
//             return 'не правельный параметр';
//     }
// }
// // Сделай функцию, которая принимает массив любых целых чисел, которая
// // возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.
// let arr = [2,4,6,8];
// function z5(arr) {
//     return arr.every(function(number) {
//         return number % 2 === 0;
//     });
// }
// let arr = [2,4,6,8];
// const z5_1 = arr => arr.every(number => number % 2 === 0);
// let arr = [2,4,6,8,1];
// function z5_2(arr) {
//     for (let index of arr) {
//         if (index % 2 !== 0) {
//             return false;
//         }
//     }
//     return true;
// }
// // Сделай функцию, которая принимает массив
// // любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
//
// let arr = [1,2,5,12,15,21];
// const z6 = arr => arr.filter(num => num % 5 === 0);
// let arr = [1,2,5,12,15,21];
// function z6_1(arr) {
//     let currArr = [];
//     for (let key in arr) {
//         if(arr[key] % 5 === 0) {
//             currArr.push(arr[key]);
//         }
//     }
//     return currArr;
// }
// //test

