import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookById, REMOVE_BOOK } from '../redux/books/actions';
import 'react-circular-progressbar/dist/styles.css';

function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  };
  Book.defaultProps = {
    title: 'My book',
    author: 'Author Name',
    category: 'Fiction',
  };
  const handleRemove = () => {
    dispatch(removeBookById(id)).then(() => dispatch(REMOVE_BOOK(id)));
  };
  return (
    <div className="t" key={id}>
      <div className="tt">
        <div className="Second">
          <div className="info">
            <div className="category">{category}</div>
            <div className="title">{title}</div>
            <div className="info1 margin">{author}</div>
            <div className="actions">
              <div className="info1 border mouse">Comment</div>
              <button className="info1 border remove mouse" type="submit" onClick={() => { handleRemove(); }}>Remove</button>
              <div className="info1 mouse">Edit</div>
            </div>
          </div>
          <div className="progress">
            <div className="p-icon"><CircularProgressbar value={60} /></div>
            <div className="p-info">
              <div className="status -Percent-Complete">60%</div>
              <div className="completed info2">completed</div>
            </div>
          </div>
          <div className="current">
            <div className="info2">CURRENT CHAPTER</div>
            <div className="chapter">Chapter 17</div>
            <button className="Rectangle-2 mouse" type="submit">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
