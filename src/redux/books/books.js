const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];

    case 'REMOVE_BOOK': return state.filter((book) => (book.id !== action.payload));
    default:
      return state;
  }
};

export default books;

export const addBook = (payload) => ({
  type: 'ADD_BOOK',
  payload,
});

export const removeBook = (payload) => ({
  type: 'REMOVE_BOOK',
  payload,
});
