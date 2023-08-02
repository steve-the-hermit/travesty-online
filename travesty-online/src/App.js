import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationsList from './components/DestinationsList';
import DestinationDetails from './components/DestinationDetails';
import BucketList from './components/BucketList';
import AddDestination from './components/AddDestination';
import SearchComponent from './components/SearchComponent';
import { getDestinations } from './components/api'; 



function App() {
  const [ destinations, setDestinations] = React.useState([]);

  React.useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsData = await getDestinations();
        setDestinations(destinationsData);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DestinationsList />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/bucketlist" element={<BucketList />} />
          <Route path="/add" element={<AddDestination />} />
          <Route path="/search" element={<SearchComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
