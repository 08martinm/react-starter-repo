import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Nav from './components/nav';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='row'>
        Hello world!
      </div>
    );
  }
}

Home.propTypes = {
  handleAuth: PropTypes.object.isRequired,
};

export default Home;

{/* <Nav handleAuth={this.props.handleAuth} /> */}