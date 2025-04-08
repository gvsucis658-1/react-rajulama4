import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';
import BookDetails from './BookDetails';
import EditBookForm from './EditBookForm';
import AddBookForm from './AddBookForm';
import NotFound from './NotFound';

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://myreact.fly.dev/books')
            .then((response) => {
                const updatedBooks = response.data.map((book) => ({
                    ...book,
                    price: Number(book.price || 0), // Ensure price is numeric
                }));
                setBooks(updatedBooks);
            })
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    const addBook = (newBook) => {
        newBook.price = Number(newBook.price || 0); // Ensure price is numeric
        axios.post('https://myreact.fly.dev/books', newBook)
            .then((response) => setBooks((prev) => [...prev, response.data]))
            .catch((error) => console.error('Error adding book:', error));
    };

    const updateBook = (updatedBook) => {
        updatedBook.price = Number(updatedBook.price || 0); // Ensure price is numeric
        axios.put(`https://myreact.fly.dev/books/${updatedBook.id}`, updatedBook)
            .then(() => {
                setBooks((prev) =>
                    prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
                );
            })
            .catch((error) => console.error('Error updating book:', error));
    };

    const deleteBook = (id) => {
        axios.delete(`https://myreact.fly.dev/books/${id}`)
            .then(() => {
                setBooks((prev) => prev.filter((book) => book.id !== id));
            })
            .catch((error) => console.error('Error deleting book:', error));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList books={books} deleteBook={deleteBook} />} />
                <Route path="/book/:id" element={<BookDetails books={books} />} />
                <Route path="/edit/:id" element={<EditBookForm books={books} updateBook={updateBook} />} />
                <Route path="/add" element={<AddBookForm addBook={addBook} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
