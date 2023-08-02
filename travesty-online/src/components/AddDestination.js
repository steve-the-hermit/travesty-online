import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Fix the import statement for useHistory
import { addDestinationToBucketList } from './api';

const AddDestination = () => {
  const navigate = useNavigate(); // Use useHistory here

  const [destination, setDestination] = useState({
    name: '',
    description: '',
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDestination({ ...destination, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDestinationToBucketList(destination)
      .then(() => {
        navigate('/bucketlist');
      })
      .catch((error) => {
        console.error('Error adding destination to bucket list:', error);
      });
  };


  return (
    <div>
      <h2>Add Destination</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={destination.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={destination.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={destination.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add to Bucket List</button>
      </form>
    </div>
  );
};

export default AddDestination;
