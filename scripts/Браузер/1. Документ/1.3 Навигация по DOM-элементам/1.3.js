console.log(document.body.firstElementChild);
console.log(document.body.children[2]);
console.log(document.body.lastElementChild.lastElementChild);

let table = document.body.children[1];

for (let i = 0; i < 5; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}
