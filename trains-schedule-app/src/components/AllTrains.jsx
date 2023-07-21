// src/components/AllTrains.js

import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const AllTrains = () => {
    const [trains, setTrains] = useState([]); // Initialize trains state as an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all trains data and store it in the state
                const allTrainsData = await getAllTrains();
                console.log(allTrainsData);
                setTrains(allTrainsData);
                setLoading(false);
            } catch (error) {
                // Handle error if the API call fails
                console.error(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>All Trains Schedule</h1>
            {/* Display trains data here */}
            <ul>
                {trains.map((train) => (
                    <li key={train.trainNumber}>
                        <span>Train Name: {train.trainName}</span>
                        <span>Train Number: {train.trainNumber}</span>
                        {/* Display other train details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllTrains;
