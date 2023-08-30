import {expect} from 'chai'

//Fill the blanks in these 2 functions to get the correct string representation of the arithmetic sum of two numbers

/**
 * @returns A string representation of the number
 * @param {*} number The number to convert to string.
 * 
 * Depending on the number sign (+/-) it will append parenthesis to the number or not.
 */
function getNumberAsString(number) {
    const numberAsString = ___ ? `${number}` : ___ ;
    return numberAsString;
}

/**
 * @returns A string representation of the arithmetic sum of two numbers
 * 
 * Uses getNumberAsString() to get the string representation of each individual number
 * @param {*} a
 * @param {*} b
 */
function sumNumbers(a, b) {
    const string = getNumberAsString(a) + ___ + getNumberAsString(b) + ' = ' + ___;
    return string;
}

//Tests

describe('sumNumbers', function() {
    [
        {
            a: 3,
            b: 2,
            string: '3 + 2 = 5'
        },
        {
            a: 7,
            b: -1,
            string: '7 + (-1) = 6'
        },
        {
            a: 18,
            b: 0,
            string: '18 + 0 = 18'
        },
        {
            a: -7,
            b: 6,
            string: '(-7) + 6 = -1'
        },
    ].forEach(fixture => {
        it(`Scenario -> A: ${fixture.a} | B: ${fixture.b}`, function() {
            expect(sumNumbers(fixture.a, fixture.b)).to.equal(fixture.string);
        });
    });
})
