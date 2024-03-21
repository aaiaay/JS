document.onmousedown = function(event) {

  // смотрим чтоб элемент был драгабл
    let currElem = event.target;
    if (!(currElem.classList.contains("draggable"))) return;
    console.log(currElem);

  // отменяем шнягу по умолчанию
    currElem.ondragstart = function() {
        return false;
    };
    event.preventDefault();

    shiftX = event.clientX - currElem.getBoundingClientRect().left;
    shiftY = event.clientY - currElem.getBoundingClientRect().top;

    currElem.style.position = 'fixed';
    moveAt(event.clientX, event.clientY);

    function moveAt(clientX, clientY) {
        let left = clientX - shiftX;
        let top = clientY - shiftY;

        let bottom = top + currElem.offsetHeight;

        if (bottom > document.documentElement.clientHeight) {
          let documentBottom = document.documentElement.getBoundingClientRect().bottom;
          let scroll = Math.min(documentBottom - bottom, 10);
          if (scroll < 0) scroll = 0;

          window.scrollBy(0, scroll);
          top = Math.min(top, document.documentElement.clientHeight - currElem.offsetHeight);
        }

        if (top < 0) {
          let scroll = Math.min(-top, 10);
          if (scroll < 0) scroll = 0; 
          window.scrollBy(0, -scroll);
          top = Math.max(top, 0);
        }

        if (left < 0) left = 0;
        if (left > document.documentElement.clientWidth - currElem.offsetWidth) {
          left = document.documentElement.clientWidth - currElem.offsetWidth;
        }

        currElem.style.left = left + 'px';
        currElem.style.top = top + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.clientX, event.clientY);
    }

    document.addEventListener('mousemove', onMouseMove);

    currElem.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      currElem.onmouseup = null;
      currElem.style.position = 'absolute'
    };

};