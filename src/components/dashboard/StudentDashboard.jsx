import {DashboardNav,DashboardDefault} from './DashboardMain';
import {Route, Routes} from 'react-router-dom';
import StudentChat from '../chat/StudentChat';
import AccessDenied from '../AccessDenied';
import CoursePage from './CoursePage';
import StudentProfile from './StudentProfile';
import StudentArchives from './StudentArchives';

function StudentDashboad(props){
    let chatURL;
    if (props.data.subscribed_plan !== 'free' && props.data.mentor_status){
        chatURL = '/api/message/student/'+props.data.authID+'/mentor/'+props.data.current_mentor.mentor_auth_id;
    }
    return (
        <Routes>
        <Route path='chat' element={(props.data.subscribed_plan !=='free' && props.data.mentor_status)?<StudentChat role={true} data={props.data} chatURL={chatURL}/>:<AccessDenied access={props.data.subscribed_plan==='free'?false:true}/>} />
        <Route path='courses' element = {<section><DashboardNav/><DashboardDefault data={props.data.enrolled_courses} /></section>}>
        <Route path=':plan' element={<DashboardDefault data={props.data.enrolled_courses}/>} />
        </Route>
        <Route path='view/:courseID' element={<CoursePage/>}/>
        <Route path='profile' element={<StudentProfile/>}/>
        <Route path='archives' element={props.data.subscribed_plan !=='fre'?<StudentArchives/>:<AccessDenied access={false}/>} />
        </Routes>
    )
}



export default StudentDashboad;