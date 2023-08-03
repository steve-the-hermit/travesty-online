import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from './api';
import SearchComponent from './SearchComponent';
import NavBar from './NavBar';

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
      <NavBar />
      <h3>Good evening</h3>
      <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchResults.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <div className="card-container">
          {searchResults.map((destination) => (
            <div key={destination.id} class="card">
              <div class="image">
                <img src={destination.url} alt={destination.name} />
              </div>
              <div class="content">
                <a href={destination.id}>
                  <span class="title">{destination.name}</span>
                </a>
                <p class="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores,
                  possimus pariatur animi temporibus nesciunt praesentium
                </p>
                <Link to={`/destination/${destination.id}`}>
                  <a class="action" href={destination.id}>
                    Find out more →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <h5 className='author'>By:Macharia, Austin, Krystal, Drake</h5>
    </div>
  );
};

export default DestinationsList;
