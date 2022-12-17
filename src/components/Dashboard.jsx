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
        <div className="fixed z-30 w-screen">
            <Nav visibility={false}/>
        </div>
        <div className='flex  flex-row '>
            <div className='sidebar pt-16 h-full float-left flex-initial fixed tracking-wide  color-con2 '>
                <SideBar role = {props.role}/>
            </div>
            <div className='flex-1 mt-16 ml-44 h-screen justify-self-center'>
            {props.role==='student'?<StudentDashboad data={data.response} />:props.role==='mentor'?<MentorDashboard data={data.response}/>: <GroupDashboard/>}
            </div>
        </div>
        </section>
    );
}
export default Dashboard;
