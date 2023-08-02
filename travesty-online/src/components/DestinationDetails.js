import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getDestinations, addDestinationToBucketList } from './api';

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

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
          alert(`${destination.name} added to Bucket List!`);
          navigate('/bucketlist');
        })
        .catch((error) => {
          console.error('Error adding destination to Bucket List: ', error);
        });
    }
  };

  if (!destination) {
    return <div>Loading...</div>;
  }

  const attractionsArray = destination.popularAttractions ? destination.popularAttractions.split(',') : [];

  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.url} alt={destination.name} />
      <p>{destination.description}</p>
      <div className="attractions">
        <h3>Popular Attractions:</h3>
        <ul className="attractions-list">
          {attractionsArray.map((attraction) => (
            <li key={attraction}>{attraction.trim()}</li>
          ))}
          </ul>
          </div>
      <p>Popular attractions: {destination.attractions}</p>
      <p>Best time to visit: {destination.bestTimeToVisit}</p>
      <p>Travel tips: <li>{destination.travelTips}</li></p>
      <button onClick={handleAddToBucketList}>Add to Bucket List</button>
      <Link to="/bucketlist">Back to Bucket List</Link>
    </div>
  );
};

export default DestinationDetails;
