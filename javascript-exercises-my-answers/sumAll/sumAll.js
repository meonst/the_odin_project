const sumAll = function() {
    if (typeof arguments[0] != "number" || typeof arguments[1] != "number") {
        return "ERROR";
    }
    else if (arguments[0] < 0 || arguments[1] < 0) {
        return "ERROR";
    }
    else {
        let sum = 0;
        for (i = Math.min(arguments[0], arguments[1]); i <= Math.max(arguments[0], arguments[1]); i++) {
            sum += i
        }
        return sum;
        
    }
    

}

module.exports = sumAll
