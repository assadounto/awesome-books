import { useDispatch } from 'react-redux/es/exports';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const [bookinfo, setbookInfo] = useState({
    author: '',
    id: 0,
  });
  const [bookinfo2, setbookInfo2] = useState({
    booktitle: '',
  });
  const dispatch = useDispatch();
  const addBookHandler = (event) => {
    event.preventDefault();
    dispatch(addBook({ ...bookinfo, ...bookinfo2 }));
  };
  return (
    <div className="ty">
      <h2>Add new book</h2>
      <div className="input">
        <form onSubmit={addBookHandler}>
          <input type="text" className="tr" placeholder="book" value={bookinfo.author} onChange={(e) => setbookInfo({ author: e.target.value, id: Date.now() })} />
          <input type="text" className="h" placeholder="author" value={bookinfo2.booktitle} onChange={(e) => setbookInfo2({ booktitle: e.target.value })} />
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};
export default Addbook;
