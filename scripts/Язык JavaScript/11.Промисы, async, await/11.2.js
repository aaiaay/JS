function delay(ms) {
    return promise = new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));


function go() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
}

function showCircle(cx, cy, radius) {

    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise (function(resolve, reject) {
        setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div);
        });
        }, 0);
    });
    
}