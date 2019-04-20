const should = require('should')
const max = require('../script/max')

describe('#max_test', () => {
    it('should return the maximum in array', done => {
        const input = [1, 10, 100, 1000];
        const result = max(input);

        result.should.equal(1000);
    });

    it('should return undefined when array is empty', done => {
        const input = [];
        const result = max(input);

        (result === undefined).should.be.true;
    });
});
