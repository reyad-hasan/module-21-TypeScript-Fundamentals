"use strict";
const unionType = (payAmount, taxt) => {
    if (typeof payAmount === 'string') {
        payAmount = parseFloat(payAmount);
    }
    return payAmount * taxt;
};
const result = unionType('10', 200);
console.log(result);
