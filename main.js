const newBook = document.getElementById("newBook");
const libraryBody = document.getElementById("libraryBody");
const bookModal = document.getElementById("bookModal");
const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const completedInput = document.getElementById("completed");


function Book(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed
}

function displayBook() {
    let books = document.querySelectorAll(".book");
    books.forEach(book =>{
        book.remove();
    })
    for(let i = 0; i < library.length; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("book");
        createDiv.innerHTML = library[i].title + library[i].author + library[i].pages + library[i].completed;
        document.getElementById("librarybody").appendChild(createDiv);
    }
}

let demoBook = new Book("The wild thing", "William B Queasy", "203", "No");

let library = [demoBook];

displayBook();

submitBtn.addEventListener("click", ()=>{
    let newBook = new Book(titleInput.value, authorInput.value,
    pagesInput.value, completedInput.value)
    library.push(newBook);
    bookModal.style.display = "none";
    displayBook()
})

cancelBtn.addEventListener("click",()=>{
    bookModal.style.display = "none";
    console.log("we did it!")
})
newBook.addEventListener("click", getBook);

function getBook(){

    bookModal.style.display = "flex";
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    completedInput.value = "";

    
    
}