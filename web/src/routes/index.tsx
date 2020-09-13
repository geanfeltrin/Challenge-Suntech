import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import CreateResidences from '../pages/CreateResidences';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-residences" exact component={CreateResidences} />
    </Switch>
  );
};

export default Routes;
