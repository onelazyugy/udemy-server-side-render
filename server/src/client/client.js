// Startup point for the client side application which boot up in the browser
// Normal react start up location

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));