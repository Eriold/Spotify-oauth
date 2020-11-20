import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Search from '../pages/Search';
import { Content } from '../components/Content';
import { Detail } from '../pages/Detail';

export const DashboardRoutes = ({ inValidateSession, ...props }) => {
  return (
    <>
      <Header />
      <Content className="container mt-2 w-75">
        <Switch>
          <Route exact path="/detail/:searchId" component={Detail} />
          <Route
            exact
            path="/search"
            render={(p) => (
              <Search inValidateSession={inValidateSession} {...props} />
            )}
          />
        </Switch>
      </Content>
      <Footer />
    </>
  );
};
