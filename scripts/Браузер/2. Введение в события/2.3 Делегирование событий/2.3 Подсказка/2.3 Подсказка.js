// Подсказка 
document.onmouseover = function(event) {
    let currElem = event.target;

    if (!currElem.dataset.tooltip) return;

    // Создаем элемент с подсказкой
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = currElem.dataset.tooltip;
    document.body.append(tooltip);

    // Позиционируем подсказку 
    positionAt(currElem, tooltip)

    function positionAt(anchor, elem) {

        let coords = anchor.getBoundingClientRect();
        elem.style.left = coords.left + "px";
        
        if (coords.top - 5 > elem.offsetHeight) {
            elem.style.top = coords.top - elem.offsetHeight - 5 + "px";
        }
        else {
            elem.style.top = coords.bottom + 5 + "px";
        }
      }  
}

document.onmouseout = function (event) {
    let currElem = event.target;
    if (!currElem.dataset.tooltip) return;

    let tooltip = document.querySelector(".tooltip");
    tooltip.remove(); 
}