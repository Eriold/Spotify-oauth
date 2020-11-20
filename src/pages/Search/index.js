import React from 'react';
import { Search as SearchCom } from '../../components/Search';

export const Search = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <SearchCom />
      </div>
      <div className="d-flex justify-content-center">
        <p className="text-center alert alert-danger col-6 animate__animated animate__fadeIn animate__delay-1s">
          No album found associated with the search
        </p>
      </div>
    </>
  );
};
