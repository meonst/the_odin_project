let return_navigation_bar = function() {
    let navigation_bar = document.createElement("div");
    navigation_bar.setAttribute("id", "navigation_bar");

    let navigation_list = ["HOME", "MENU", "CONTACTS"]

    navigation_list.forEach(element => {
        let navigation_button = document.createElement("button");
        navigation_button.textContent = element;
        navigation_button.setAttribute("id", element)
        navigation_button.classList.toggle("navigation_button");
        navigation_bar.appendChild(navigation_button);
    })
    return navigation_bar
}

export default return_navigation_bar