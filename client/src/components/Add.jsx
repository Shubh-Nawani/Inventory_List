import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Add() {
  const [product, setProduct] = useState({
    name: '',
    desc: '',
    price: '',
    stock: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://inventory-list-99a9.onrender.com/api/products', product);
      setMessage('Product added successfully!');
      setProduct({ name: '', desc: '', price: '', stock: '' });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required /><br />
        <input type="text" name="desc" placeholder="Description" value={product.desc} onChange={handleChange} required /><br />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required /><br />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required /><br />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/get">Go to Get Page</Link>
    </div>
  );
}

export default Add;