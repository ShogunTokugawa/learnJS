// Сделай функцию, которая принимает массив любых целых чисел,
// которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.

export function z21(arr) {
    for (let value of arr) {
        if (value % 2 !== 0) {
            return true;
        }
    }
    return false;
}

export const z22 = arr => arr.some(item => item % 2 !== 0);