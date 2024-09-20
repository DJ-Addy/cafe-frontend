// src/services/itemService.js

import axios from 'axios';

const API_URL ='http://localhost:8080/items'; // Base URL for your Item API

// Fetch all items
export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Create new item
export const createItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Update an item by ID
export const updateItem = async (id, updatedItem) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete an item by ID
export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
