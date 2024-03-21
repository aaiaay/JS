let date = new Date(2012, 1, 20, 3, 12); 
console.log(date);

function getWeekDay(date) {
    weekDay = date.getDay();
    switch (weekDay) {
        case 0:
            return 'ВС';
        case 1:
            return 'ПН';
        case 2:
            return 'ВТ'
        case 3:
            return 'СР'
        case 4:
            return 'ЧТ'
        case 5:
            return 'ПТ'
        case 6:
            return 'СБ'
    }
}

// День недели в европейской нумерации
function getLocalDay(date) {
    weekDay = date.getDay();
    return (weekDay == 0? 7 : weekDay)
}

// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
    let copy = new Date(date)
    let prevDate = new Date(copy.setDate(copy.getDate() - days));
    return prevDate.getDate();
}

// Последнее число месяца?
function getLastDayOfMonth(year, month) {

    if (mouth == 1) {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
            return 29;
        else return 28;
    }

    if (month % 2 == 0) return 31;
    else return 30;
}

/* Лучшее решение задачи выше
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
} */

// Сколько сегодня прошло секунд?
function getSecondsToday() {
    let timeNow = new Date();
    let date = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());

    return Math.round(timeNow - date / 1000); 
}

// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
    let timeNow = new Date();
    let date = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1);

    return Math.round(timeNow - date / 1000); 
}

// Форматирование относительной даты
function formatDate(date) {
    let timeNow = new Date();
    let diff = timeNow - date;

    if (diff < 1000) return 'прямо сейчас';
    if (diff < 1000*60) return diff/1000 + ' сек. назад';
    if (diff < 1000*60*60) return diff/1000/60 + ' мин. назад';

    let str = '';
    str += (('0' + date.getDate()).slice(-2)) + '.';
    str += (('0' + (date.getMonth()+1)).slice(-2)) + '.';
    str += (('0' + date.getFullYear()).slice(-2)) + ' ';
  
    str += (('0' + date.getHours()).slice(-2)) + ':';
    str += (('0' + date.getMinutes()).slice(-2));
    return str;
}   
