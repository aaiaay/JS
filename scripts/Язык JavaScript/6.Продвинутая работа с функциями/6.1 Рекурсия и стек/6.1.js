function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRec(n) {
    if (n == 1) return 1;
    return n + sumToRec(n - 1);
}

function sumToProg(n) {
    return n * (n + 1) / 2
}


function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1
}


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

// Вывод односвязного списка
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    let l = list;
  
    while (l) {
      alert(l.value);
      l = l.next;
    }
}

function printListRec(list) {
    alert(list.value);
    if (list.next) printListRec(list.next)
}

// Вывод односвязного списка в обратном порядке
function printList2(list) {
    let arr = [];
    let l = list;
  
    while (l) {
      arr.push(l.value);
      l = l.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert(arr[i]);
    }
}

function printListRec2(list) {
    if (list.next) printListRec2(list.next);
    alert(list.value)
}