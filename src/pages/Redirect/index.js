// import React from 'react';
import { getParams } from '../../helpers/auth';

export const Redirect = ({
  setExpireTime,
  history,
  location,
  isValidSession,
}) => {
  if (!isValidSession) {
    return null;
  }
  try {
    if (location.hash <= 2) {
      return history.push('/search');
    }

    const access_token = getParams(location.hash);
    const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(access_token));
    localStorage.setItem('expire_Time', expiryTime);
    setExpireTime(expiryTime);
    history.push('/search');
  } catch (err) {
    history.push('/');
  }
  return null;
};
