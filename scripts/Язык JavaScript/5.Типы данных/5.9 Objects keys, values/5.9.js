// Сумма свойств объекта 
function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum+=value;
    }
    return sum;
}

// Подсчёт количества свойств объекта
function count(obj) {
    return Object.entries(obj).map(([key, value]) => [key, value]).length;
}