export function z4(name, age) {
    let status;
    if (age <= 17) {
        status = "ребёнок";
    } else if (age <= 30) {
        status = "молодой";
    } else if (age <= 55) {
        status = "зрелый";
    } else if (age <= 100) {
        status = "старый";
    }
    return `${name} имеет возраст ${age} и ${status}`;
}