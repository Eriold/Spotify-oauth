import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useResize } from '../../hooks/useResize';

const Login = ({ isSessionValid, location }) => {
  const {
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const { width } = useResize();

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <>
      {isSessionValid() ? (
        <Redirect to="/search" />
      ) : (
        <div className="text-center row justify-content-center h-100 animate__animated animate__fadeIn">
          <div className="col-md-4 align-self-center">
            {sessionExpired && (
              <p className="alert alert-info animate__animated animate__fadeIn animate__delay-1s">
                Session expired. Please login again or retry later.
              </p>
            )}
            <h1>Welcome to search Spotify App</h1>
            <Button
              type="submit"
              variant="info"
              onClick={handleLogin}
              width={width < 760 ? 100 : 60}
            >
              Click me for login
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default connect()(Login);
