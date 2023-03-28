import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const navs = (navs) => {
  navs.forEach((element) => {
    element.addEventListener('click', () => {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach((tab) => {
        tab.classList.add('hidden');
      });
      document.querySelector('.current').classList.remove('current');
      const tabId = element.getAttribute('class');
      document.querySelector(`#${tabId}`).classList.remove('hidden');
      element.classList.add('current');
    });
  });
};

export const newBook = (form, booksList) => form.addEventListener('submit', (e) => {
  e.preventDefault();
  booksList.addBook();
});

export const currentTime = (where) => {
  const now = DateTime.now();
  where.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
