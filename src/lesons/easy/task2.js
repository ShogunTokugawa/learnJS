export function z2(name) {
    let now = new Date();
    let currentHours = now.getHours();
    console.log(currentHours >= 19 || currentHours <= 4)
    if (currentHours >= 5 && currentHours <= 11) {
        return `Доброе утро ${name}`;
    } else if (currentHours >= 12 && currentHours <= 18) {
        return `Доброе день ${name}`;
    } else  if (currentHours >= 19 || currentHours <= 4) {
        return `Доброе ночь ${name}`;
    }
}



