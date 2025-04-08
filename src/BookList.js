import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {
    return (
        <div className="container mt-5 page-background">
            <h1 className="text-center mb-4 text-primary">Book Bank</h1>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={book.id}>
                        <div className="card shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="card-body">
                                <h5 className="card-title text-info">{book.title}</h5>
                                <p className="mb-1"><strong>Author:</strong> {book.author}</p>
                                <p className="mb-2 text-success">
                                    <strong>Price:</strong> ${Number(book.price || 0).toFixed(2)}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/book/${book.id}`} className="btn btn-outline-primary btn-sm">Learn More</Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteBook(book.id)}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/edit/${book.id}`} className="btn btn-warning btn-sm">Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/add" className="btn btn-primary mt-3">Add New Book</Link>
        </div>
    );
};

export default BookList;
