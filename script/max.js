module.exports = function max(array) {
    if(array.length === 0) {
        return 'Input is an empty array';
    }

    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        max = array[i] > max ? array[i] : max;
    }

    return max;
};
