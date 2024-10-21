import React, { useEffect, useState } from 'react';
import { getAllCategories, deleteCategoryById } from '../categoryService';
import './ViewCategory.css'; 
const ViewCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getAllCategories();
            setCategories(result);
        };
        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            await deleteCategoryById(id);
            alert("Category deleted successfully!");
            const updatedCategories = await getAllCategories();
            setCategories(updatedCategories);
        }
    };

    return (
        <div className="view-category-container">
            <h2>View Categories</h2>
            <table className="category-table">
                <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(category.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewCategory;
