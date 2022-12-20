import React from "react";
import { Route, Routes } from 'react-router-dom';
import AccessDenied from '../AccessDenied';
import MentorChat from '../chat/MentorChat';
import MentorProfile from './MentorProfile';

function MentorDashboard(props){
    // const chatURL = '/api/getmessage/student/'+props.data.students[0].authID+'/mentor/'+props.data.authID;
    function Routes_Mentor(){
        return (
        <Routes>
            <Route path='chat' element = {props.data.students.length !== 0 ?<MentorChat role={false} data={props.data} /> : <AccessDenied access={true} />}/>
            <Route path='profile' element={<MentorProfile mentor = {props.data} img_url = {props.img_url} />}  />
        </Routes>);
    }
    return (
        <div>
        {props.data.status ?<Routes_Mentor/> : <AccessDenied access={true} />  }
        </div>
        )
}




export default MentorDashboard;