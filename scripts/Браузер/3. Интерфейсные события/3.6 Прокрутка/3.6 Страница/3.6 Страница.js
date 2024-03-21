
window.onscroll = function() {

    let windowBottom = document.documentElement.getBoundingClientRect().bottom;
    let bottom = document.documentElement.clientHeight + 100;

    if (windowBottom < bottom) { 
        createDate(); 
    }
}

// заполняем начальное пустое пространство датой
function loadPage() {
    let h1 = document.getElementById('h1');

    let elementBottom = h1.getBoundingClientRect().bottom;
    let bottom = document.documentElement.clientHeight; 

    while (elementBottom < bottom) {
        let date = createDate();
        elementBottom = date.getBoundingClientRect().bottom;
    }
}

function createDate() {
    let date = document.createElement('p');
    date.innerHTML = new Date();;
    document.body.append(date);
    return date;
}

loadPage();