import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const {
    id, booktitle, author,
  } = props;
  const dispatch = useDispatch();
  Book.propTypes = {
    id: PropTypes.number,
    booktitle: PropTypes.string,
    author: PropTypes.string,
  };
  Book.defaultProps = {
    booktitle: 'My book',
    author: 'Author Name',
    id: 0,
  };
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="t">

      <div key={id}>
        <span>{author}</span>
        <span>{booktitle}</span>
        <button type="submit" onClick={() => { handleRemove(); }}>remove</button>
      </div>

    </div>
  );
}

export default Book;
