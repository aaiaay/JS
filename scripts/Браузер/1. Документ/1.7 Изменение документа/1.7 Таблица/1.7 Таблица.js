let table = document.getElementById('table');

let sorted = Array.from(table.rows).slice(1).sort((a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);

table.querySelector("tbody").append(...sorted);