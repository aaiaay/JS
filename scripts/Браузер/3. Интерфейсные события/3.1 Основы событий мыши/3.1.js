let ul = document.getElementById('ul');
let lis = ul.querySelectorAll('li');

ul.onclick = function(event) {
    let currElem = event.target;
    console.log(currElem);

    if (!(event.ctrlKey)) {
        for (let li of lis) {
            li.classList.remove('selected')
        }
    }
    currElem.classList.add('selected');
}

