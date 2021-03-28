const ftoc = function(given_fahrenheit) {
    return Math.round(((given_fahrenheit - 32) * 5 / 9) * 10) / 10
}

const ctof = function(given_celcius) {
    return Math.round(((given_celcius* 1.8) + 32) * 10) / 10
}

module.exports = {
    ftoc,
    ctof
}
