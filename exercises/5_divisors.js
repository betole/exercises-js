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
    it('should handle positive number with several results', function() {
        expect(getDivisors(10)).to.equal([1,2,5,10]);
    });

    it('should handle positive number with one result', function() {
        expect(getDivisors(1)).to.equal([1]);
    });
    
    it('should return empty array for zero', function() {
        expect(getDivisors(0)).to.equal([]);
    });
    
    it('should return empty array for negative numbers', function() {
        expect(getDivisors(-13)).to.equal([]);
    });
})

