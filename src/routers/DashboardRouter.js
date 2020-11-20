import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search } from '../pages/Search';
import { Content } from '../components/Content';

export const DashboardRoutes = () => {
  return (
    <>
      <Header />
      <Content className="container mt-2">
        <Switch>
          {/* <Route exact path="/search/:searchId" component={} /> */}
          <Route exact path="/search" component={Search} />
        </Switch>
      </Content>
      <Footer />
    </>
  );
};
