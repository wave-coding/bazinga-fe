import React from 'react';

import ReactDom from 'react-dom';

import App from './App';

import { AppProvider } from "./context/useContext";

import './style/index.css';

import 'react-toastify/dist/ReactToastify.css';

ReactDom.render(
    // <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
    // </React.StrictMode>
    , document.getElementById('root'))