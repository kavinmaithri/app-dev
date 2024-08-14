import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';
import store from './components/store';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);
