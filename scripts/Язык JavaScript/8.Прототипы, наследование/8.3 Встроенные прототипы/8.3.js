Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
}

function f() {
    alert("Hello!");
}
  
f.defer(1000);

Function.prototype.defer2 = function (ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
  }
}