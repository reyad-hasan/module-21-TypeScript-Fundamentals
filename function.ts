function add(num1: number, num2: number): number {
    const total = num1 + num2;
    return total;
}


const result: number = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);


function calculate(numbers: number[], tax: number, accountant?: string): boolean {
    return true;
}

function add2(num1: number, num2: number): number[] {
    const total = num1 + num2;
    return [total];
}
const result2: number[] = add2(55, 45);
console.log(result2);

function add3(num1: number, num2: number): { total?: number } {
    const total = num1 + num2;
    return { total: total };
}
const result3: { total?: number } = add3(100, 200);
console.log(result3);


function add4(num1: number, num2: number): [string, number] {
    const total = num1 + num2;
    return ['total', total];
}
const result4: [string, number] = add4(15, 25);
console.log(result4);