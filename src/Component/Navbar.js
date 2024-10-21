import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const [isCategoryView, setIsCategoryView] = useState(true); 
    const navigate = useNavigate();  
    const showCategoryNav = () => {
        setIsCategoryView(true);
    };

    const showProductNav = () => {
        setIsCategoryView(false);
        navigate("/add-product");  
    };

    return (
        <div>
            <div className="toggle-buttons-container">
                <div className="toggle-buttons">
                    <button onClick={showCategoryNav} className="toggle-button"> Manage Category</button>
                    <button onClick={showProductNav} className="toggle-button"> Manage Product</button>
                </div>
            </div>

            {isCategoryView ? (
                <nav className="navbar">
                    <h2 className="navbar-logo">Category Manager</h2>
                    <ul className="navbar-links">
                        <li><Link to="/add-category">Add Category</Link></li>
                        <li><Link to="/view-category">View Categories</Link></li>
                        <li><Link to="/Fetch-Category">View Category by ID</Link></li>
                        <li><Link to="/update-category">Update Category by ID</Link></li>
                    </ul>
                </nav>
            ) : (
                <nav className="navbar">
                    <h2 className="navbar-logo">Product Manager</h2>
                    <ul className="navbar-links">
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/view-product">View Products</Link></li>
                        <li><Link to="/Fetch-Product">View Product by ID</Link></li>
                        <li><Link to="/update-product">Update Product by ID</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
