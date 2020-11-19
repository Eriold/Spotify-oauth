import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

export const Error = () => {
  return (
    <Container>
      <h1>Error site no found</h1>
      <hr />
      <p>Please try later or going to back </p>
    </Container>
  );
};
