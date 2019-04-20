const should = require('should')
const min = require('../script/min')

describe('#min_test', () => {
    it('should return the minimum in array', done => {
        const input = [1, 10, 100, 1000];
        const result = min(input);

        result.should.equal(1);
    });

    it('should return undefined when array is empty', done => {
        const input = [];
        const result = min(input);

        (result === undefined).should.be.true;
    });
});

