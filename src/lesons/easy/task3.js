export function z3() {
    for (let i = 1; i < 101; i++) {
        if (i <= 17) {
            console.log(`${i} - ребёнок`);
        } else if (i <= 30) {
            console.log(`${i} - молодой`);
        } else if (i <= 55) {
            console.log(`${i} - зрелый`);
        } else if (i <= 100) {
            console.log(`${i} - старый`);
        }
    }
}