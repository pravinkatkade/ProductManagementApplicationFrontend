import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductById, updateProductById } from '../productService'; 
import './UpdateProduct.css'; 

const UpdateProduct = () => {
    const [products, setProducts] = useState([]); 
    const [selectedProductId, setSelectedProductId] = useState(''); 
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cid, setCid] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getAllProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
            }
        };

        fetchProducts();
    }, []);

    const fetchProduct = async (id) => {
        try {
            const fetchedProduct = await getProductById(id);
            setProduct(fetchedProduct);
            setName(fetchedProduct.name);
            setPrice(fetchedProduct.price);
            setCid(fetchedProduct.cid);
            setError(''); 
        } catch (err) {
            setError(`Failed to fetch product with ID: ${id}`);
            setProduct(null); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const updatedProduct = {
            name,
            price,
            cid,
        };

        try {
            await updateProductById(selectedProductId, updatedProduct);
            alert('Product updated successfully!');
            setProduct(null);
            setSelectedProductId('');
            setName('');
            setPrice('');
            setCid('');
        } catch (err) {
            setError(`Failed to update product with ID: ${selectedProductId}`);
        }
    };

    return (
        <div className="update-product-container">
            <h2>Update Product</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                fetchProduct(selectedProductId); 
            }} className="fetch-product-form">
                <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    required
                    className="form-input"
                >
                    <option value="">Select Product ID</option>
                    {products.map((product) => (
                        <option key={product.id} value={product.id}>
                            {product.id}
                        </option>
                    ))}
                </select>
                <button type="submit" className="fetch-button">Fetch Product</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {product && (
                <form onSubmit={handleSubmit} className="update-product-form">
                    <h3>Update Product Details:</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="form-input"
                    />
                    <input
                        type="text"
                        placeholder="Category ID"
                        value={cid}
                        onChange={(e) => setCid(e.target.value)}
                        required
                        className="form-input"
                    />
                    <button type="submit" className="update-button">Update Product</button>
                </form>
            )}
        </div>
    );
};

export default UpdateProduct;
