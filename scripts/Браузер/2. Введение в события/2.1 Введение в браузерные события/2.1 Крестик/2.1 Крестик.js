let panes = document.getElementsByClassName('pane');
let button = '<button class="remove-button">[x]</button>';

// почему-то не получилось добавить через insert adjacent element O_o
for (let pane of panes){
    pane.insertAdjacentHTML("afterbegin", button);
    pane.firstChild.addEventListener('click', function() {
        pane.remove();
    })
}