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
    if (player_selection == computer_selection) {
        return "Draw";
    }
    else if ((player_selection == "scissors" && computer_selection == "rock") ||
        (player_selection == "rock" && computer_selection == "paper") ||
        (player_selection == "paper" && computer_selection == "scissors")) {
        return `You Lose! ${computer_selection} beats ${player_selection}`;
    }
    else if ((computer_selection == "scissors" && player_selection == "rock") ||
        (computer_selection == "rock" && player_selection == "paper") ||
        (computer_selection == "paper" && player_selection == "scissors")) {
        return `You Win! ${player_selection} beats ${computer_selection}`;
    }
}

function game() {
    let player_play = window.prompt("Choose what move you are going to play", "").toLowerCase();
    return play_round(player_play, computer_play());
}

for (i = 0; i < 5; i ++) {
    console.log(game())
}
