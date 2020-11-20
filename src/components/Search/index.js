import React from 'react';
import { Button } from '../Button';
import { useResize } from '../../hooks/useResize';
import { useForm } from '../../hooks/useForm';

export const Search = (props) => {
  const { width } = useResize();
  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchText.trim() !== '') {
      props.handleSearch(searchText);
    }
  };
  return (
    <div className="text-uppercase text-center mt-4 mb-4 col-8">
      <h2>Search your album prefer</h2>
      <p className="text-left">
        Total results: {props.total ? props.total : 0}
      </p>
      <form onSubmit={handleSearch} className="text-center">
        <input
          type="text"
          placeholder="Find your music"
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
        <div className="d-flex justify-content-center">
          <Button type="submit" width={width < 760 ? 100 : 40}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
