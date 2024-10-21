import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AddCategory from './Component/AddCategory';
import ViewCategory from './Component/ViewCategory';
import UpdateCategory from './Component/UpdateCategory';
import FetchCategory from './Component/FetchCategory';
import AddProduct from './Component/AddProduct';
import ViewProduct from './Component/ViewProduct';
import ViewProductById from './Component/ViewProductById';
import UpdateProduct from './Component/UpdateProduct'; 

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/add-category" element={<AddCategory />} />
                    <Route path="/view-category" element={<ViewCategory />} />
                    <Route path="/fetch-category" element={<FetchCategory />} />
                    <Route path="/update-category" element={<UpdateCategory />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/view-product" element={<ViewProduct />} />
                    <Route path="/fetch-product" element={<ViewProductById />} /> 
                    <Route path="/update-product" element={<UpdateProduct />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
