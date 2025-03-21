import React from 'react';
import { useParams, Link } from 'react-router-dom';

const books = [
  { id: 1, title: '1984', author: 'George Orwell', price: 50, description: 'A dystopian novel about totalitarianism.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 40, description: 'A powerful story of racial injustice.' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 35, description: 'A tale of love and excess in the 1920s.' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 25, description: 'A classic romance novel.' },
  { id: 5, title: 'Harry Potter', author: 'J.K. Rowling', price: 60, description: 'The adventures of a young wizard.' },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 35, description: 'A historical novel about Russian society.' },
  { id: 7, title: 'Rich Dad Poor Dad', author: 'Robort Kiyosaki', price: 20, description: 'Money And Finance.' },
  { id: 8, title: 'Confidence', author: 'Ramesh', price: 50, description: 'Psychology Development' },
  
];

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="text-center text-danger">Book not found!</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-primary">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/" className="btn btn-outline-secondary mt-3">Back to Book List</Link>
    </div>
  );
};

export default BookDetails;
