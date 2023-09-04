import {expect} from 'chai'

//This code is supposed to compare numbers, and return an ordered collection, 
//   from lower to higher or vice versa dependening on the passed order.
//orderNumber2 should use a different way to order them, and the result of both should be the same

function orderNumbers1(numbers, order) {
    let result = [];
    //Your code goes here
    return result;
}

function orderNumbers2(numbers, order) {
    let result = [];
    //Your code goes here
    return result;
}

describe('orderNumbers', function() {
    const positiveNumbers = [9,3,15];

    [
        {
            title: 'Order several positive numbers - Ascending',
            numbers: positiveNumbers,
            checker: [3,9,15]
        },
        {
            title: 'Order several positive numbers - Descending',
            numbers: positiveNumbers,
            checker: [15,9,3]
        },
        {
            title: 'Return same single number',
            numbers: [13],
            checker: [13]
        },
        {
            title: 'Order several mixed numbers - Ascending',
            numbers: [2, -7, 0, 32],
            checker: [-7, 0, 2, 32]
        }
    ].forEach(test => {
        it(test.title + ' method 1', function() {
            expect(orderNumbers1(test.numbers)).to.equal(test.checker);
        });

        it(test.title + ' method 2', function() {
            expect(orderNumbers2(test.numbers)).to.equal(test.checker);
        });
    });
});

