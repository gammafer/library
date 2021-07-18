const bookContainer=document.getElementById("book_container");
const addButton=document.getElementById("addButton");
const inputPanel=document.getElementById("inputPanel");

let myLibrary = [];


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read?"already read": "not read yet"} `)
    }
}

function addBookToLibrary(title,author,pages,read){
    let newBook=Object.create(Book);
    newBook.title=title;
    newBook.author=author;
    newBook.pages=pages;
    newBook.read=read;
    myLibrary.push(newBook);
    showBooks(newBook);
}

function showBooks(addedBook){
        let card=document.createElement('div');
        card.className="bookCard";
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
addButton.addEventListener("click",showInput);