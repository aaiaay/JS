//Вывести координаты углов

console.log(field.getBoundingClientRect().left + ' ' + field.getBoundingClientRect().top);
console.log(field.getBoundingClientRect().right + ' ' + field.getBoundingClientRect().bottom);
console.log(field.getBoundingClientRect().left + field.clientTop + ' ' + (field.getBoundingClientRect().top + field.clientLeft))
console.log(field.getBoundingClientRect().right - field.clientTop + ' ' + (field.getBoundingClientRect().bottom - field.clientTop));
  
// // Все три задачи про заметку
// function positionAt(anchor, position, elem) {
//     let coords = anchor.getBoundingClientRect();
  
//     if (position == 'bottom') {
//       elem.style.left = coords.left + "px";
//       elem.style.top = coords.bottom + "px";
//     }
//     else if (position == 'top-out') {
//       elem.style.left = coords.left + "px";
//       elem.style.top = coords.top -  elem.offsetHeight + "px";
//     }
//     else if (position == 'right') {
//       elem.style.left = coords.right + "px";
//       elem.style.top = coords.top + "px";
//     }
//     else if (position == 'top-in') {
//       elem.style.left = coords.left + "px";
//       elem.style.top = coords.top + "px";
//     }
// }

  