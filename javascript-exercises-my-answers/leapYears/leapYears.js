const leapYears = function(given_year) {
    if (given_year % 400 == 0) {
        return true;
    }
    else if (given_year % 100 == 0) {
        return false;
    }
    else if (given_year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
    
}

module.exports = leapYears
