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

  //const handleAddToBucketList = () => {
    // if (destination) {
     // addDestinationToBucketList(destination)
       // .then(() => {
          // alert(`${destination.name} added to Bucket List!`);
          // navigate('/bucketlist');
        
      // })
        // .catch((error) => {
          // console.error('Error adding destination to Bucket List: ', error);
        // });
    // }
  // };
  if (!destination) {
    return <div>Loading...</div>;
  }

  // const attractionsArray = destination.popularAttractions ? destination.popularAttractions.split(',') : [];

  return (
    <div>
      <h1>{destination.name}</h1>
      <div className="card-container-details">
            <div key={destination.id} className="card-details">
              <div className="image-details">
                <img src={destination.url} alt={destination.name} />
              </div>
              <div className="content-details">
                  <h4 className="title-details">{destination.description}</h4>
                <p className="desc-details">
                 
                </p>
                <h4>Popular Attractions:</h4>
                <span className='details-attraction'>{destination.attractions}</span>
                <h4>Travel tips:</h4>
                <span className='details-attraction'>{destination.travelTips}</span>
                <h4>Best time to visit: </h4>
                <span className='details-attraction'>{destination.bestTimeToVisit}</span>
              </div>
            </div>
      </div>
      {/* <button className='details-btn'onClick={handleAddToBucketList}>Add to Bucket List</button> */}
      <button className='details-btn' ><Link to="/">Back to home</Link></button>
    </div>
  );
};

export default DestinationDetails;
