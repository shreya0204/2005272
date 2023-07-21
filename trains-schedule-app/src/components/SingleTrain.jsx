// src/components/SingleTrain.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../api';

const SingleTrain = () => {
    const { trainNumber } = useParams();
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data of a specific train and store it in the state
                const singleTrainData = await getSingleTrain(trainNumber);
                setTrainData(singleTrainData);
            } catch (error) {
                // Handle error if the API call fails
                console.error(error.message);
            }
        };

        fetchData();
    }, [trainNumber]);

    if (!trainData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Single Train Schedule</h1>
            {/* Display single train data here */}
            <div>
                <span>Train Name: {trainData.trainName}</span>
                <span>Train Number: {trainData.trainNumber}</span>
                {/* Display other train details */}
            </div>
        </div>
    );
};

export default SingleTrain;
