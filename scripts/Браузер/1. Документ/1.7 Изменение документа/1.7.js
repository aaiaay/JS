function clear(elem) { 
  elem.innerHTML = ''
}

let list = document.createElement('ul');
document.body.append(list);

while (true) {
   let str = prompt('Введите текст для элемента списка', '');
   if (str == '') break;

   let li = document.createElement('li');
   li.textContent = str;

   list.append(li);
}

// Создайте дерево из объекта 
let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};

function createValue(obj) {

    let li = '';
    let ul = '';

    for (let key in obj) {
      li += '<li>' + key + createValue(obj[key]) + '</li>';
    }
  
    if (li != '') {
      ul += '<ul>' + li + '</ul>';
    }
  
    return ul;
}
  
function createTree(container, data) {
    container.innerHTML = createValue(data);
}

let container = document.getElementById('container');
createTree(container, data);

// Выведите список потомков в дереве
let listElements = container.querySelectorAll('li');

for (let li of listElements) {
      let children = li.querySelectorAll('li').length;
      if (children == 0) continue;

      li.firstChild.data += ' [' + children + ']';
}

// Вставьте HTML в список
let liOne = document.getElementById('one');
liOne.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');