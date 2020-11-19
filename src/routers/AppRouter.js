import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { DashboardRoutes } from './DashboardRoutes';

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
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login isSessionValid={inValidateSession} {...props} />
            )}
          />
          <Route path="/redirect" component={Home} />
          <Route path="/DashboardRoutes" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
