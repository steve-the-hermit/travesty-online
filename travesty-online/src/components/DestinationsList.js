import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from './api';

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations()
      .then((data) => {
        if (Array.isArray(data)) {
          setDestinations(data);
        } else {
          console.error('Error: Data is not an array');
        }
      })
      .catch((error) => {
        console.error('Error fetching destinations:', error);
      });
  }, []);

  return (
    <div>
      <h2>Destinations List</h2>
      {destinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id}>
              <Link to={`/destination/${destination.id}`}>
                <h3>{destination.name}</h3>
                <img src={destination.image} alt={destination.name} />
              </Link>
              <p>{destination.description}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationsList;
