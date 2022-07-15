import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookService from '../../services/services';

const initialState = {
  isLoading: false,
  isFaild: false,
  items: [],
};
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const { data } = await bookService.getAll();
    return data;
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (book) => {
    const newBook = {
      ...book,
    };

    const { data } = await bookService.create(newBook);

    return data;
  },
);

export const removeBookById = createAsyncThunk(
  'books/removeBookById',
  async (bookId) => {
    const { data } = await bookService.remove(bookId);

    return data;
  },
);

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADD_BOOK(state, action) {
      const newstate = {
        ...action.payload,
      };
      state.items.push(newstate);
    },
    REMOVE_BOOK(state, action) {
      const newstate = state.items.filter((book) => book.item_id !== action.payload);
      state.items = newstate;
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));
      state.isLoading = false;
      state.items = books;
    },
    [fetchBooks.pending]: (state) => { state.isLoading = true; },
    [fetchBooks.rejected]: (state) => { state.isFaild = true; },
  },
});

export const { ADD_BOOK, REMOVE_BOOK } = books.actions;

export default books.reducer;
