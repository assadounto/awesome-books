import { createSlice } from '@reduxjs/toolkit/dist/createSlice';

const initialState = [];

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADD_BOOK: (state, action) => {
      const book = {
        id: 2,
        author: action.payload.author,
        booktitle: action.payload.booktitle,
      };
      return [...state, book];
    },
    REMOVE_BOOK: (state, id) => state.map((book) => ((book.id === action.id)
      ? { ...todo, completed: !todo.completed }
      : todo)),
  },
});
export const { ADD_BOOK, REMOVE_BOOK } = books.actions;
export default books.reducer;

// const books = (state = [], action) => {
//   switch (action.type) {
//     case :
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false,
//         },
//       ];
//     case 'REMOVE_BOOK':
//       return state.map((book) => ((book.id === action.id)
//         ? { ...todo, completed: !todo.completed }
//         : todo));
//     default:
//       return state;
//   }
// };

// export default books;

// const nextBookId = 0;
// export const addBook = (text) => ({
//   type: 'ADD_BOOK',
//   id: nextBookId + 1,
//   text,
// });

// export const removeBook = (id) => ({
//   type: 'REMOVE_BOOK',
//   id,
// });
