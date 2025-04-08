import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBookForm = ({ addBook }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', author: '', price: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: name === 'price' ? Number(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ ...form, id: Date.now(), price: Number(form.price || 0) });
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2>Add New Book</h2>
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
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;
