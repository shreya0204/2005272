import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/train';

// Function to fetch the access token
const getAccessToken = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, {
            companyName: 'KIIT',
            clientID: '6ba7d24c-f69f-4104-9eed-483d77154c05',
            ownerName: 'Shreya Agarwal',
            ownerEmail: 'shreyaagarwal.connect@gmail.com',
            rollNo: '2005272',
            clientSecret: 'LjgBjrpEBlRzIZVS',
        });

        return response.data.access_token;
    } catch (error) {
        throw new Error('Failed to obtain access token. Please check your credentials and try again.');
    }
};

export const getAllTrains = async () => {
    try {
        const accessToken = await getAccessToken();
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

export const getSingleTrain = async (trainNumber) => {
    try {
        const accessToken = await getAccessToken();
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
