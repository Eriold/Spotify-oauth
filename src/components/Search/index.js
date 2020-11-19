import React from 'react';
import { Button } from '../Button';

export const Search = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Show me form');
  };
  return (
    <div className="text-uppercase text-center mt-4 mb-4 col-8">
      <h2>Search your album prefer</h2>
      <form onSubmit={handleSearch} className="text-center">
        <input
          type="text"
          placeholder="Find your music"
          className="form-control"
          name="searchText"
          autoComplete="off"
        />
        <div className="d-flex justify-content-center">
          <Button width={25}>Search</Button>
        </div>
      </form>
    </div>
  );
};
