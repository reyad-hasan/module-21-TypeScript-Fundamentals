"use strict";
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);
function calculate(numbers, tax, accountant) {
    return true;
}
function add2(num1, num2) {
    const total = num1 + num2;
    return [total];
}
const result2 = add2(55, 45);
console.log(result2);
function add3(num1, num2) {
    const total = num1 + num2;
    return { total: total };
}
const result3 = add3(100, 200);
console.log(result3);
function add4(num1, num2) {
    const total = num1 + num2;
    return ['total', total];
}
const result4 = add4(15, 25);
console.log(result4);
