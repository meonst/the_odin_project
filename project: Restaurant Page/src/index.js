const content = document.getElementById("content");
import return_header from "./modules/header.js";
import return_footer from "./modules/footer.js";
import return_navigation_bar from "./modules/navigation_bar";
import return_menu from "./modules/menu.js";
import return_home from "./modules/home.js";
import return_contacts from "./modules/contacts.js";

let make_basic_page = function() {
    content.appendChild(return_header());
    content.appendChild(return_navigation_bar());
    let main_content = document.createElement("div");
    main_content.setAttribute("id", "main_content");
    main_content.appendChild(document.createElement("div"))
    content.appendChild(main_content);
    content.appendChild(return_footer());
}
make_basic_page()

let navigation_buttons = document.getElementsByClassName("navigation_button");
Object.keys(navigation_buttons).forEach(key => {
    navigation_buttons[key].addEventListener("click", () => {
        set_main_content(navigation_buttons[key].textContent)
    }
    )
})

let set_main_content = function(target) {
    let main_content = document.getElementById("main_content");
    main_content.removeChild(main_content.lastChild);
    if (target == "HOME") {
        main_content.appendChild(return_home());
    } else if (target == "MENU") {
        main_content.appendChild(return_menu());
    } else if (target == "CONTACTS") {
        main_content.appendChild(return_contacts());
    }
    
    
}
