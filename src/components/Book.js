import PropTypes from 'prop-types';

function Book(props) {
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
  };
  Book.defaultProps = {
    title: 'My book',
    author: 'Author Name',
  };
  const { title, author } = props;
  return (
    <div className="t">
      {title}
      {author}
      <button type="submit">remove</button>
    </div>
  );
}

export default Book;
