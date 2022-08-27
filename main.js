

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
    this.completed = completed;
}

Book.prototype.readStatus = function() {
    if(this.completed == true){
        return "Completed";
    } else {
        return "Incomplete"
    }
}

Book.prototype.changeStatus = function(){
    if(this.completed == true){
        
        return "Incomplete";
    } else {
        
        return "Completed";
    }
}

function displayBook() {
    let books = document.querySelectorAll(".book");
    books.forEach(book =>{
        book.remove();
    })
    for(let i = 0; i < library.length; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("book");
        createDiv.innerHTML =  "Title: " + library[i].title + "<br> Author: " + library[i].author + "<br> Pages:" + library[i].pages +
         "<br> Completion Status: " + library[i].readStatus();
        const statusBtn = document.createElement("button")
        statusBtn.classList.add("statusBtn");
        statusBtn.innerHTML = "Toggle Status"
        statusBtn.addEventListener("click",()=>{
            createDiv.innerHTML =  "Title: " + library[i].title + "<br> Author: " + library[i].author + "<br> Pages:" + library[i].pages +
            "<br> Completion Status: " + library[i].changeStatus();
            if(library[i].completed == true){
                library[i].completed = false;
            } else {
                library[i].completed = true;
            }
            const statusBtn = document.createElement("button")
            statusBtn.classList.add("statusBtn");
            statusBtn.innerHTML = "Toggle Status"
            createDiv.appendChild(statusBtn)
            
        })
        document.getElementById("librarybody").appendChild(createDiv);
        createDiv.appendChild(statusBtn);

        
    }
}



let demoBook = new Book("The wild thing", "William B Queasy", "203", true);

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