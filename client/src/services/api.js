import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend API URL

// Function to get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to create a new user
export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to update a user
export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to delete a user
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};