import React from 'react';


const SearchComponent = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="InputContainer">
        <input
          placeholder="Search destination.."
          id="input"
          className="input"
          name="text"
          type="text"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
