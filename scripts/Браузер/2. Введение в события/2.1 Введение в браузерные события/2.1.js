
//Задача про подвинуть мячик при клике
field.onclick = function (event) {
    let ball = document.getElementById('ball');

    let coords = field.getBoundingClientRect();
    let left = event.clientX - coords.left - field.clientLeft - ball.clientWidth / 2;
    let top = event.clientY - coords.top - field.clientTop - ball.clientHeight / 2;
    
    if (left < 0) left = 0;
    if (top < 0) top = 0;

    if (left + ball.clientWidth > field.clientWidth) {
        left = field.clientWidth - ball.clientWidth;
    }

    if (top + ball.clientHeight > field.clientHeight) {
        top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = left +'px';
    ball.style.top = top+ 'px';
}


hider.addEventListener("click", (() => { text.innerHTML = ''}));

hider.addEventListener("click", (() => { hider.style.display = "none" }));

