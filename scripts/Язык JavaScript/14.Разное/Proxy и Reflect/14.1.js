let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop) {
        if (prop in target) {
          return target[prop];
        } else {
            return array[array.length + +prop]; // значение по умолчанию
        }
      }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      get(target, prop) {
          if (prop in target) {
            return target[prop];
          } else {
            throw new Error ("Такого свойства не существует");
          }}
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует

