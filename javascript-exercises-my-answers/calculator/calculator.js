function add (a, b) {
    return (a + b);
	
}

function subtract (a, b) {
    return (a - b);
	
}

function sum (array) {
    let answer = 0;
    for (key in array) {
        answer += array[key];
    }
    
    return answer;
	
}

function multiply (array) {
    let answer = 1;
    for (key in array) {
        answer *= array[key];
    }
	return answer;
}

function power(a, b) {
	
    return (a ** b);
}

function factorial(a) {
    answer = 1;
    for (i = 2; i <= a; i++) {
        answer *= i;
    }
    return answer;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}