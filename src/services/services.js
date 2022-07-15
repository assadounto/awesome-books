import http from './http-common';

const getAll = () => http.get('/books');
const create = (data) => http.post('/books', data);
const remove = (id) => http.delete(`/books/${id}`);
const removeAll = () => http.delete('/books');
const bookService = {
  getAll,
  create,
  remove,
  removeAll,
};
export default bookService;
