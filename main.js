const newBook = document.getElementById("newBook");
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

let library = [];

submitBtn.addEventListener("click", ()=>{
    let newBook = new Book(titleInput.value, authorInput.value,
    pagesInput.value, completedInput.value)
    library.push(newBook);
    bookModal.style.display = "none";
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
    
    for(let i = 0; i < library.length; i++){
        console.log(library[i])
    }
    
}