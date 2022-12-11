import React, { useEffect, useState} from 'react';
import {Route , useLoaderData} from 'react-router-dom';
import Nav from './Nav';
import SideBar from './dashboard/SideBar';
import $ from 'jquery';
import Profile from './dashboard/Profile';
import StudentDashboad from './dashboard/StudentDashboard';
import MentorDashboard from './dashboard/MentorDashboard';
import "./HomeStyles.css";
import GroupDashboard from './dashboard/ParentDashboard';

function Dashboard(props) {
    const data = useLoaderData();
    return (
        <section>
        <Nav visibility={false}/>
        <div className='flex'>
            <div className='flex-initial h-screen color-con2'>
                <SideBar role = {props.role}/>
            </div>
            <div className='flex-1 h-screen'>
            {props.role==='student'?<StudentDashboad data={data.response} />:props.role==='mentor'?<MentorDashboard data={data.response}/>: <GroupDashboard/>}
            </div>
        </div>
        </section>
    );
}
export default Dashboard;
