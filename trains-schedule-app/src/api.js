// src/api.js

import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/train';

// Function to register the company with John Doe Railway Server
export const registerCompany = async (companyData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, companyData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to register company. Please try again later.');
    }
};

// Function to obtain the authorization token
export const getAuthToken = async (companyData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, companyData);
        return response.data.access_token;
    } catch (error) {
        throw new Error('Failed to obtain authorization token. Please try again later.');
    }
};

// Function to fetch all trains data
export const getAllTrains = async (accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/trains`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch all trains data. Please try again later.');
    }
};

// Function to fetch data of a specific train
export const getSingleTrain = async (trainNumber, accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/trains/${trainNumber}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch single train data. Please try again later.');
    }
};
