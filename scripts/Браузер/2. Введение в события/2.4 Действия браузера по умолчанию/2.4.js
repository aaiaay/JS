// Вы уверены что хотите перейти по ссылке??? 
contents.onclick = function(event) {
    let currElem = event.target;
    let isConf;

    function handleCLick(){
        isConf = confirm('Вы точно хотите перейти по ссылке???');
        if (!isConf) return false;
    }

    let a = currElem.closest('a');

    if (a) return handleCLick();
}

