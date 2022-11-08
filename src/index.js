import React from 'react';

import ReactDom from 'react-dom';

import App from './App';

import './style/index.css';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root'))