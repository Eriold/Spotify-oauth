import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  min-height: 15vh;
`;

export const Header = () => {
  return (
    <Head className="navbar navbar-light justify-content-center bg-info">
      <div className="navbar-brand color-pink text-white">
        <h2>Welcome La Manicurista</h2>
      </div>
    </Head>
  );
};
