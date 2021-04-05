const fibonacci = function(n) {
    n = parseInt(n)
    if (n < 1) {
        return "OOPS"
    } else {
        let fibonacci_array = [];
        fibonacci_array[1] = 1;
        fibonacci_array[2] = 1;
        for (i = 3; i <= n; i++) {
            fibonacci_array[i] = fibonacci_array[i - 1] + fibonacci_array[i - 2];
        }
        return fibonacci_array[n];
    }
    
}

module.exports = fibonacci
