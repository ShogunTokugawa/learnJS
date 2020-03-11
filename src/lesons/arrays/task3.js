// Сделай функцию, которая принимает массив
// любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

export function z31(arr) {
    let arrNew = [];
    for (let value of arr) {
        if (value % 5 === 0) {
            arrNew.push(value);
        }
    }
    return arrNew;
}

export const z32 = arr => arr.filter(value => value % 5 === 0);