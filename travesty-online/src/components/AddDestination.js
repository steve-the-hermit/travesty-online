import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDestinationToBucketList } from './api';
import NavBar from './NavBar';

const AddDestination = () => {
  const navigate = useNavigate();

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
      .then(() => {  alert(`${destination.name} added to Bucket List!`);
        navigate('/bucketlist');
      })
      .catch((error) => {
        console.error('Error adding destination to bucket list:', error);
      });
  };

  return (
    <div>
      <NavBar />
      <h3>Add Destination</h3>
      <section class="section_form">
        <form id="consultation-form" class="feed-form" onSubmit={handleSubmit}>
          <input
            required
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={destination.name}
          />
          <input
            required
            placeholder="Description"
            type="text"
            name="description"
            onChange={handleChange}
            value={destination.description}
          />
          <input
            required
            placeholder="Image URL"
            type="text"
            name="image"
            onChange={handleChange}
            value={destination.image}
          />
          <button className="button_submit" type="submit">
            Add
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddDestination;
