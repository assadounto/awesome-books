import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Book(props) {
  const books = useSelector((state) => state.books);
  // Book.propTypes = {
  //   title: PropTypes.string,
  //   author: PropTypes.string,
  // };
  // Book.defaultProps = {
  //   title: 'My book',
  //   author: 'Author Name',
  // };
  // const { title, author } = props;
  return (
    <div className="t">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.author}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Book;
