import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faTelegram,faInstagram,faDiscord } from '@fortawesome/free-brands-svg-icons';
import App from './App';

library.add(far,fas,faArrowRight,faFacebook,faTelegram,faInstagram,faDiscord);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode><RouterProvider router={App.props.router}/></React.StrictMode>
);
