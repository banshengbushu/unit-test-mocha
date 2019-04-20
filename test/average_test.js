const average = require('../script/average');

describe('#average', () => {
    it('should return the average number', done => {
        const input = [1, 2, 3, 4, 5];
        const result = average(input);

        result.should.equal(3);
        done();
    });

    it('should return 0 when array is empty', done => {
        const input = [];
        const result = average(input);

        result.should.equal(0);
        done();
    });
});