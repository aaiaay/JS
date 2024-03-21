function isInteger(num) {
    return ((~~num) == num);
}

alert( isInteger(1) );
alert( isInteger(1.5) );
alert( isInteger(-0.5) );