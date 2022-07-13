import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import books from './books/books';
import categories from './categories/categories';

const store = configureStore({
  reducer: {
    books,
  },
});
export default store;
