// Галерея картинок 
thumbs.onclick = function(event) {
    let currElem = event.target.closest('a');
    
    if (!(currElem)) return;

    largeImg.src = currElem.href;
    largeImg.alt = currElem.title;
    event.preventDefault();
}


ul.onclick = function(event) {
    let currElem = event.target;
    
    console.log(currElem);
    currElem.classList.add('selected');
    let otherElements = document.querySelectorAll('ul > li');

    if (!event.ctrlKey){
        for (let elem of otherElements){
            if (elem != currElem) elem.classList.remove('selected');
        }
    }

    ul.onmousedown = function() {
        return false;
      };
}
