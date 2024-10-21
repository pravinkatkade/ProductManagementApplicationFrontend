import React, { useState } from 'react';
import { getCategoryById } from '../categoryService'; 
import './FetchCategory.css'; 

const FetchCategory = () => {
    const [categoryId, setCategoryId] = useState(''); 
    const [category, setCategory] = useState(null); 
    const [error, setError] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
        setCategory(null); 

        try {
            const fetchedCategory = await getCategoryById(categoryId); 
            setCategory(fetchedCategory); 
        } catch (err) {
            setError(`Failed to fetch category with ID: ${categoryId}`); 
        }
    };

    return (
        <div className="fetch-category-container">
            <h2>Fetch Category by ID</h2>
            <form onSubmit={handleSubmit} className="fetch-category-form">
                <input
                    type="text"
                    placeholder="Enter Category ID"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)} 
                    required
                    className="form-input"
                />
                <button type="submit" className="fetch-button">Fetch Category</button>
            </form>

            {error && <p className="error-message">{error}</p>}
            
            {category && (
                <div className="category-details">
                    <h3>Category Details:</h3>
                    <p><strong>ID:</strong> {category.id}</p>
                    <p><strong>Name:</strong> {category.name}</p>
                </div>
            )}
        </div>
    );
};

export default FetchCategory;
