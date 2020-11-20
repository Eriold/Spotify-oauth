import React, { useState, useEffect } from 'react';
import { Search as SearchCom } from '../../components/Search';
import { initiateGetResult, initiateLoadMoreAlbums } from '../../state/actions';
import { connect } from 'react-redux';
import { ListTrack } from '../../components/ListTrack';

const Search = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [errorSearch, setErrorSearch] = useState(false);
  const { inValidateSession, albums } = props;

  const { items, total } = albums;

  const handleSearch = (searchTerm) => {
    if (inValidateSession) {
      props.dispatch(initiateGetResult(searchTerm)).then();
    }
    setTextSearch(searchTerm);
  };

  useEffect(() => {
    if (albums !== '') {
      if (items?.length === 0) {
        setErrorSearch(true);
      } else {
        setErrorSearch(false);
      }
    }
  }, [albums, total]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <SearchCom handleSearch={handleSearch} total={total} />
      </div>
      {errorSearch && (
        <div className="d-flex justify-content-center">
          <p className="text-center alert alert-danger col-6 animate__animated animate__fadeIn animate__delay-1s">
            No album found associated with the search:{' '}
            <strong>{textSearch}</strong>
          </p>
        </div>
      )}
      <ListTrack albums={albums} />
    </>
  );
};

const mapState = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapState)(Search);
