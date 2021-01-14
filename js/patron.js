class Patron {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.currentBook = null;
         this.balance = 0;
    }
  checkOut(book) {
    this.currentBook = book;
    book.out = true;
    book.patron = this;
//    book.dueDate = (function() {
//      let newDueDate = new Date();
//      newDueDate.setDate(newDueDate.getDate() + 14);
//      return newDueDate;
//      }())
  } 
  returnBook(book) {
    this.currentBook = null;
    book.out = false;
    book.patron = null;
  }
}
