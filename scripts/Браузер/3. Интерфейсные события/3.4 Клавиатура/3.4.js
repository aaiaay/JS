
function runOnKeys(func, ...keyCodes) {

    let pressedKeys = new Set();

    document.addEventListener ('keydown', function (event) {
        pressedKeys.add(event.code);

        for (let code of keyCodes)
        {
            if (!(pressedKeys.has(code))) return;
        }

        pressedKeys.clear();
        func();
    })
}

document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });


runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
  );
