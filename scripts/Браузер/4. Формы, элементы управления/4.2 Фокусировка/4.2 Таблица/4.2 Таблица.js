
let table = document.getElementById('bagua-table');
let td = {
    old_elem: null, new_elem: null
};
let onlyOneCheck = true; // если тру - то ничего не редактируется

table.onclick = function (event) {

    let currElem = event.target;

    if (currElem.tagName == 'BUTTON') { 
        buttonsclick(currElem, td); //текущий элемент - кнопка
        return; 
    }
    else {
        currElem = currElem.closest('td');
        if (!onlyOneCheck) return;
        onlyOneCheck = !onlyOneCheck;
    }
    if (!table.contains(currElem)) return;

    let textarea = document.createElement('textarea');
    textarea.value = currElem.innerHTML;
    textarea.style.width = currElem.clientWidth + 'px';
    textarea.style.height = currElem.clientHeight + 'px';
    textarea.className = "textarea";

    td.old_elem = currElem;
    currElem.replaceWith(textarea);
    
    let div = document.createElement('div');
    let okBtn = document.createElement('button');
    let cancelBtn = document.createElement('button');

    okBtn.innerHTML = 'OK';
    okBtn.className = "okBtn";
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.className = 'cancelBtn';

    div.insertAdjacentElement('afterbegin', okBtn);
    div.insertAdjacentElement('beforeend', cancelBtn);

    div.style.position = 'absolute';
    div.id = 'buttons';

    textarea.insertAdjacentElement('afterend', div);
    
    td.new_elem = textarea;
    td.data = textarea.innerHTML;

    function buttonsclick(button, td) {
        if (button.className == 'okBtn') 
        {
            console.log('Это кнопка ок!!!');
            td.old_elem.innerHTML = td.new_elem.value;
            td.new_elem.replaceWith(td.old_elem);
        }
        if (button.className == 'cancelBtn') {
            console.log('Это кнопка cancel!!!');
            td.new_elem.replaceWith(td.old_elem);
        } 
        let buttons = document.getElementById('buttons');
        buttons.remove();
        onlyOneCheck = !onlyOneCheck;
    }
};
