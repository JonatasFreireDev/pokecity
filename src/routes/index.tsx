import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="*"
        component={() => <ErrorMessage message="Está página não existe" />}
      />
    </Switch>
  );
};

export default Routes;
