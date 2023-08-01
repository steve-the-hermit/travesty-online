import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDestinations, addDestinationToBucketList } from './api';

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getDestinations()
      .then((data) => {
        const selectedDestination = data.find((dest) => dest.id === parseInt(id));
        setDestination(selectedDestination);
      })
      .catch((error) => {
        console.error('Error fetching destination details: ', error);
      });
  }, [id]);

  const handleAddToBucketList = () => {
    if (destination) {
      addDestinationToBucketList(destination)
        .then(() => {
          alert('Destination added to Bucket List!');
        })
        .catch((error) => {
          console.error('Error adding destination to Bucket List: ', error);
        });
    }
  };

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <button onClick={handleAddToBucketList}>Add to Bucket List</button>
      <Link to="/bucketlist">Back to Bucket List</Link>
    </div>
  );
};

export default DestinationDetails;
