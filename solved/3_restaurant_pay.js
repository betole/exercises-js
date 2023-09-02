import {expect} from 'chai'

//Create a function to calculate how much do you have to pay in a restaurant. 
//It should take into account that you are bringing friends over (expressed in friendQty)
// but also when you go to dine alone.
//It should also factor in a tip to the waitress as 15% of the restaurant bill.
//The function should give the exact amount you have to pay, 
//  given you split the bill equally between you and your friends.
//Because this is money, the share should be rounded up to two decimals ($9.7265 -> $9.73)


function getFriendPayShare(bill, friendQty) {
    const finalBill = bill + (bill * 0.15) ;
    const payShare = finalBill/(friendQty + 1) ;
    const roundedPayShare = Math.round(payShare * 100)/100  ;
    return roundedPayShare;
}


//Tests

describe('getPerFriendPayAmount', function() {
    [
        {
            bill: 93.21,
            friendQty: 3,
            checker: 26.80
        },
        {
            bill: 172.21,
            friendQty: 8,
            checker: 22.00
        },
        {
            bill: 13.2,
            friendQty: 0,
            checker: 15.18
        },
    ].forEach(fixture => {
        it(`Scenario -> Bill: ${fixture.bill} | friendQty: ${fixture.friendQty}`, function() {
            expect(getFriendPayShare(fixture.bill, fixture.friendQty)).to.equal(fixture.checker);
        });
    });
});
