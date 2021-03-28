const repeatString = function(string_to_repeat, repeat_this_much) {
    if (repeat_this_much < 0) {
        return "ERROR";
    }
    else {
        let repeated_string = "";
        for (i = 0; i < repeat_this_much; i++) {
            repeated_string += string_to_repeat;
        }
        return repeated_string;
    }
}

module.exports = repeatString
