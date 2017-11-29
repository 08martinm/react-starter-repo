import React from 'react';
import {Route} from 'react-router-dom';
import Proptypes from 'prop-types';

const RouteWithAuth = ({component: Component, handleAuth: handleAuth, ...rest}) => (
  <Route {...rest} render={props => {
    return <Component handleAuth={handleAuth} {...props}/>;}
  } />
);

RouteWithAuth.propTypes = {
  component: Proptypes.oneOfType([Proptypes.object, Proptypes.func]).isRequired,
  handleAuth: Proptypes.object.isRequired,
};

export default RouteWithAuth;
