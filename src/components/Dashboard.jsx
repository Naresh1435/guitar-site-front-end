import React, { useEffect, useState } from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes, useLoaderData} from 'react-router-dom';
import Topnav from './dashboard/Topnav';
import SideBar from './dashboard/SideBar';
import {DashboardDefault, DashboardNav} from './dashboard/DashboardMain';
import $ from 'jquery';

function Dashboard(props) {

    const loadData = useLoaderData();
    console.log(loadData);

    return (
        <div>
        <Topnav/>
        <SideBar/>
        <Routes>
        <Route path='/' element={<DashboardNav/>}/>
        <Route path='programs' element={<section><DashboardNav display="1"/><DashboardDefault/></section>} />
        <Route path='paid-courses' element={<section><DashboardNav display="2"/><DashboardDefault/></section>} />
        <Route path='free-courses' element={<section><DashboardNav display="3"/><DashboardDefault/></section>} />
        </Routes>
        </div>
    )
}
function loadResponse() { 
    $.get('/api/verify',(data,err)=>{
        return err ? false : data;
    });
}


export {loadResponse};
export default Dashboard;
