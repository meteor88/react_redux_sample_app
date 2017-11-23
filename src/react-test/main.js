import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import '../lib/css/bootstrap.min.css';
import counterApp from './reducers/counterReducer';

const store = createStore(counterApp);
var rootElement = document.getElementById('react-root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
