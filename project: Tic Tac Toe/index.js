const game = (() => {
    let board = new Array("", "", "", "", "", "", "", "", "")
    let whose_turn = "O";
    const play_made = (number) => {
        let board_button = document.getElementById(number);
        if (whose_turn != "end" && board_button.textContent == "") {
            board_button.textContent = whose_turn;
            board[parseInt(number)] = whose_turn;
            if (check_winner() == true) {
                whose_turn = "end";
            } else {
                if (whose_turn == "O") {
                    whose_turn = "X"
                } else {
                    whose_turn = "O"
                }
            }
        }
    }
    const check_winner = () => {
        if (
            (board[0] == board[3] && board[0] == board[6] && board[0] != "") ||
            (board[1] == board[4] && board[1] == board[7] && board[1] != "") ||
            (board[2] == board[5] && board[2] == board[8] && board[2] != "") ||
            (board[0] == board[1] && board[0] == board[2] && board[0] != "") ||
            (board[3] == board[4] && board[3] == board[5] && board[3] != "") ||
            (board[6] == board[7] && board[6] == board[8] && board[6] != "") ||
            (board[0] == board[4] && board[0] == board[8] && board[0] != "") ||
            (board[2] == board[4] && board[2] == board[6] && board[2] != "")) {
                game_finished()
                return true;
            } else {
                game_continues()
                return false;
            }
    }

    const game_continues = () => {
        if (whose_turn == "O") {
            show_result.textContent = "It is X's turn"
        } else {
            show_result.textContent = "It is O's turn"
        }
    }

    const game_finished = () => {
        show_result.textContent = whose_turn + " is the winner!"
    }
    const reset = () => {
        show_result.textContent = "It is O's turn";
        board = new Array("", "", "", "", "", "", "", "", "");
        whose_turn = "O";
        board_buttons = document.getElementsByClassName("board_button");
        Object.keys(board_buttons).forEach(key => {
            board_buttons[key].textContent = ""
        })
    }
    return {play_made, reset}
})();




const gameboard = document.getElementById("gameboard")
const show_result = document.getElementById("result");
const reset = document.getElementById("reset");
reset.addEventListener("click", () => game.reset());

for (let i = 0; i < 9; i++) {
    let board_button = document.createElement("button");
    board_button.classList.toggle("board_button");
    board_button.setAttribute("id", `${ i }`)
    board_button.textContent = "";
    board_button.addEventListener("click", () => {
        game.play_made(board_button.id)
    })
    gameboard.appendChild(board_button);

}


