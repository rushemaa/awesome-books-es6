export default class BookList {
  constructor(title, author, bookList) {
    this.inputTitle = title;
    this.inputAuthor = author;
    this.bookList = bookList;
    this.books = [];
  }

  addBook() {
    if (
      this.inputTitle.value.length !== 0 && this.inputAuthor.value.length !== 0
    ) {
      if (this.books.length !== 0) {
        this.books.push({
          title: this.inputTitle.value,
          author: this.inputAuthor.value,
          id: this.books[this.books.length - 1].id + 1,
        });
        this.inputTitle.value = '';
        this.inputAuthor.value = '';
      } else {
        this.books.push({
          title: this.inputTitle.value,
          author: this.inputAuthor.value,
          id: 1,
        });
        this.inputTitle.value = '';
        this.inputAuthor.value = '';
      }

      localStorage.setItem('books', JSON.stringify(this.books));
      this.renderBooks();
      this.setRemoveEventListeners();
    }
  }

  renderBooks() {
    let finalHtml = '';
    let i = 0;
    this.books.forEach((book) => {
      let grayBg = '';
      if (i % 2 === 0) {
        grayBg = 'gray-bg';
      }
      const htmlToInsert = `
        <div class="books ${grayBg}">
          <p>"${book.title}" By ${book.author}</p>
          <button id="remove-${book.id}"> Remove </button>
        </div>
      `;
      i += 1;
      finalHtml += htmlToInsert;
    });
    this.bookList.innerHTML = `<div class="book-wrapper">${finalHtml}</div>`;
  }

  setRemoveEventListeners() {
    this.books.forEach((book) => {
      const removeBtn = document.getElementById(`remove-${book.id}`);
      removeBtn.addEventListener('click', () => {
        this.books = this.books.filter((element) => element.id !== book.id);

        localStorage.setItem('books', JSON.stringify(this.books));
        this.renderBooks();
        this.setRemoveEventListeners();
      });
    });
  }
}
