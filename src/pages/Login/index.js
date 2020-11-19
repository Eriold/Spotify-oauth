import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useResize } from '../../hooks/useResize';

const Login = ({ isSessionValid, location }) => {
  const { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URL } = process.env;

  const { width } = useResize();

  const handleLogin = () => {
    window.location = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { state } = location;
  return (
    <>
      {isSessionValid ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="text-center row justify-content-center h-100">
          <div className=" col-md-4 align-self-center">
            <p className="alert alert-info">
              Session expired. Please login again or retry later.
            </p>
            <Button width={width < 760 ? 100 : 60}>Click me for login</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default connect()(Login);
