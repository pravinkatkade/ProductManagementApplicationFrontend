import React, { useEffect, useState } from 'react';
import { getAllCategories, getCategoryById, updateCategoryById } from '../categoryService'; 
import './UpdateCategory.css';

const UpdateCategory = () => {
    const [categories, setCategories] = useState([]); 
    const [selectedCategoryId, setSelectedCategoryId] = useState(''); 
    const [categoryName, setCategoryName] = useState(''); 

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getAllCategories(); 
            setCategories(result);
        };
        fetchCategories();
    }, []);

    const fetchCategoryDetails = async (id) => {
        try {
            const fetchedCategory = await getCategoryById(id);
            setCategoryName(fetchedCategory.name);
        } catch (error) {
            console.error('Error fetching category details:', error);
        }
    };

    const handleCategoryChange = (e) => {
        const id = e.target.value;
        setSelectedCategoryId(id); 
        if (id) {
            fetchCategoryDetails(id); 
        } else {
            setCategoryName(''); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCategoryById(selectedCategoryId, { name: categoryName }); 
            alert('Category updated successfully!');
            setSelectedCategoryId(''); 
            setCategoryName(''); 
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Failed to update category!');
        }
    };

    return (
        <div className="update-category-container">
            <h2>Update Category</h2>
            <form onSubmit={handleSubmit} className="update-category-form">
                <select
                    value={selectedCategoryId}
                    onChange={handleCategoryChange} 
                    required
                    className="form-input"
                >
                    <option value="" disabled>Select Category ID</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.id}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)} 
                    required
                    className="form-input"
                />
                <button type="submit" className="update-button">Update Category</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
