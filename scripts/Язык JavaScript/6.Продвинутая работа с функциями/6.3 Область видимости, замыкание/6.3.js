function sum(a) {
    return function(b) {
      return a + b;
    };
}

function inBetween(a, b) {
    return function(num) {
      return num >= a && num <= b;
    }
}

function inArray(arr) {
    return function(num) {
      return arr.includes(num);
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}