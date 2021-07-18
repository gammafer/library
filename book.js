const bookContainer=document.getElementById("book_container");
const addButton=document.getElementById("addButton");
const inputPanel=document.getElementById("inputPanel");
const closeForm=document.getElementById("closeForm");



const submitButton=document.getElementById("submitButton");


let myLibrary = [];
let numOfBook=0;


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        return console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read?"already read": "not read yet"} `)
    }
}

function addBookToLibrary(title,author,pages,read){
    let newBook=Object.create(Book);
    newBook.title=title;
    newBook.author=author;
    newBook.pages=pages;
    newBook.read=read;
    //Index of our book, to easier delete
    newBook.numOfBook=numOfBook;
    numOfBook++;

    myLibrary.push(newBook);
    localStorage.setItem('myLibrary')
    showBooks(newBook);

}
function deleteBookFromLibrary(numOfBook){
    myLibrary.splice(numOfBook, 1);
    console.log(numOfBook);
    renderWholeArray();
}

function showBooks(addedBook){
        let card=document.createElement('div');
        card.className="bookCard";
        let deleteButton=document.createElement('button');
        deleteButton.className='deleteButton';
        deleteButton.innerHTML='X';
        deleteButton.addEventListener("click",function(){deleteBookFromLibrary(addedBook.numOfBook)});
        let list=document.createElement('ul');
        let listEl1=document.createElement('h1');
        listEl1.innerText=addedBook.title;
        let listEl2=document.createElement('li');
        listEl2.innerText=addedBook.author;
        let listEl3=document.createElement('li');
        listEl3.innerText=addedBook.pages;
        let listEl4=document.createElement('li');
        let label=document.createElement('label');
        label.className='switch';
        let checkbox=document.createElement('input');
        checkbox.type='checkbox';
        let checkboxSpan=document.createElement('span');
        checkboxSpan.className="slider round";
        if(addedBook.read){
            checkbox.checked=true;
        }
        label.appendChild(checkbox);
        label.appendChild(checkboxSpan);
        listEl4.appendChild(label);


        cardBgColor=random_bg_color();

        card.style.background = bgColor;
        card.appendChild(deleteButton);
        card.appendChild(list);
        list.appendChild(listEl1);
        list.appendChild(listEl2);
        list.appendChild(listEl3);
        list.appendChild(listEl4);
        
        bookContainer.appendChild(card);
}


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ")";
}

function showInput(){
    inputPanel.hidden=false;

}
function closeInput(){
    inputPanel.hidden=true;
}
function addNewBookFromForm(e){
    //Don't refresh the page, getting the values
    e.preventDefault();

    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value;
    let pages=document.getElementById("pages").value;
    let read=document.getElementById("checkbox").checked;

    addBookToLibrary(title,author,pages,read);
    //nullify values, close inputForm
    document.getElementById("title").value=null;
    document.getElementById("author").value=null;
    document.getElementById("pages").value=null;
    document.getElementById("checkbox").checked=false;
    closeInput();
}

function renderWholeArray(){
    //Running on startup, and when you delete a book
    bookContainer.innerHTML='';
    for(let i=0; i<myLibrary.length;i++){
        showBooks(myLibrary[i]);
    }
}

addButton.addEventListener("click",showInput);
closeForm.addEventListener("click",closeInput);
submitButton.addEventListener("click",addNewBookFromForm);