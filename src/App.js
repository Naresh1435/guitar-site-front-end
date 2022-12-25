import React from 'react';
import path from 'path';
import Home from './components/Home';
import Nav from './components/Nav';
import Dashboard from '../src/components/Dashboard';
import Pricing from './components/Pricing';
import {createBrowserRouter, Link, Route, Navigate, useParams, RouterProvider, Router} from 'react-router-dom';
import Explore from './components/Explore';
import RoleSelect from './components/RoleSelect';
import { loadResponse, loadGetResponseMentor,loadGetResponseStudent, loadGetResponseParent, loadGetCourse, loadCourses, loadSingleCourse } from './loader';
import DashboardRoot from './components/dashboard/DashboardRoot'
import LearningPage from './components/learning/LearningPage';
import About from './components/About';
import Contact from './components/Contact';
import CourseDescription from './components/CourseDescription';
import NotAvailable from './components/NotAvailable';

 let router = createBrowserRouter([
  {
    path : '/react',
    element:<div><Nav visiblity={true}/><Home/></div>,
    errorElement : <NotAvailable/>

  },
  {
    path:'/pricing',
    element :<div><Nav visiblity={true} /><Pricing/></div>
  },{
    path:'/about',
    element:<div><Nav visiblity={true}/><About/></div>
  },{
    path:'/contact',
    element:<div><Nav visiblity={true} /><Contact/></div>
  },{
    path:'/dashboard',
    element:<DashboardRoot/>,
    loader : loadResponse,
    children:[
      {
        path:'/student/*',
        element:<Dashboard role='student'/>,
        loader : loadGetResponseStudent,
      },
      {
        path:'mentor/*',
        element: <Dashboard role='mentor'/>,
        loader : loadGetResponseMentor, 
      },{
        path :'group/*',
        element : <Dashboard role="group"/>,
        loader : loadGetResponseParent,
      },{
        path : 'learn/:courseID',
        element : <LearningPage/>,
        loader : loadSingleCourse,
      }
    ]
  },
  {
    path:'/explore',
    element: <div><Nav visiblity={true} /><Explore/></div>,
    loader:loadCourses,
     
  },{
    path :'/:courseID',
    element : <CourseDescription/>,
    loader : loadGetCourse
  }, {
    path :'/select-role',
    element : <RoleSelect/>
  }
]);

export default <RouterProvider router={router}/>;
