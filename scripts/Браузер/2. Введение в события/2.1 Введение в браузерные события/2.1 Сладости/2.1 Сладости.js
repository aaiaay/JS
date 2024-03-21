let list = document.getElementById('list');
let title = list.querySelector('.title');

title.onclick = function() {
    list.classList.toggle('open');
}