// Устанавливаем изначальные значения часов
let now = new Date();
let hour = document.createElement('span');
hour.className = 'hour';

let minute = document.createElement('span');
minute.className = 'minute';

let second = document.createElement('span');
second.className = 'hour';

hour.innerHTML = now.getHours();
minute.innerHTML = now.getMinutes();
second.innerHTML = now.getSeconds();

document.body.append(hour);
document.body.append(':');
document.body.append(minute);
document.body.append(':');
document.body.append(second);

let interval;

// Ставим текущую дату
function getDate() {
    now = new Date();
    hour.innerHTML = now.getHours();
    minute.innerHTML = now.getMinutes();
    second.innerHTML = now.getSeconds();
}

function clockStart() {
    interval = setInterval(getDate, 1000);
}

function clockStop() {
    if (interval) clearInterval(interval);
}
