import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBookForm = ({ books, updateBook }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const bookToEdit = books.find((book) => book.id === parseInt(id));
    const [form, setForm] = useState({ ...bookToEdit });

    if (!bookToEdit) {
        return <h2 className="text-danger text-center">Book not found!</h2>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(form);
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        className="form-control"
                        value={form.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        className="form-control"
                        value={form.author}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="form-control"
                        value={form.price}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default EditBookForm;
