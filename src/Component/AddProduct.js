import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        cid: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/product', product);
            if (response.status === 201) {
                setMessage('Product added successfully!');
                setProduct({ name: '', price: '', cid: '' });
            }
        } catch (error) {
            setMessage('Failed to add product. Please try again.');
            console.error('There was an error adding the product!', error);
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Product Price:</label>
                    <input 
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cid">Category ID (cid):</label>
                    <input 
                        type="number"
                        id="cid"
                        name="cid"
                        value={product.cid}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
