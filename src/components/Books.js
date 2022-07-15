/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Addbook from './Addbook';
import Book from './Book';
import { fetchBooks } from '../redux/books/actions';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="cont1">
      <div className="booklistcont">
        {
        books.isFaild
          ? <div>Faild</div>
          : (
            <>
              {
                books.isLoading
                  ? <div>Loading...</div>

                  : books && books.items && books.items.map(({
                    item_id, title, author, category,
                  }) => (
                    <Book
                      key={item_id}
                      id={item_id}
                      title={title}
                      author={author}
                      category={category}
                    />
                  ))

              }
            </>
          )
          }
      </div>
      <Addbook />
    </div>
  );
};

export default Books;
