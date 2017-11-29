import React from 'react';
import ReactDOM from 'react-dom';
import App from './utils/app';
import { AppContainer } from 'react-hot-loader';

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./utils/app', () => {
    const NextApp = require('./utils/app').default;
    render(NextApp);
  });
}
