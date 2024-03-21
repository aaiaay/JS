
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  // test it
  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top-out", "note top out");
  showNote(blockquote, "top-in", "note top in");
  showNote(blockquote, "right-out", "note right out");
  showNote(blockquote, "bottom-out", "note bottom out");
  showNote(blockquote, "bottom-in", "note bottom in");
  showNote(blockquote, "right-in", "note right in");


// Все три задачи про заметку
function positionAt(anchor, position, elem) {
    let coords = anchor.getBoundingClientRect();
  
    switch (position) {
        case 'bottom-out':
            elem.style.left = coords.left + "px";
            elem.style.top = coords.bottom + "px";
            break;
        case 'top-out':
            elem.style.left = coords.left + "px";
            elem.style.top = coords.top - elem.offsetHeight + "px";
            break;
        case 'right-out':
            elem.style.left = coords.right + "px";
            elem.style.top = coords.top + "px";
            break;
        case 'top-in':
            elem.style.left = coords.left + "px";
            elem.style.top = coords.top + "px";
            break;
        case 'bottom-in':
            elem.style.left = coords.left + "px";
            elem.style.top = coords.bottom - elem.offsetHeight + "px";
            break;
        case 'right-in':
            elem.style.left = coords.right - elem.offsetWidth+ "px";
            elem.style.top = coords.top + "px";
            break;
    }
}