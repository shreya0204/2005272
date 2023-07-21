import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTrains } from '../api';
import './AllTrains.css';

const AllTrains = () => {
    const [trains, setTrains] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allTrainsData = await getAllTrains();
                setTrains(allTrainsData);
                setLoading(false);
            } catch (error) {
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
        <div className="all-trains-container">
            <h1>All Trains Schedule</h1>
            <table className="trains-table">
                <thead>
                    <tr>
                        <th>Train Name</th>
                        <th>Train Number</th>
                        <th>Departure Time</th>
                        <th>Sleeper Price</th>
                        <th>AC Price</th>
                        <th>Sleeper Seats</th>
                        <th>AC Seats</th>
                        <th>Delay (in minutes)</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train) => (
                        <tr key={train.trainNumber} className="train-row">
                            <td>
                                <Link to={`/trains/${train.trainNumber}`} className="train-link">
                                    {train.trainName}
                                </Link>
                            </td>
                            <td>{train.trainNumber}</td>
                            <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
                            <td>{train.price.sleeper}</td>
                            <td>{train.price.AC}</td>
                            <td>{train.seatsAvailable.sleeper}</td>
                            <td>{train.seatsAvailable.AC}</td>
                            <td>{train.delayedBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTrains;
