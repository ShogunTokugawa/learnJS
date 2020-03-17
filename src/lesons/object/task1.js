//У нас есть объект, в котором хранятся зарплаты нашей команды:

// export function z11(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return Number(sum);
// }

export const z12 = obj => obj.reduce((value, current) => (value + current));