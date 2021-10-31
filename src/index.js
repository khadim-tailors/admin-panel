import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import reducers from './store/reducers/index';
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
        <App />
        </Provider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();