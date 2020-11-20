import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  min-height: 8vh;
`;

export const Footer = () => {
  return (
    <Foot className="page-footer font-small bg-success">
      <div className="footer-copyright text-center py-3 text-white">
        © 2020 by Daniel Camilo Montoya
      </div>
    </Foot>
  );
};
