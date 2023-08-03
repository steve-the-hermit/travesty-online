import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBucketList } from './api';
import SearchComponent from './SearchComponent';
import NavBar from './NavBar';

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchBucketList()
      .then((data) => {
        setBucketList(data);
      })
      .catch((error) => {
        console.error('Error fetching bucket list: ', error);
      });
  }, []);

  useEffect(() => {
    const results = bucketList.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [bucketList, searchQuery]);

  return (
    <div>
      <NavBar />
      <h3>Your Travel BucketList</h3>
      <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchResults.length === 0 ? (
        <p>No destinations in your bucket list.</p>
      ) : (
        <div className="card-container">
          {searchResults.map((destination) => (
            <div key={destination.id} className="card">
              <div className="image">
                <img src={destination.url} alt={destination.name} />
              </div>
              <div className="content">
                <Link to={`/destination/${destination.id}`}>
                  <span className="title">{destination.name}</span>
                </Link>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores,
                  possimus pariatur animi temporibus nesciunt praesentium
                </p>
                <Link to={`/destination/${destination.id}`}>
                  <a className="action" href={destination.id}>
                    Find out more →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BucketList;
