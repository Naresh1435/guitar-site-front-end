import React from 'react';
import Home from './components/Home';
import $ from 'jquery';
import Nav from './components/Nav';
import Dashboard, { loadResponse } from './components/Dashboard';
import Pricing from './components/Pricing';
import {createBrowserRouter, Link, Route, Navigate, useParams, RouterProvider, createRoutesFromElements, Router} from 'react-router-dom';
import Explore from './components/Explore';
import RoleSelect from './components/RoleSelect';

 let router = createBrowserRouter([
  {
    path : '/',
    element:<div><Nav/><Home/></div>,
    children : [
      
    ]
  },
  {
    path:'pricing',
    element :<div><Nav/><Pricing/></div>
  },{
    path:'dashboard/*',
    element:<Dashboard/>,
    loader : loadResponse,
    children : [
    ]
  },{
    path:'explore/*',
    element: <Explore/>
  }, {
    path :'/select-role',
    element : <RoleSelect/>
  }
]);

export default <RouterProvider router={router}/>;
