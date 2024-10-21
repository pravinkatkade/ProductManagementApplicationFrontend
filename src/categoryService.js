import axios from 'axios';

const API_URL = "http://localhost:8080/categories";

export const getAllCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories", error);
        throw error;
    }
};

export const getCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category with ID: ${id}`, error);
        throw error;
    }
};

export const addCategory = async (category) => {
    try {
        const response = await axios.post(API_URL, category);
        return response.data;
    } catch (error) {
        console.error("Error adding category", error);
        throw error;
    }
};

export const updateCategoryById = async (id, category) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, category);
        return response.data;
    } catch (error) {
        console.error(`Error updating category with ID: ${id}`, error);
        throw error;
    }
};

export const deleteCategoryById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting category with ID: ${id}`, error);
        throw error;
    }
};
