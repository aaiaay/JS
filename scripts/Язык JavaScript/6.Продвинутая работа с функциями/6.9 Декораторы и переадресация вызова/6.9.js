function spy(func) {
  function wrapper(...args) {
      wrapper.calls.push (args);
      return func.call(this, ...args);
  }

  wrapper.calls = [];
  return wrapper;
}

function delay(f, ms){
  return function() {
      setTimeout(() => f.call(this, ...arguments), ms);
  }
}

function debounce(f, ms) {
  let time;
  return function() {
      clearTimeout(time);
      time = setTimeout(() => f.call(this, ...arguments), ms);
  }
}

function throttle (f, ms) { 

  let check = false;
  let _args, _this;

  function wrapper (){
    if (check) {
      _args = arguments;
      _this = this;
      return;
  }

  f.call(this, ...arguments);
  check = true; 

  setTimeout(timeout, ms);

  function timeout () {
      check = false;
      wrapper.call(_this, ..._args);
      _args = _this = null;
    }
  }
  return wrapper;
}
