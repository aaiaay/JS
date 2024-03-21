function printNumbersSetInterval(from, to) {
    let temp = from;
  
    let timerId = setInterval( function() {
        alert(temp);
        if (temp == to) clearInterval(timerId);
        temp++;
    }, 1000);
}
  
function printNumbersSetTimeout(from, to) {
    let temp = from;

    setTimeout(function func() {
        alert(temp);
        if (temp < to) setTimeout(func, 1000);
         temp++;
    }, 1000);
}