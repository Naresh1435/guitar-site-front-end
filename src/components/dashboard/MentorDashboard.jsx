import { Route, Routes } from 'react-router-dom';
import AccessDenied from '../AccessDenied';
import Chat from '../chat/Chat';

function MentorDashboard(props){
    // const chatURL = '/api/getmessage/student/'+props.data.students[0].authID+'/mentor/'+props.data.authID;
    
    function Routes_Mentor(){
        return (<Routes>
            <Route path='chat' element = {props.data.students.length !== 0 ?<Chat role={false} data={props.data} name={props.data.students[0].student_name} chatURL={props.data.students}/> : <AccessDenied/>}/>
            </Routes>);
    }
    return (
        <div>
        {props.data.status ?<Routes_Mentor/> : <AccessDenied/>  }
        </div>
        )
}




export default MentorDashboard;