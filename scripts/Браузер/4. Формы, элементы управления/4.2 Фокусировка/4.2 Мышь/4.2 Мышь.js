let mouse = document.getElementById('mouse');
mouse.tabIndex = 1;

mouse.addEventListener('click', mouseMove);

function mouseMove() {
    console.log("На мышь кликнули!!!")
    mouse.addEventListener('keydown', function (event) {
        let coords = mouse.getBoundingClientRect();
        console.log (coords.top);
        let key = event.code;
        console.log("Нажата кнопка: ", key);
        switch (key) {
            case 'ArrowUp': 
                up(); 
                break;
            case 'ArrowDown': 
                down();
                break;
            case 'ArrowLeft': 
                left();
                break;
            case 'ArrowRight': 
                right();
                break;
        }
        function up() {
            console.log('Мышь должна ползти вверх');
            if (coords.top - mouse.clientHeight < 0 ) return;
            else mouse.style.top = coords.top - mouse.clientHeight + 'px';
        }

        function down() {
            console.log('Мышь должна ползти вниз');
            mouse.style.top = coords.bottom + 'px';
        }

        function left() {
            console.log('Мышь должна ползти влево')
            if (coords.left - mouse.clientWidth < 0) return;
            else mouse.style.left = coords.left - mouse.clientWidth + 'px';
        }

        function right() {
            console.log('Мышь должна ползти вправо');
            mouse.style.left = coords.right + 'px'
        }
    })
}