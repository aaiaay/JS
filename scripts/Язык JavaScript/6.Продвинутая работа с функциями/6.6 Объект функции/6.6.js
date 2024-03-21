function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
    counter.decrease = () => count--;
  
    return counter;
}
  
function sum(a) {
    let sum = a;
  
    function func(b) {
      sum += b;
      return f;
    }
  
    func.toString = function() {
      return sum;
    }; //?
  
    return func;
}
  