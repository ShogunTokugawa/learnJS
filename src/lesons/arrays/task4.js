// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
// и функция возращает среднее арифметическое, (округлить результат до десятых)

export function z41(arr) {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return Number(sum) / arr.length;
}

export const z42 = arr => arr.reduce((value, current) => (value + current)) / arr.length;