let view = document.getElementById('view');

view.onclick = function (event) {

    let textarea = document.createElement('textarea');
    textarea.value = this.innerHTML;
    textarea.className = "edit";

    textarea.onkeydown = function(event) {
        if (event.key == 'Enter') 
          this.blur();
    };

    textarea.onblur = function () {
        view.innerHTML = textarea.value;
        textarea.replaceWith(view);
    }

    view.replaceWith(textarea);
    textarea.focus();

    console.log(this);
}



