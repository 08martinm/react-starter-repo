import React, {Component} from 'react';
import {BrowserRouter as Router, /*Route,*/ Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
// import PrivateRoute from './privateRoute';
import RouteWithAuth from './routeWithAuth';
import Home from '../pages/home';
// import Verify from '../pages/login/verify';
// import Login from '../pages/login';
// import Reset from '../pages/login/reset';
// import Profile from '../pages/profile';

class App extends Component {
  constructor() {
    super();
    this.state = {loggedin: false, username: null, email: null};
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(username, email) {
    this.setState({loggedin: true, username, email});
  }

  logout() {
    axios.get('/api/logout')
      .then(response => {
        console.log(response);
        this.setState({loggedin: false, username: null, email: null});
      });
  }

  componentDidMount() {
    let self = this;
    axios.get('/api/loggedin')
      .then(response => self.setState({loggedin: true, username: response.data.username, email: response.data.email}))
      .catch(() => self.setState({loggedin: false, username: null, email: null}));
  }

  render() {
    let handleAuth = {
      login: this.login,
      logout: this.logout,
      email: this.state.email,
      username: this.state.username,
      loggedin: this.state.loggedin,
    };

    return (
      <Router>
        <Switch>
          <RouteWithAuth exact path='/' component={Home} handleAuth={handleAuth}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    );
  }
}

export default App;


{/* <RouteWithAuth path="/verify" component={Verify} handleAuth={handleAuth}/>
<RouteWithAuth path='/login' component={Login} handleAuth={handleAuth}/>
<Route path='/reset' component={Reset}/>
<PrivateRoute path='/profile' component={Profile} handleAuth={handleAuth} auth={this.state.loggedin}/> */}