import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = ({ isSessionValid, location }) => {
  const { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URL } = process.env;

  const handleLogin = () => {
    window.location = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { state } = location;
  return (
    <div>
      <h1>Hello welcome login</h1>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam
        facere voluptatum quidem, provident quis. Unde commodi aspernatur
        assumend
      </p>
    </div>
  );
};

export default connect()(Login);
