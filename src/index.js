import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './Counter';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import mooger from './reducers/moogReducer.js';
import counter from './reducers/countReducer.js';

const store = createStore(combineReducers({counter, mooger}));

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
