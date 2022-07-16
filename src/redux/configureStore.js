import { configureStore } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/actions';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});
export default store;
