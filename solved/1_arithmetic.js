import { expect } from 'chai';

it('Should equal the golden ratio', function() {
    //Refer to https://es.wikipedia.org/wiki/N%C3%BAmero_%C3%A1ureo or https://en.wikipedia.org/wiki/Golden_ratio
    const goldenRatio = (1 + Math.sqrt(5))/2;

    expect(goldenRatio).to.be.closeTo(1.618, 0.001);
}); 
