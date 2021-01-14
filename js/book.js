class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this._out = false;
      this.dueDate = null;
      this.patron = null;
    }
  get out() {
    return this._out;
  }
  set out(boolean) {
    this._out = boolean;
    if (this._out === true) {
      this.dueDate = (function() {
      let newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + 14);
      return newDueDate;
      }())
    } else {
      this.dueDate = null;
    }
  }
  
}
