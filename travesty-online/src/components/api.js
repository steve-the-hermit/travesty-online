const BASE_URL = 'http://localhost:3002'; 

export const getDestinations = () => {
  return fetch(`${BASE_URL}/destinations`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error fetching destinations:', error);
      return [];
    });
};

export const addDestination = (newDestination) => {
  return fetch(`${BASE_URL}/destinations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDestination),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error adding destination:', error);
    });
};

export const addDestinationToBucketList = async (destination) => {
  try {
    const response = await fetch(`${BASE_URL}/bucketlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destination),
    });

    if (!response.ok) {
      throw new Error('Failed to add destination to Bucket List');
    }

    
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBucketList = () => {
  return fetch(`${BASE_URL}/bucketlist`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch bucket list');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching bucket list:', error);
      return [];
    });
};
  