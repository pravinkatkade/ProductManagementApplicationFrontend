import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { deleteProductById, getAllProducts } from '../productService'; 
import './ViewProduct.css'; 
const ViewProduct = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts(); 
                
                setProducts(response);
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
                console.error(err);
            }
        };

        fetchProducts(); 
    }, []); 
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");

        if (confirmDelete) {
            try {
                await deleteProductById(id); 
                
                setProducts(products.filter((product) => product.id !== id));
            } catch (err) {
                setError(`Failed to delete product with ID: ${id}`);
                console.error(err);
            }
        }
    };

    return (
        <div className="view-product-container">
            <h2>Product List</h2>
            {error && <p className="error-message">{error}</p>}
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.cid}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(product.id)} 
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewProduct;
