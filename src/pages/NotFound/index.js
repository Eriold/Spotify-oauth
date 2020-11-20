import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

export const NotFound = () => {
  return (
    <Container>
      <div className="justify-content-center text-center text-danger">
        <h1>Error site no found</h1>
        <hr className="col-4" />
        <img src="https://http.cat/404" alt="" width="450" />
        <p className="mt-4">Please try later or going to back </p>
      </div>
    </Container>
  );
};
