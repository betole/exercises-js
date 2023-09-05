import {expect} from 'chai'

// This code exposes two functions:
// A. one to order from lower to higher (orderAscending), 
// B. the other for the opposite (orderDescending).
//
// 1. Fill the gaps in orderNumbersAscending to work as expected.
// 2. How can orderDescending make use of the existing orderNumbersAscending to give the result in opposite order?

function orderAscending(numbers) {
    //First, declare empty arrays that will be filled with information
    let result = [];
    let positions = [];
    
    //Iterate over each number, and decide their overall position in the array based on their arithmetic value.
    for (let i = 0; ___; i++) {

        //Create a filtered array with the rest of the numbers to use later.
        const number = numbers[i];
        const otherNumbers = numbers.filter(x => x != ___);

        //Then iterate over this filtered array, comparing the current number with the rest to calculate the position.
        let position = 0;
        for (let x = 0; x < ___.length; x++) {
            if (number ___ otherNumbers[x]) {
                ___;
            }
        }
        positions.push(position);
    }

    //Now iterate over the defined positions, to get the ordered number based on the position value.
    for (let y = ___; y < ___.length; ___) {
        const orderedIndex = positions.findIndex(position => position === y);
        const orderedNumber = numbers[orderedIndex];
        result.push(orderedNumber);
    }

    return result;
}

function orderDescending(numbers) {
    let result = [];
    const orderedNumbersAscending = orderAscending(numbers);
    //Your code goes here
    return result;
}

describe('Order Numbers', function() {
    [
        {
            title: 'Order several positive numbers',
            numbers: [9, 3, 15],
            ascending: [3, 9, 15],
            descending: [15, 9, 3]
        },
        {
            title: 'Return same single number',
            numbers: [13],
            ascending: [13],
            descending: [13]
        },
        {
            title: 'Order several mixed numbers',
            numbers: [2, -7, 0, 32],
            ascending: [-7, 0, 2, 32],
            descending: [32, 2, 0, -7]
        }
    ].forEach(test => {
        it(test.title + ' - Ascending Order', function() {
            expect(orderAscending(test.numbers)).to.deep.equal(test.ascending);
        });

        it(test.title + '- Descending Order', function() {
            expect(orderDescending(test.numbers)).to.deep.equal(test.descending);
        });
    });
});
