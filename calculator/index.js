const body = document.getElementById("body")
const buttons_number = document.getElementsByClassName("button");
const panel = document.getElementById("panel")

Object.keys(buttons_number).forEach(key => {
    buttons_number[key].addEventListener("click", () => {
        seperate_input(buttons_number[key].textContent)
    })
})

let most_recent_input = "clear";
let sub_operand = "0";
let main_operand = "0";
let current_operation = null;
body.addEventListener("keydown", (event) => {
    keyboard_input(event["key"])
})

function keyboard_input(input_key) {
    switch(input_key) {
        case "Backspace":
            backspace();
            break;
        case "=":
        case "Enter":
            equal();
            break;
        case ".":
            decimal();
            break;
        case "+":
            operation("addition");
            break;
        case "-": 
            operation("subtraction");
            break;
        case "*": 
            operation("multiplication");
            break;
        case "/":
            operation("division");
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":          
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":           
            input_number(input_key);
            break;
    }   
}
function seperate_input(input_key) {
    switch(input_key) {
        case "DELETE":
            backspace();
            break;
        case "CLEAR":
            clear();
            break;
        case "=":
            equal();
            break;
        case ".":
            decimal();
            break;
        case "+":
            operation("addition");
            break;
        case "-": 
            operation("subtraction");
            break;
        case "×": 
            operation("multiplication");
            break;
        case "÷":
            operation("division");
            break;
        default:
            input_number(input_key);
            break;
    }   
}

function clear() {
    most_recent_input = "clear";
    sub_operand = "0";
    main_operand = "0";
    current_operation = null;
    display_on_panel(main_operand);
}
function display_on_panel(string) {
    panel.textContent = string;
}
function input_number(number_string) {
    if (most_recent_input == "number") {
        main_operand += number_string;//display this
    }
    else if (most_recent_input == "operator" || most_recent_input == "clear") {
        main_operand = number_string;//display this
    }
    display_on_panel(main_operand);
    console.log(main_operand);
    most_recent_input = "number";
    
}
operations = {
    "addition": function(a, b) {return String(parseInt(a) + parseInt(b))},
    "subtraction": function(a, b) {return String(parseInt(a) - parseInt(b))},
    "multiplication": function(a, b) {return String(parseInt(a) * parseInt(b))},
    "division": function(a, b) {return String(parseInt(a) / parseInt(b))},
}
function operation(operator) {
    if (most_recent_input == "operator") {
        sub_operand = main_operand;
        main_operand = "0";
        current_operation = operator;
    }
    if (current_operation != null) {
        sub_operand = operations[current_operation](sub_operand, main_operand)
        display_on_panel(sub_operand);
        main_operand = "0"
        current_operation = operator;
    } else if (current_operation == null) {
        sub_operand = main_operand;
        display_on_panel(sub_operand);
        main_operand = "0"
        current_operation = operator;
    }
    most_recent_input = "operator";
}
function backspace() {
    if (main_operand != "0") {
        main_operand = main_operand.slice(0, -1);
    }
    if (main_operand == "") {
        main_operand = "0";
    }
    display_on_panel(main_operand);
    most_recent_input = "number";
}
function equal() {
    if (current_operation != null && most_recent_input == "number") {
        main_operand = operations[current_operation](sub_operand, main_operand) // display this
        current_operation = null;
        most_recent_input = "number"
        display_on_panel(main_operand)
    } else {
        display_on_panel(main_operand)
        current_operation = null;
        most_recent_input = "number";
    }
}

function decimal() {
    if (!(main_operand.includes("."))) {
        main_operand += "."
    }
    display_on_panel(main_operand)
    most_recent_input = "number"
}


