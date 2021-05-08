class assignment {
    constructor(title, description = "no description", due_date = "no due date", priority = "no priority") {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.priority = priority;
    }
    return_title() {
        return this.title;
    }
    return_description() {
        return this.description;
    }
    return_due_date() {
        return this.due_date;
    }
    return_priority() {
        return this.priority;
    }
    edit_title(new_title) {
        this.title = new_title
    }
    edit_description(new_description) {
        this.description = new_description
    }
    edit_due_date(new_dew_date) {
        this.due_date = new_dew_date
    }
    edit_priority(new_priority) {
        this.priority = new_priority
    }

}


export default assignment