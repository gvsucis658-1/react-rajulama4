import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';
import BookDetails from './BookDetails';
import NotFound from './NotFound';
import EditBookForm from './EditBookForm';
import AddBookForm from './AddBookForm';
const App = () => {

  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', price: 50 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 40 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 35 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 25 },
    { id: 5, title: 'Harry Potter', author: 'J.K. Rowling', price: 60 },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 35 },
    { id: 7, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 20 },
    { id: 8, title: 'Confidence', author: 'Ramesh', price: 50 },
  ]);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<BookList books={books} setBooks={setBooks} />} />
      <Route path="/book/:id" element={<BookDetails books={books} />} />
      <Route path="/edit/:id" element={<EditBookForm books={books} setBooks={setBooks} />} />
      <Route path="/add" element={<AddBookForm books={books} setBooks={setBooks} />} />
      <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </Router>
  );
};

export default App;
