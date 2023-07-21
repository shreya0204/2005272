// // src/api.js

// import axios from 'axios';

// const BASE_URL = 'http://20.244.56.144/train';
// const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk5MzY0MDEsImNvbXBhbnlOYW1lIjoiS0lJVCIsImNsaWVudElEIjoiNmJhN2QyNGMtZjY5Zi00MTA0LTllZWQtNDgzZDc3MTU0YzA1Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDUyNzIifQ.4-rs_mbFGlK6NCbdFukXRVOSyEJzB3Lc3GbzTgfAbVM'; // Replace this with your actual access token

// // Function to fetch all trains data
// export const getAllTrains = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}/trains`, {
//             headers: {
//                 Authorization: `Bearer ${ACCESS_TOKEN}`,
//             },
//         });
//         return response.data; // Assuming the response is an array of train objects
//     } catch (error) {
//         throw new Error('Failed to fetch all trains data. Please try again later.');
//     }
// };

// // Function to fetch data of a specific train
// export const getSingleTrain = async (trainNumber) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/trains/${trainNumber}`, {
//             headers: {
//                 Authorization: `Bearer ${ACCESS_TOKEN}`,
//             },
//         });
//         return response.data; // Assuming the response is a single train object
//     } catch (error) {
//         throw new Error('Failed to fetch single train data. Please try again later.');
//     }
// };

// src/api.js

import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/train';

// Function to fetch the access token
const getAccessToken = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, {
            companyName: 'KIIT', // Replace with your company name
            clientID: '6ba7d24c-f69f-4104-9eed-483d77154c05', // Replace with your client ID
            ownerName: 'Shreya Agarwal', // Replace with your owner name
            ownerEmail: 'shreyaagarwal.connect@gmail.com', // Replace with your owner email
            rollNo: '2005272', // Replace with your roll number
            clientSecret: 'LjgBjrpEBlRzIZVS', // Replace with your client secret
        });

        // Assuming the response contains the access token
        return response.data.access_token;
    } catch (error) {
        throw new Error('Failed to obtain access token. Please check your credentials and try again.');
    }
};

// Function to fetch all trains data
export const getAllTrains = async () => {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${BASE_URL}/trains`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data; // Assuming the response is an array of train objects
    } catch (error) {
        throw new Error('Failed to fetch all trains data. Please try again later.');
    }
};

// Function to fetch data of a specific train
export const getSingleTrain = async (trainNumber) => {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${BASE_URL}/trains/${trainNumber}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data; // Assuming the response is a single train object
    } catch (error) {
        throw new Error('Failed to fetch single train data. Please try again later.');
    }
};
