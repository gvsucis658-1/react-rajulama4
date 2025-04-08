import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = ({ books }) => {
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
            <Link to="/" className="btn btn-outline-secondary mt-3">Back to Book List</Link>
        </div>
    );
};

export default BookDetails;
