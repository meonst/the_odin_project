const removeFromArray = function() {
    let given_array = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        for (j = 0; j < given_array.length; j++) {
            if (given_array[j] === arguments[i]) {
                given_array.splice(j, 1);
            }
        }
    }
    return given_array;
}

module.exports = removeFromArray
