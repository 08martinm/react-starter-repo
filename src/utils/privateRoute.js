import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

const PrivateRoute = ({ component: Component, handleAuth: handleAuth, auth: Auth, ...rest }) => (
  <Route {...rest} render={props => (
    Auth ? (
      <Component handleAuth={handleAuth} {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }}/>
    )
  )}/>
);

PrivateRoute.propTypes = {
  component: Proptypes.oneOfType([Proptypes.object, Proptypes.func]).isRequired,
  location: Proptypes.object,
  auth: Proptypes.bool.isRequired,
  handleAuth: Proptypes.object.isRequired,
};

export default PrivateRoute;
