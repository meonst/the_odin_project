let return_home = function() {
    let home = document.createElement("div");
    home.setAttribute("id", "home");
    
    let about_title = document.createElement("div");
    about_title.setAttribute("id", "about_title");
    about_title.textContent = "About";
    
    let about_paragraph = document.createElement("div");
    about_paragraph.setAttribute("id", "about_paragraph");
    about_paragraph.textContent = "Salad Bar has been in buisness ever since The Statue of Liberty was built. It has been recognized as a must-go restaurant to everybody who visits the Statue of Liberty from all around the globe. We are proud of our wide selection of vegetable, dressings and the variety of our menus."
    
    let about_logo = document.createElement("div");
    about_logo.setAttribute("id", "about_logo");
    about_logo.textContent = "Salad Bar"

    home.appendChild(about_title);
    home.appendChild(about_paragraph);
    home.appendChild(about_logo);
    
    return home
}

export default return_home