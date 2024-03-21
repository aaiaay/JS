let prev = document.getElementById('arrow-prev');
let next = document.getElementById('arrow-next');

let ul = document.getElementById('list');
let lis = ul.querySelectorAll('li');

let start = 0;
let size = 3;

prev.addEventListener('click', () => {
    start += 130 * size;
    if (start > 0) start = 0;
    ul.style.marginLeft = start + 'px';
})

next.addEventListener('click', () => {
    start -= 130 * size;
    if (start < -130 * (lis.length - size)) start = -130 * (lis.length - size);
    ul.style.marginLeft = start + 'px';
})