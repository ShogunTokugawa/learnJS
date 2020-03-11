// Сделай функцию, которая принимает массив любых целых чисел, 
// которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.

export function task1(arr) {
    for (let value of arr) {
        if (value % 2 !== 0) {
            return false;
        }
    }
    return true;
}

export const task2 = arr => arr.every(item => item % 2 === 0);
