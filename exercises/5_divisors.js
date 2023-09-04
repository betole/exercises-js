import {expect} from 'chai'

//This code is supposed to take two numbers, divide one by another so that the result is equal to 1, 
// and display the result on the screen. Unfortunately, there is an error in the code. 
// Find the error and fix it, so that the output is correct.

function getDivisors(number) {
    let result = [];
    //Your code goes here
    return result;
}

describe('getDivisors', function() {
    [
        {
            title: 'should handle positive number with several results',
            number: 10,
            checker: [1,2,5,10]
        },
        {
            title: 'should handle positive number with one result',
            number: 1,
            checker: [1]
        },
        {
            title: 'should return empty array for zero',
            number: 0,
            checker: []
        },
        {
            title: 'should return empty array for negative numbers',
            number: -13,
            checker: []
        }
    ].forEach(test => {
        it(test.title, function() {
            expect(getDivisors(test.number)).to.equal(test.checker);
        });
    });
});

