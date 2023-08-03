import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBucketList } from './api';

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);
  useEffect(() => {
    fetchBucketList()
      .then((data) => {
        setBucketList(data);
      })
      .catch((error) => {
        console.error('Error fetching bucket list: ', error);
      });
  }, []);

  return (
    <div>
    <h2>My Bucket List</h2>
    {bucketList.length === 0 ? (
      <p>No destinations in your bucket list.</p>
    ) : (
      <ul>
        {bucketList.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destination/${destination.id}`}>
              <h3>{destination.name}</h3>
              <img src={destination.url} alt={destination.name} />
            </Link>
          </li>
        ))}
      </ul>
      
    )}
    <Link to="/add">Add Destination</Link>
  </div>
  );
};

export default BucketList;
