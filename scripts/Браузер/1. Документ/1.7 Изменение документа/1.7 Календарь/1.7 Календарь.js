function getWeekDay(day) {
    switch (day) {
        case 0:
            return 'ПН';
        case 1:
            return 'ВТ';
        case 2:
            return 'СР'
        case 3:
            return 'ЧТ'
        case 4:
            return 'ПТ'
        case 5:
            return 'СБ'
        case 6:
            return 'ВС'
    }
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

let table = document.createElement('table');
document.body.append(table);

function generateTable(year, month) {

    // генерируем шапку таблицы
    for (let i = 0; i < 7; i++){
        let th = document.createElement('th');
        th.innerHTML = getWeekDay(i);
        table.appendChild(th);
    }

    // выравниваем стартовый день недели
    let date = new Date(year, month);
    let startDay = date.getDay();
    if (startDay != 0) startDay--
    else startDay = 6;

    // месяц начинается с первого числа
    let day = 1;

    // получаем последний день месяца - ограничение для календаря
    let maxDay = getLastDayOfMonth(year, month);

    for (let i = 0; i < 5; i++){
        let tr = document.createElement('tr');

        for (let j = 0; j < 7; j++){
            let td = document.createElement('td');
            
            if (day > 1 && day <= maxDay)
                td.innerHTML = day++;
            if (i == 0 && j == startDay)
                td.innerHTML = day++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function createCalendar(elem, year, month){
    generateTable(year, month);
    elem.append(table);
}

createCalendar(calendar, 2024, 1);