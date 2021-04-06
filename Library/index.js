let my_library = [];
let add_new_book = document.getElementById("add_new_book")
add_new_book.addEventListener("click", () => {
    let name = prompt("What is the name of the new book?");
    let author = prompt("Who is the authour of the new book?");
    new Book(name, author);
    make_bookshelf(my_library)
})
function Book(name, author) {
    this.name = name;
    this.author = author;
    this.is_finished = false;
    add_book_to_library(this)
}

function add_book_to_library(book) {
    my_library.push(book)
}
book_example_1 = new Book("The Bible", "Various Writers")
book_example_2 = new Book("Satanic Bible", "Various Writers")
book_example_3 = new Book("Betrayal for Dummies", "Judas Iscariot")
book_example_4 = new Book("Book of Reveladddtions", "John")
book_example_5 = new Book("Book of Revelsdsations", "John")
book_example_6 = new Book("Book of Revsselations", "John")
book_example_7 = new Book("Book of Refdvelations", "John")
book_example_8 = new Book("Book of fadsRevelations", "John")

function make_bookshelf(library) {
    const bookshelf = document.getElementById("bookshelf");
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    }
    
    library.forEach(element => {
            make_book_display(library, element)
        }
    )
}

function make_book_display(library, book) {
    const bookshelf = document.getElementById("bookshelf");
    let book_in_shelf = document.createElement("div");
    book_in_shelf.setAttribute("id", `${ book.name }`);
    book_in_shelf.classList.toggle("book")
    book_in_shelf.textContent = `${ book.name }\r\n${ book.author }`
    make_delete_button(library, book_in_shelf, book)
    make_completion_button(library, book_in_shelf, book)
    bookshelf.appendChild(book_in_shelf);
}

function make_delete_button(library, book_in_shelf, book) {
    const delete_button = document.createElement("button");
    delete_button.classList.toggle("delete_button");
    delete_button.textContent = `Delete from bookshelf`
    
    delete_button.addEventListener("click", () => {
        library.splice(library.indexOf(book), 1);
        make_bookshelf(library);
    })
    
    book_in_shelf.appendChild(delete_button);
}

function make_completion_button(library, book_in_shelf, book) {
    const completion_button = document.createElement("button");
    completion_button.classList.toggle("completion_button");
    completion_button.textContent = book.is_finished ? "Finished" : "Unfinished"
    
    completion_button.addEventListener("click", () => {
        book.is_finished = !book.is_finished
        make_bookshelf(library);
    })
    book_in_shelf.appendChild(completion_button);
}


make_bookshelf(my_library)