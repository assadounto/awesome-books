import { useSelector } from 'react-redux/es/hooks/useSelector';
import Addbook from './Addbook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <Book />
      <Addbook />
    </>
  );
};

export default Books;
