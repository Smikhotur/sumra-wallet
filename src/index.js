import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import './i18n';
import {Provider} from 'react-redux';

import store from './store';

const app = (
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
