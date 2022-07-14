import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Addbook from './Addbook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.map(({ id, booktitle, author }) => (
        <Book
          key={id}
          id={id}
          booktitle={booktitle}
          author={author}
        />
      ))}
      <Addbook />
    </>
  );
};

export default Books;
