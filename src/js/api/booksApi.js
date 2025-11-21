import { server } from './serverConfig';

export function getBook(id) {
  return server.get(`/books/${id}`).then(res => res.data);
}

export function getAllBooks() {
  return server.get(`/books`).then(res => res.data);
}

export function createBook(book) {
  return server.post(`/books`, book).then(res => res.data);
}

export function updateBook(id, book) {
  return server.patch(`/books/${id}`, book).then(res => res.data);
}

export function resetBook(id, book) {
  return server.put(`/books/${id}`, book).then(res => res.data);
}

export function deleteBook(id) {
  return server.delete(`/books/${id}`).then(res => res.data);
}
