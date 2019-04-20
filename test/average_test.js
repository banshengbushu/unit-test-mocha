const should = require('should');
const average_test = require('../script/average');

    describe('#average_test', () => {
        it('should return the average_test of array', done => {
            const input = [[1, 2, 3, 4]];
            const expectResult = 2.5;
            const result = average_test(input);

            result.should.equal(expectResult);
        });

        it('should return NaN when array is empty', done => {
            const input = [[]];
            const result = average_test(input);

            isNaN(result).should.be.true;
        });
    });

