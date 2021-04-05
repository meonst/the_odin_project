const palindromes = function(string) {
    string = string.toLowerCase().replace(/[^A-Za-z]/g, "")
    if (string.split("").reverse().join("") == string) {
        return true
    } else {
        return false
    }
    

}

module.exports = palindromes
