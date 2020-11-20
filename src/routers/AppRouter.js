import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from '../pages/Redirect';
import Login from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { DashboardRoutes } from './DashboardRouter';

export const AppRouter = () => {
  const [expireTime, setExpireTime] = useState('0');

  useEffect(() => {
    try {
      setExpireTime(JSON.parse(localStorage.getItem('expire_Time')));
    } catch (err) {
      setExpireTime('0');
    }
  }, []);

  const inValidateSession = () => {
    const currenTime = new Date().getTime();
    const isSessionValid = currenTime < expireTime;
    return isSessionValid;
  };

  return (
    <Router>
      <div className="vh-100 vw-100">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login isSessionValid={inValidateSession} {...props} />
            )}
          />
          <Route
            path="/redirect"
            render={(props) => (
              <Redirect
                isValidSession={inValidateSession}
                setExpiryTime={setExpireTime}
                {...props}
              />
            )}
          />
          {inValidateSession() && (
            <Route
              exact
              path="/search"
              render={(props) => (
                <DashboardRoutes
                  inValidateSession={inValidateSession()}
                  {...props}
                />
              )}
            />
          )}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
