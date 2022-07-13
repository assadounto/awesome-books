import { useDispatch } from 'react-redux/es/exports';
import { useState } from 'react';
import { ADD_BOOK } from '../redux/books/books';

const Addbook = () => {
  const [bookinfo, setbookInfo] = useState({
    author: '',
    booktitle: '',
  });
  const dispatch = useDispatch();
  const addBookHandler = (event) => {
    event.preventDefault();
    dispatch(ADD_BOOK(bookinfo));
    setbookInfo('');
  };
  return (
    <div className="ty">
      <h2>Add new book</h2>
      <div className="input">
        <form onSubmit={addBookHandler}>
          <input type="text" placeholder="book" value={bookinfo.booktitle} onChange={(e) => setbookInfo(e.target.value)} />
          <input type="text" placeholder="author" value={bookinfo.author} onChange={(e) => setbookInfo(e.target.value)} />
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};
export default Addbook;
