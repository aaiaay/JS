function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите a', ''),
        this.b = +prompt('Введите b', '')
    };
    
    this.sum = function() {
        return this.a + this.b
    };
    
    this.mul = function() {
        return this.a * this.b
    };
}

let new_calculator = new Calculator();
new_calculator.read();

alert("Sum=" + new_calculator.sum());
alert("Mul=" + new_calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let a = +prompt('Введите a', '');
        this.value += a;
      };
}

let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 