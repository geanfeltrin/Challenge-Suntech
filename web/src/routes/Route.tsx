import React from 'react';
import {
  Route as ReactRouteDOM,
  RouteProps as RouteDOMProps,
} from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

interface RouteProps extends RouteDOMProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactRouteDOM
      {...rest}
      render={() => (
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      )}
    />
  );
};

export default Route;
