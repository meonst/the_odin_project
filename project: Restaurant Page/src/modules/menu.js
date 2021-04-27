let return_menu = function() {
    let menu = document.createElement("div")
    menu.setAttribute("id", "menu")
    let salad_list = {
        "Beef Salad": "beef salad.jpeg",
        "Caesar Salad": "caesar salad.jpeg",
        "Cheese Salad": "cheese salad.jpeg",
        "Chicken Salad": "chicken salad.jpeg",
        "Salmon Salad": "salmon salad.jpeg",
        "Steak Salad": "steak salad.jpeg",
        "Tofu Salad": "tofu salad.jpeg",
        "Tuna Salad": "tuna salad.jpeg",
    }
    Object.keys(salad_list).forEach(key => {
        console.log(key, salad_list[key])

        let menu_grid = document.createElement("div");
        menu_grid.classList.toggle("menu_grid");

        let menu_photo = document.createElement("img");
        menu_photo.classList.toggle("menu_photo")
        menu_photo.setAttribute("src", "./images/salads/" + salad_list[key])
        menu_photo.setAttribute("alt", key)

        let menu_name = document.createElement("div");
        menu_name.classList.toggle("menu_name");
        menu_name.textContent = key;
        
        menu_grid.appendChild(menu_photo);
        menu_grid.appendChild(menu_name);

        menu.appendChild(menu_grid);
    })
    return menu
}

export default return_menu