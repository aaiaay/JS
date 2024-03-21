// Спрятать сообщение при нажатии на крестик
container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let div = event.target.closest('div');

    div.hidden = !div.hidden;
};

// Раскрыть дерево
tree.onclick = function(event) {
    let currElem = event.target;
    if (!(currElem.tagName == 'LI') || currElem.firstElementChild == null) return;

    let nextElem = currElem.firstElementChild;
    nextElem.hidden = !nextElem.hidden;
}

// Сортировка таблицы по столбцам
grid.onclick = function(event) {
    let currElem = event.target;
    if (!(currElem.tagName == 'TH')) return;
    
    sortcols(currElem.cellIndex, currElem.dataset.type);
}
    
function sortcols(i, type){
    let table = grid.querySelector('tbody');
    let rows = Array.from(table.rows);
    
    let compare = function(a, b){
        if (type == 'number') return a.cells[i].innerHTML - b.cells[i].innerHTML;
        if (type == 'string') return a.cells[i].innerHTML > b.cells[i].innerHTML ? 1 : -1;
    }
    
    rows.sort(compare);
    table.append(...rows);
}

