import React from "react";
import {DashboardNav,DashboardDefault} from './DashboardMain';
import {Route, Routes} from 'react-router-dom';
import StudentChat from '../chat/StudentChat';
import AccessDenied from '../AccessDenied';
import CoursePage from './CoursePage';
import StudentProfile from './StudentProfile';
import StudentArchives from './StudentArchives';
import NotAvailable from '../NotAvailable';
import ArchivePage from './ArchivePage';
import Tasks from './Tasks';
import Carousel from './Carousel';
function StudentDashboad(props){
    let chatURL;
    if (props?.data?.subscribed_plan !== 'free' && props?.data?.mentor_status){
        const  mentor_id =String(props?.data?.current_mentor?.mentor?._id);
        chatURL = '/app/api/message/student/'+props?.data?._id+'/mentor/'+mentor_id;
    }
    return (
        <Routes>
        <Route path='chat' element={(props?.data?.subscribed_plan !=='free' && props?.data?.mentor_status)?<StudentChat role={true} data={props.data} chatURL={chatURL}/>:<AccessDenied access={props.data.subscribed_plan==='free'?false:true}/>} />
        <Route path='courses' element = {<section> <Carousel/> <DashboardNav/><DashboardDefault data={props?.data?.enrolled_courses} error={<NotAvailable/>} /></section>}>
        <Route path=':plan' element= { <section > <Carousel/> <DashboardDefault data={props?.data?.enrolled_courses}/> </section>} />
        </Route>
        <Route path='view/:courseID' element={<CoursePage/>}/>
        <Route path='profile' element={<StudentProfile/>} error={<NotAvailable/>} />
        <Route path='archives' element={<StudentArchives/>} />
        <Route path='archives/:archiveID' element={<ArchivePage/>} />
        <Route path='tasks' element = {props?.data?.subscribed_plan !== 'free' && props?.data?.mentor_status ?<Tasks data={props.data} /> : <AccessDenied access={props.data.subscribed_plan==='free'?false:true}/>} />
        </Routes>
    )
}



export default StudentDashboad;