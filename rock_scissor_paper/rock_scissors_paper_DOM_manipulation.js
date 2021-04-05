function computer_play() {
    let determine_play = Math.floor(Math.random() * 3);
    if (determine_play === 0) {
        return "rock";
    }
    else if (determine_play === 1) {
        return "scissors";
    }
    else if (determine_play === 2) {
        return "paper"
    }
}
function play_round(player_selection, computer_selection) {
    if (player_score == 5 || computer_score == 5) {
        return null;
    }
    if (player_selection == computer_selection) {
        return "Draw";
    }
    else if ((player_selection == "scissors" && computer_selection == "rock") ||
        (player_selection == "rock" && computer_selection == "paper") ||
        (player_selection == "paper" && computer_selection == "scissors")) {
        computer_score += 1
        return `You Lose! ${computer_selection} beats ${player_selection}`;
    }
    else if ((computer_selection == "scissors" && player_selection == "rock") ||
        (computer_selection == "rock" && player_selection == "paper") ||
        (computer_selection == "paper" && player_selection == "scissors")) {
        player_score += 1
        return `You Win! ${player_selection} beats ${computer_selection}`;
    }
}
let player_score = 0;
let computer_score = 0;
function game_play(player_play) {
    const div_game_score = document.getElementById("game_score");
    const div_game_process = document.getElementById("game_process");
    div_game_process.setAttribute("style", "white-space: pre;")
    single_round = play_round(player_play, computer_play());
    if (single_round != null) {
        div_game_process.textContent += "\r\n" + single_round;
        div_game_score.textContent = `${ player_score} : ${ computer_score }`
        
        if (player_score == 5) {
            div_game_process.textContent += "\r\nPlayer is the winner";
        }
        else if (computer_score == 5) {
            div_game_process.textContent += "\r\nComputer is the winner";
        }
    }
    return null
}
function make_playing_buttons() {
    const div_input_buttons = document.getElementById("input_buttons");
    const moves = ["Rock", "Scissors", "Paper"];
    var playing_buttons;
    for (i = 0; i < 3; i++) {
        playing_buttons = document.createElement("button");
        playing_buttons.setAttribute("id", `${ moves[i] }`);
        playing_buttons.classList.toggle("button_playing");
        playing_buttons.textContent = `${ moves[i] }`;
        if (moves[i] == "Rock") {
            playing_buttons.addEventListener("click", () => game_play("rock"));
        }
        else if (moves[i] == "Scissors") {
            playing_buttons.addEventListener("click", () => game_play("scissors"));
        }
        else if (moves[i] == "Paper") {
            playing_buttons.addEventListener("click", () => game_play("paper"));
        }
        
        div_input_buttons.appendChild(playing_buttons);
    }
}
make_playing_buttons()