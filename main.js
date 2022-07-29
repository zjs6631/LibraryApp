
//grabbed several DOM elements that will be used in the JS
const newBook = document.getElementById("newBook");
const libraryBody = document.getElementById("libraryBody");
const bookModal = document.getElementById("bookModal");
const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const completedInput = document.getElementById("completed");
const radioCompleted = document.getElementById("completed");
const radioInProgress = document.getElementById("InProgress");

//refactored the code to utilize classes for book creation
class Book {
    constructor(title, author, pages, completed){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.completed = completed;
    }
    //moved several functions into the class
    //read status just reads the current status the book is set to
    readStatus(){
        if(this.completed === true){
            return "Completed";
        } else {
            return "In Progress";
        }
    }
    //change status looks at current status and changes the value accordingly
    changeStatus(){
        if(this.completed === true){
            return "Incompleted";
        } else {
            return "In Progress";
        }
    }
}

//display book actually puts the book object on the page
function displayBook() {
    let books = document.querySelectorAll(".book"); //select all books
    books.forEach(book =>{ //remove all of the books
        book.remove();
    })
    for(let i = 0; i < library.length; i++){ //loop through the book array and add them back to the page
        const createDiv = document.createElement("div"); //create a div with class of "book"
        createDiv.classList.add("book");
        //create the innerHTML for the book item
        createDiv.innerHTML =  "<p>Title: " + library[i].title + "</p><p>Author: " + library[i].author + "</p><p>Pages:" + library[i].pages +
         "</p><p id='status" + i + "'> Completion Status: " + library[i].readStatus() + "</p>";
        const statusBtn = document.createElement("button") //add a status button and give it its class
        statusBtn.classList.add("statusBtn");
        statusBtn.innerHTML = "Toggle Status"
        //add a listener to the button that will change the objects value in the array and on the screen display
        statusBtn.addEventListener("click",()=>{
            const statusText = document.getElementById("status" + i);
            if(library[i].completed == true){
                library[i].completed = false;
                statusText.innerHTML = "Completion Status: In Progress";
                console.log("okay")
            } else if (library[i].completed == false){
                library[i].completed = true;
                statusText.innerHTML = "Completion Status: Completed";
                console.log("trying")
            } else {
                console.log("missing the point")
                library[i].completed = false;
            }
        })
        //append the div as a child to the library body
        document.getElementById("librarybody").appendChild(createDiv);
        createDiv.appendChild(statusBtn); //append the status button to that div also
        
    }
}



let demoBook = new Book("The wild thing", "William B Queasy", "203", true); //demo book to format display easier

let library = [demoBook]; //library array containing demobook obj

displayBook(); //displayBook used to check current display functionality 





//add submit button listener to collect a new books attributes and create an object from them
submitBtn.addEventListener("click", ()=>{
    let res = true;
    if(radioCompleted.checked === true && radioInProgress.checked === true){
        res = false;
    } else if(radioCompleted.checked === true){
        res = true;
    } else {
        res = false;
    }
    let newBook = new Book(titleInput.value, authorInput.value,
    pagesInput.value, res)
    library.push(newBook);
    bookModal.style.display = "none"; //hide the modal form again
    console.log(radioCompleted.checked +" "+ radioInProgress.checked + " " + res)
    displayBook() //call display book to add the book to the page
})
 //cancel button hides the modal
cancelBtn.addEventListener("click",()=>{
    bookModal.style.display = "none";
    console.log("we did it!")
})




//add button calls the getBook function
newBook.addEventListener("click", getBook);
 //getBook() resets all field values 
function getBook(){

    bookModal.style.display = "flex";
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    radioCompleted.checked = false;
    radioInProgress.checked = false;   
    
}
