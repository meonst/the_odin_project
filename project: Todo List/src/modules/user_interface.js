import { check_previous_session, make_todo_list_with_class, update_local_storage } from "./storage.js" 
import assignment from "./assignment.js"
const user_interface = function() {
    

    const body = document.getElementById("body");
    let todo_list = check_previous_session()
    make_header_ui()
    make_main_content_ui(todo_list)
    make_footer_ui()

    function make_header_ui() {
        let header_ui = document.createElement("div");
        header_ui.textContent = "Todo List";
        header_ui.classList.toggle("header");
        body.appendChild(header_ui);
    }

    function make_footer_ui() {
        let footer_ui = document.createElement("div");
        footer_ui.textContent = "Made by Minhyeok Seo";
        footer_ui.classList.toggle("footer");
        body.appendChild(footer_ui);
    }
    
    function make_main_content_ui(todo_list) {
        update_local_storage(todo_list);
        let main_ui = document.createElement("div");
        main_ui.setAttribute("id", "main")
        main_ui.classList.toggle("main")
        //let test = document.getElementById("thisdoesntexist");

        Object.keys(todo_list).forEach((project_name) => {
            main_ui.appendChild(return_project_group_ui(project_name, todo_list[project_name]));
        })
        
        let new_project_button = document.createElement("div");
        new_project_button.textContent = "Add new project";
        new_project_button.classList.toggle("new_project");
        new_project_button.addEventListener("click", () => {
            let new_project_name = prompt("Enter your new project name", "new project");
            todo_list[new_project_name] = []
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })
        main_ui.append(new_project_button);

        body.appendChild(main_ui);
        
    }
    function return_project_group_ui(project_name, assignments_in_project) {
        let project_ui = document.createElement("div");
        project_ui.setAttribute("id", project_name);
        project_ui.classList.toggle("project");

        let project_name_ui = document.createElement("div");
        project_name_ui.classList.toggle("project_name");
        project_name_ui.textContent = project_name

        let project_delete_ui = document.createElement("img");
        project_delete_ui.setAttribute("src", "./img/delete.png")
        project_delete_ui.classList.toggle("project_delete")

        project_delete_ui.addEventListener("click", () => {
            delete todo_list[`${ project_name }`]
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })


        let assignment_group_ui = document.createElement("div");
        assignment_group_ui.classList.toggle("assignment_group");
        Object.keys(assignments_in_project).forEach((assignment_index) => {
            assignment_group_ui.appendChild(return_assignment_ui(assignments_in_project[assignment_index], project_name));
        })

        let new_assignment_button = document.createElement("div");
        new_assignment_button.textContent = "Add new assignment";
        new_assignment_button.classList.toggle("new_assignment")
        new_assignment_button.addEventListener("click", () => {
            let new_assignment_title = prompt("Enter your new assignment's title", "new assignment's title");
            todo_list[project_name].push(new assignment(new_assignment_title))
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })
        
        
        project_ui.appendChild(project_name_ui);
        project_ui.appendChild(project_delete_ui);
        project_ui.appendChild(assignment_group_ui);
        project_ui.appendChild(new_assignment_button);
        return project_ui
    }
    function return_assignment_ui(assignment ,project_name) {
        let assignment_ui = document.createElement("div");
        assignment_ui.classList.toggle("assignment");

        let assignment_title_ui = document.createElement("div");
        assignment_title_ui.textContent = assignment.return_title();
        assignment_title_ui.addEventListener("dblclick", () => {
            let new_assignment_title = prompt("Enter your new assignment title", "new title");
            assignment.edit_title(new_assignment_title);
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })

        let assignment_description_ui = document.createElement("div");
        assignment_description_ui.textContent = assignment.return_description();
        assignment_description_ui.addEventListener("dblclick", () => {
            let new_assignment_description = prompt("Enter your new assignment description", "new description");
            assignment.edit_description(new_assignment_description);
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })

        let assignment_due_date_ui = document.createElement("div");
        assignment_due_date_ui.textContent = assignment.return_due_date();
        assignment_due_date_ui.addEventListener("dblclick", () => {
            let new_assignment_due_date = prompt("Enter your new assignment due_date", "new due_date");
            assignment.edit_due_date(new_assignment_due_date);
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })
        let assignment_priority_ui = document.createElement("div");
        assignment_priority_ui.textContent = assignment.return_priority();
        assignment_priority_ui.addEventListener("dblclick", () => {
            let new_assignment_priority = prompt("Enter your new assignment priority", "new priority");
            assignment.edit_priority(new_assignment_priority);
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })

        let assignment_delete_ui = document.createElement("img");
        assignment_delete_ui.setAttribute("src", "./img/delete.png")
        assignment_delete_ui.classList.toggle("assignment_delete")
        assignment_delete_ui.addEventListener("click", () => {
            todo_list[project_name].splice(todo_list[project_name].indexOf(assignment), 1);
            update_local_storage(todo_list);
            clear_main();
            make_main_content_ui(todo_list);
        })
        

        assignment_ui.appendChild(assignment_title_ui);
        assignment_ui.appendChild(assignment_description_ui);
        assignment_ui.appendChild(assignment_due_date_ui);
        assignment_ui.appendChild(assignment_priority_ui);
        assignment_ui.appendChild(assignment_delete_ui);
        return assignment_ui
    }
    function clear_main() {
        let main_ui = document.getElementById("main");
        body.removeChild(main_ui)
    }
}


export default user_interface