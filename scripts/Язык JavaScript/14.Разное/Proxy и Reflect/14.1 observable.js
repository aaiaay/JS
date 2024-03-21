// Создаем функцию makeObservable, в которую передаем объект target, и она возвращает нам такой же объект, но у котого есть метод OBSERVE, который вызывает обработчик при каждом изменении свойств

function makeObservable(target) {

  target.handlers = [];

  target.observe = function(handler) {
    this.handlers.push(handler);
  };

  return new Proxy(target, {
    set(target, prop, val) {
      let result = target[prop] = val;
      target.handlers.forEach(handler => handler(prop, val));
      
      return result;
    }
  });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";
user.surname = "Jackson"