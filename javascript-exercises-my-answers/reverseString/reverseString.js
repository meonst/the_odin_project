const reverseString = function(string_to_reverse) {
    reversed_string = ""
    for (i = string_to_reverse.length - 1; i >= 0 ; i--) {
        reversed_string += string_to_reverse[i];
    }
    return reversed_string;
}

module.exports = reverseString
