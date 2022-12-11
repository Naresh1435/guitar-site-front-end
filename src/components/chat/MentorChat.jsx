import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";

function MentorChat(props){
    const role = props.role;
    const [msgState, setMsgState] = useState([]);
    const [studentEmail, setStudentEmail] = useState('');
    console.log(props.chatURL);
    useEffect(()=>{
        $.get(props.chatURL,(data,err)=>{
            setMsgState((prev)=>prev = data.chats);
        });
    }); 
}


export default MentorChat;