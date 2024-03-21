for (let i = 2; i <= 10; i+2){
    alert (i);
}

let i = 0;
while (i < 3){
    alert( `number ${i}!` );
    i++
}

let number;
do {
    number = prompt("Введите число", '');
}
while (number <= 100 && num);

let n = prompt("Введите число", '');
label:
for (let i = 2; i <= n; i++){
    for (let j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0) continue label;
    }
    alert(i);
}