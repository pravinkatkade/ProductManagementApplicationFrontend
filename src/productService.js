import axios from 'axios';

const API_URL = "http://localhost:8080/product"; 

export const addProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error("Error adding product", error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID: ${id}`, error);
        throw error;
    }
};

export const updateProductById = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error(`Error updating product with ID: ${id}`, error);
        throw error;
    }
};

export const deleteProductById = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting product with ID: ${id}`, error);
        throw error;
    }
};
