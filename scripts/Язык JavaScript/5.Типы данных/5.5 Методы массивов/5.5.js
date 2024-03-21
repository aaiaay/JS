// Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
    let arr = str.split('-');
    return (arr.map((item, index) => index == 0? item : item[0].toUpperCase()+item.slice(1))).join('');
}

// Фильтрация по диапазону 
function filterRange(arr, a, b) {
    return arr.filter((item) => (a <= item && item <= b));
}

// Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {   
        if (arr[i] < a || arr[i] > b){
          arr.splice(i, 1);
          i--;
        }
    }
}

// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

// Скопировать и отсортировать массив
function copySorted(arr){
    return arr.slice().sort();
}

// Создать расширяемый калькулятор
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '),

        a = +split[0],
        operation = split[1],
        b = +split[2]
    
        if (!this.methods[operation] || isNaN(a) || isNaN(b)) return NaN;

        return this.methods[operation](a, b);
      }
    
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
}

// Трансформировать в массив имён, Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

let usersMapped = users.map(item => ({fullname: item.name + ' ' + item.surname, id: item.id}));

// Отсортировать пользователей по возрасту
function sortByAge(users) {
    return users.sort((a,b) => a.age > b.age? 1 : -1);
}

// Перемешайте массив
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Получить средний возраст
function getAverageAge(users) {
    let result = users.reduce((sum, user) => sum + user.age, 0) / users.length;
    return result;
}

// Оставить уникальные элементы массива
function unique(arr) {
    let uniqueArr = [];
    for (let elem of arr) {
        if (!uniqueArr.includes(elem))
            uniqueArr.push(elem);
    }
    return uniqueArr;
}

// Создайте объект с ключами из массива
function groupById(arr) {
    let result = arr.reduce((user, value) => {user[value.id] = value; return user;}, {});
    return result;
}