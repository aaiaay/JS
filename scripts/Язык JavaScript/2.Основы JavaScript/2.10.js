let p = prompt("Какое официальное название javascript?",'');

if (p == "ECMAScript") {
    alert("Верно");
}
else {
    alert("Не знаете? ECMAScript!")
}

let num = prompt("Введите число",'');

if (num > 0) {
    alert(1);
}
else if (num < 0) {
    alert(-1);
}
else {
    alert(0);
}

let result;

result = (a + b < 4)? 'Мало' :'Много';

let message = (login == 'Сотрудник')?
  'Привет':
(login == 'Директор')?
  'Здравствуйте':
(login == '')?
  message = 'Нет логина': '';