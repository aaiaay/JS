let button = document.getElementById('button');
let modalWindow = document.getElementById('prompt-form-container');
modalWindow.style.display = 'none';

button.addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert(value);
      });
});


function showPrompt (html, callback) {
    modalWindow.style.display = 'block';

    let message = document.getElementById('prompt-message');
    message.innerHTML = html;

    let form = modalWindow.querySelector('form');
    let formkeys = form.querySelectorAll('input');
    let k = 0;

    console.log (formkeys);

    formkeys[k].focus();

    form.onsubmit = function () {
        callback(formkeys[k].value);
    }

    let cancelBtn = form.querySelector('[name = "cancel"]');
    console.log(cancelBtn);

    cancelBtn.onclick = cancel;

    function cancel () {
        callback(null);
        modalWindow.style.display = 'none';
    }

    let pressed = new Set();
    form.onkeydown = function (event) {
        if (event.code == 'Escape') { 
            cancel();
            return;
        }
        pressed.add(event.key);
        if (pressed.has('Tab')) ChangeFocus(event);
    }

    form.onkeyup = function () {
        pressed.clear();
    }

    function ChangeFocus(event) {
        event.preventDefault();
        if (pressed.has('Shift')){
            if (k == 0) k = 2
            else k--;
        }
        else {
            if (k == 2) k = 0
            else k++;
        }
        formkeys[k].focus();
    }
}