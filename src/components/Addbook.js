import { useDispatch } from 'react-redux/es/exports';
import React, { useState } from 'react';
import { ADD_BOOK, postBook } from '../redux/books/actions';

const Addbook = () => {
  const [bookinfo, setbookInfo] = useState({
    author: '',
    item_id: 0,
    category: '',
  });
  const [bookinfo2, setbookInfo2] = useState({
    title: '',
  });
  const dispatch = useDispatch();
  const addBookHandler = (event) => {
    event.preventDefault();
    dispatch(postBook({ ...bookinfo, ...bookinfo2 }))
      .then(() => {
        dispatch(ADD_BOOK({ ...bookinfo, ...bookinfo2 }));
      });
  };
  return (
    <div className="ty">
      <div className="formtitle">Add new book</div>
      <div className="input">
        <form onSubmit={addBookHandler}>
          <input type="text" className="book" placeholder="book" value={bookinfo.author} onChange={(e) => setbookInfo({ author: e.target.value, item_id: Date.now(), category: 'fiction' })} />
          <input type="text" className="book" placeholder="author" value={bookinfo2.title} onChange={(e) => setbookInfo2({ title: e.target.value })} />
          <button type="submit" className="btn">Add book</button>
        </form>
      </div>
    </div>
  );
};
export default Addbook;
