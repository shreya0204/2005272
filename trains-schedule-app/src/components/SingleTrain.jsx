
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../api';
import './SingleTrain.css';

const SingleTrain = () => {
    const { trainNumber } = useParams();
    const [train, setTrain] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const singleTrainData = await getSingleTrain(trainNumber);
                setTrain(singleTrainData);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [trainNumber]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-train-container">
            <h1>{train.trainName} (Train Number: {train.trainNumber})</h1>
            <div className="train-info">
                <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}:{train.departureTime.Seconds}</p>
                <p>Sleeper Price: {train.price.sleeper}</p>
                <p>AC Price: {train.price.AC}</p>
                <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
                <p>AC Seats Available: {train.seatsAvailable.AC}</p>
                <p>Delay (in minutes): {train.delayedBy}</p>
            </div>
            <div className="train-details">
            </div>
        </div>
    );
};

export default SingleTrain;
