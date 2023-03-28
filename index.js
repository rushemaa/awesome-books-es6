import BookList from './modules/BookList.js';
import LocalBooks from './modules/LocalBooks.js';
import { navs, newBook, currentTime } from './modules/Actions.js';

const nav = document.querySelectorAll('nav ul li');
const form = document.querySelector('.form');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const bookLists = document.querySelector('.books-list');

const booksList = new BookList(inputTitle, inputAuthor, bookLists);

if (LocalBooks) {
  booksList.books.push(...JSON.parse(LocalBooks));
  booksList.renderBooks();
  booksList.setRemoveEventListeners();
}
newBook(form, booksList);
// Nav bar tabs
navs(nav);
currentTime(document.querySelector('.time-stamp'));
