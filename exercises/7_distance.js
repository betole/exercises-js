import {expect} from 'chai'

// 1 Complete the function to return the result of the conversion of miles to kilometers.
// 2 Handle both types of scenarios:
//  - Happy paths: both parameters are passed and valid, or only 'miles' is passed and valid.
//  - Negative scenarios: 'calculateRoundTrip' is invalid and/or 'miles' is passed and valid.
//    |-> How can we stop execution and let the user know they did something wrong so they can fix it?

// Error messages to be used in milesToKm()
const milesError = '"miles" parameter is incorrect or missing!';
const roundTripError = '"calculateRoundTrip" parameter is invalid!'

function milesToKm(miles, calculateRoundTrip = false) {
    // Check first if 'miles' param is actually a number and is positive.
    if (typeof miles == ___ && miles >= 0) {
        //Then check the second param. It should be a valid boolean. 
        if (___) {
            // We are now on the happy path scenario, and we can return a value.
            // Calculate how many kilometers are in a mile.
            const kilometers = miles * ___;
            //If second param is true, convert the kilometer distance to round trip.
            if (calculateRoundTrip === true) {
                kilometers = kilometers * ___;
            }
            return kilometers;
        // If its not a boolean, halt execution. What can we use to tell the user they made a mistake?
        } else {
            throw ___;
        }
    // Same as before, make sure to tell the user they made an error. What message should be specified?
    } else {
        ___;
    }
}

// Tests

describe('milesToKm', function() {

    [
        {
            title: 'With Round Trip',
            miles: 3,
            isRoundTrip: true,
            result: 9.6
        },
        {
            title: 'No Round Trip',
            miles: 15,
            isRoundTrip: false,
            result: 24
        },
        {
            title: 'Distance is 0 - should not throw',
            miles: 0,
            isRoundTrip: true,
            result: 0
        },
        ,
        {
            title: 'Missing calculateRoundTrip param - should not throw (default is false)',
            miles: 10,
            result: 16
        },
    ].forEach(test => {
        it(test.title, function() {
            expect(milesToKm(test.miles, test.isRoundTrip)).to.be.closeTo(test.result, 0.001);
        });
    });

    [
        {
            title: 'Invalid calculateRoundTrip param - should throw roundTripError',
            miles: 13,
            isRoundTrip: 'verdadero',
            error: roundTripError

        },
        {
            title: 'Missing both params - should throw milesError (because it is evaluated first)',
            error: milesError
        }
    ].forEach(test => {
        it(test.title, function() {
            expect(() => milesToKm(test.miles, test.isRoundTrip)).to.throw(test.error);
        });
    });
});
