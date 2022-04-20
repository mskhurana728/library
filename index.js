const submitBtn = document.querySelector(".submitBtn");
const container = document.querySelector(".container");
const bookContainer = document.querySelector(".book-container");
const addBook = document.querySelector(".addBook");
const form = document.querySelector(".form");
const button = document.querySelector("button");


function Book(tittle, author, pages ) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
   
    this.info = function () {
        return (` Tittle: ${tittle} 
        Author: ${author} 
        Pages: ${pages} 
         `);
    }
}

let myLibrary = [];

function addBookToLibrary(newBook) {

    myLibrary.push(newBook);
    console.log(newBook.info() + "I am in add");
}


function displayMyLibrary() {
    bookContainer.textContent = "";
    let i = 0;
    myLibrary.forEach(book => {
        let displayBook = document.createElement("p");
        displayBook.textContent = "";

        displayBook.textContent = book.info();
        let readBtn = document.createElement("button");
        readBtn.setAttribute("dataIndex", i);
        readBtn.classList.add(`readBtn${i}`, "readBtn");
        readBtn.textContent = "Read";
        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("dataIndex", i);
        removeBtn.classList.add(`removeBtn`);
        removeBtn.textContent = "Remove";

        i++;
        displayBook.appendChild(readBtn);
        displayBook.appendChild(removeBtn);
        bookContainer.appendChild(displayBook);
        console.log(removeBtn);


        readBtn.addEventListener("click", () => {
            console.log(readBtn);
            if (readBtn.textContent == "Read") {
                readBtn.textContent = "Not Read"
            } else {
                readBtn.textContent = "Read";
            }
        })

        removeBtn.addEventListener("click", () => {

            let index;
            index = removeBtn.getAttribute("dataIndex");
            myLibrary.splice(index, 1);
            displayMyLibrary();
        })

    })

}

addBook.addEventListener("click", () => {

    form.style.display = 'block';

})
const createBtn = document.querySelector(".createBtn");
form.addEventListener("submit", (e) => {
    let tittlevalue = document.querySelector("#tittle").value;
    let authorvalue = document.querySelector("#author").value;
    let pagesvalue = document.querySelector("#pages").value;
   

    let newBook = new Book(tittlevalue, authorvalue, pagesvalue);
    addBookToLibrary(newBook);
    form.style.display = 'none';
    form.reset();

    displayMyLibrary();
    e.preventDefault();
})

displayMyLibrary();
