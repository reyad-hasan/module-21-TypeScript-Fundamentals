// function add(num1, num2) {
//     const total = num1 + num2;
//     return total;
// }


/**
 * parameters
 * return
 * no return
 * 
*/

function add(num1: number, num2: number): number {
    const total = num1 + num2;
    return total;
}

const result: number = add(5, 56);


function calculate(numbers: number[], tax: number, accountant: string): boolean {
    return false;
}

calculate([23, 45, 67], 0.2, 'Jonayed');






function add2(num1: number, num2: number): number[] {
    const total = num1 + num2;
    return [total];
}

function add3(num1: number, num2: number): { total?: number } {
    const total = num1 + num2;
    return { total: total };
}

function add4(num1: number, num2: number): [string, number] {
    const total = num1 + num2;
    return ['total', total];
}











function doubleOrHalf(num: number, isDouble?: boolean): boolean {
    return false;
}