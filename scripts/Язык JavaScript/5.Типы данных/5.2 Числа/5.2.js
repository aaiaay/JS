let first = +prompt('Введите первое число', '')
let second = +prompt('Введите второе число', '')

alert(first+second);

function readNumber() {
    let num;
    do
    {
        num = prompt('Введите число', 0)
    }
    while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

function random(min, max) {
    let num = Math.random() * (max - min) + min;
    return num;
}

function randomInteger(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}