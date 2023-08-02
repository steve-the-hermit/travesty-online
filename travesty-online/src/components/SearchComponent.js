import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from './api';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    getDestinations()
      .then((data) => {
        const results = data.filter((dest) =>
          dest.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error searching destinations: ', error);
      });
  };

  return (
    <div>
      <h2>Search for Destinations</h2>
      <input
        type="text"
        placeholder="Enter destination name"
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destination/${destination.id}`}>{destination.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
