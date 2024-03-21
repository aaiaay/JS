let age = 18;

// if (age >= 14 && age <= 90)

// if (!(age >= 14 && age <= 90))

// if (age < 14 || age > 90)

let login = prompt("Введите логин", '');

if (login === "Админ"){

    let password = prompt("Введите пароль", '');
    if (password == "Я главный"){
        alert("Здравствуйте!");
    }
    else if (password){
        alert("Неверный пароль");
    }
    else {
        alert("Отменено!");
    }
}
else if (login){
    alert("Я вас не знаю!");
}
else {
    alert("Отменено!");
};