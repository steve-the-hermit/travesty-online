import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from './api';
import SearchComponent from './SearchComponent';

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getDestinations()
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => {
        console.error('Error fetching destinations:', error);
      });
  }, []);

  useEffect(() => {
    const results = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [destinations, searchQuery]);

  return (
    <div>
      <h2>Destinations List</h2>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search by destination name"
      />
      {searchResults.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <ul>
          {searchResults.map((destination) => (
            <li key={destination.id}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <Link to={`/destination/${destination.id}`}>
              <img src={destination.image} alt={destination.name} />
              </Link>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationsList;
