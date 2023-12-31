import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">All Trains</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AllTrains />} />
          <Route path="/trains/:trainNumber" element={<SingleTrain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
