let calculator = {
    read () {
      this.a = +prompt('Введите a', ''),
      this.b = +prompt('Введите b', '')
    },
  
    sum () {
      return this.a + this.b
    },
  
    mul() {
      return this.a * this.b
    },
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());

  
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert(this.step);
      return this;
    }
};
