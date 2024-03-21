function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b) {
    return (a < b)? a : b;
}

let x = prompt("Введите x", '');
let n = prompt("Введите n", '');

if (n >= 1) {
  alert(pow(x, n));
} else {
  alert(`${n} - не натуральное число!!!`);
}

function pow(x,n) {
    let xPow = 1;
    for (let i = 0; i < n; i++)
    {
        xPow *= x;
    }

    return xPow;
}