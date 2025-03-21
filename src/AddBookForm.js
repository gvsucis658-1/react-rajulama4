import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBookForm = ({ books, setBooks }) => {
  const [form, setForm] = useState({ title: '', author: '', price: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.price) {
      return alert('Please fill out all fields!');
    }

    const newBook = { ...form, id: Date.now(), price: parseFloat(form.price) };
    setBooks([...books, newBook]);
    setForm({ title: '', author: '', price: '' });
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
