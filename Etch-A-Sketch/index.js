function mouse_over_grid(grid) {
    grid.classList.toggle("black_background")
}
function make_grid_divisions(squares_per_side) {
    for (i = 0; i < squares_per_side; i++) {
        const grid_container = document.getElementById("grid_container")
        const grid_row = document.createElement("div");
        grid_row.setAttribute("id", `grid_row_${ i }`);
        grid_row.classList.toggle("grid_row")
        for (j = 0; j < squares_per_side; j++) {
            let a = i;
            let b = j
            const grid_single = document.createElement("div");
            grid_single.setAttribute("id", `grid_${ i }_${ j }`);
            grid_single.setAttribute("style", `width: ${ 960 / squares_per_side }; height: ${ 960 / squares_per_side }`)
            grid_single.classList.toggle("single_grid");
            grid_single.addEventListener("mouseover", () => mouse_over_grid(grid_single))
            grid_row.appendChild(grid_single);
        }
        grid_container.appendChild(grid_row)
        
    }   
    
}

function reset_grid() {
    const grid_row = document.getElementsByClassName("grid_row")
    Object.entries(grid_row).forEach(element => element[1].parentNode.removeChild(element[1]))
    while (true) {
        let squares_per_side = prompt("How many squares per side would you want?(must be an integer smaller or equal to 100)")
        if (squares_per_side <= 100 && squares_per_side >= 1 && squares_per_side == Math.floor(squares_per_side)) {
            make_grid_divisions(squares_per_side)
            break
        }
    }
    
    
    
    

}
const button_reset = document.getElementById("button_reset");
button_reset.addEventListener("click", () => reset_grid());

make_grid_divisions(16)