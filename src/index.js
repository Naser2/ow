import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css'

import PanelHeader from './components/PanelHeader';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from './layout';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
