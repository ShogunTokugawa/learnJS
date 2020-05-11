//У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

export function z31(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

export const z31_2 = obj => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
};