import React, { useState } from 'react';
import { addCategory } from '../categoryService';
import './AddCategory.css'; 

const AddCategory = () => {
    const [category, setCategory] = useState({ name: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCategory(category);
        alert('Category added successfully!');
        setCategory({ name: '' });
    };

    return (
        <div className="add-category-container">
            <form onSubmit={handleSubmit} className="add-category-form">
                <h2>Add New Category</h2>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={category.name}
                    onChange={(e) => setCategory({ ...category, name: e.target.value })}
                    required
                    className="category-input"
                />
                <button type="submit" className="submit-btn">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
