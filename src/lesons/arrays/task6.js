// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст
// // ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя строку
// // "Имя: Иван, возвраст: 23".
export function z61(arr) {
    for (let value of arr) {
        if (value % 2 !== 0) {
            return false;
        }
    }
    return true;
}

export const task2 = arr => arr.every(item => item % 2 === 0);