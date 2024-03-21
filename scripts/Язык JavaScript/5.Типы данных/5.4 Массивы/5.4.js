let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
styles[Math.floor(styles.length/2)] = 'Классика';

alert(styles.shift(1));

styles.unshift('Рэп', 'Регги');

function sumInput() {
    let arr = [];
    let sum = 0;

    while (1) {
        let num = prompt('Введите число', '');
        if (num === "" || num === null || !isFinite(num)) break;

        arr.push(+num);
    }

    for (let num of arr) {
        sum += num;
    }

    return sum;
}

function getMaxSubSum(arr) {
    let sum = 0;
    let temp = 0;

    for (let elem of arr) {
        temp += elem;
        sum = Math.max(sum, temp);
        if (temp < 0) sum = 0;
    }

    return sum;
}