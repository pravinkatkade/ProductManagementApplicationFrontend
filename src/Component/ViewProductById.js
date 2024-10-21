import React, { useState } from 'react';
import { getProductById } from '../productService'; 
import './ViewProductById.css'; 
const ViewProductById = () => {
    const [productId, setProductId] = useState(''); 
    const [product, setProduct] = useState(null); 
    const [error, setError] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 
        setProduct(null); 

        try {
            const fetchedProduct = await getProductById(productId);
            console.log(fetchedProduct); 
            setProduct(fetchedProduct); 
        } catch (err) {
            setError(`Product ID not a Present: ${productId}`); 
        }
    };

    return (
        <div className="view-product-by-id-container">
            <h2>Fetch Product by ID</h2>
            <form onSubmit={handleSubmit} className="view-product-form">
                <input
                    type="text"
                    placeholder="Enter Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)} // Update ID state
                    required
                    className="form-input"
                />
                <button type="submit" className="fetch-button">Fetch Product</button>
            </form>

            {error && <p className="error-message">{error}</p>} {/* Display error message */}

            {product && (
                <div className="product-details">
                    <h3>Product Details:</h3>
                    <p><strong>ID:</strong> {product.id || product.pid}</p> 
                    <p><strong>Name:</strong> {product.name || product.pname}</p>
                    
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Category ID:</strong> {product.cid}</p>
                </div>
            )}
        </div>
    );
};

export default ViewProductById;
