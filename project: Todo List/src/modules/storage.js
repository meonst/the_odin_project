import assignment from "./assignment.js"

export function update_local_storage(list) {
    localStorage.setItem("todo_list", JSON.stringify(list))
}

export function check_previous_session() {
    if (localStorage.getItem("todo_list") !== null) {
        let parsed_local_storage = JSON.parse(localStorage.getItem("todo_list"))
        let todo_list = make_todo_list_with_class(parsed_local_storage)
        return todo_list
    } else {
        let example_assignment_1 = new assignment("example_title_1");
        let example_assignment_2 = new assignment("example_title_2");
        let example_assignment_3 = new assignment("example_title_3");
        let example_todo_list = {
            "example_project_1": [example_assignment_1],
            "example_project_2": [example_assignment_2, example_assignment_3],
        };
        return example_todo_list
    }
}
export function make_todo_list_with_class(parsed_local_storage) {
    let todo_list = {}
    Object.keys(parsed_local_storage).forEach(project_name => {
        let assignments_in_project = []
        Object.keys(parsed_local_storage[project_name]).forEach(assignment_index => {
            let assignment_info = parsed_local_storage[project_name][assignment_index]
            assignments_in_project.push(new assignment(assignment_info["title"], assignment_info["description"], assignment_info["due_date"], assignment_info["priority"]))
        })
        todo_list[project_name] = assignments_in_project
    })
    return todo_list
}


