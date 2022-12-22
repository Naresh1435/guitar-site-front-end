import React from "react";
import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import { Loading } from "../dashboard/StudentProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SendContainer,RecieveContainer} from './Chat';

function MentorChat(props){
    const role = props.role;
    const [msgState, setMsgState] = useState([]);
    const [studentEmail, setStudentEmail] = useState('');
    const [studentID,setStudentID] = useState();
    const [submitStatus, setSubmit] = useState(1);
    console.log(props.data);
    //api/message/student/639f39e3b4c7c394df0b1ccb/mentor/639f1ec9b509a266a5e98de2
    useEffect(()=>{
        if(studentID != undefined){
            const chatURL = 'app/api/message/student/'+studentID+'/mentor/'+props?.data?._id;
            console.log(chatURL);
            $.get(chatURL,(data,err)=>{
                setMsgState((prev)=>prev = data.chats);
            })
        }
    },[submitStatus,studentID]);
    const UpdateStudentIdState = (event) =>{
        setStudentID(event.target.id);
        setStudentEmail(event.target.value);
    }
    const sendMessage = (event)=>{
        if(studentID != undefined){
            event.preventDefault();
            const data = {
                message : event.target.message.value,
                flag : false
            }
            const chatURL = 'app/api/message/student/'+studentID+'/mentor/'+props?.data?._id;
            $.post(chatURL,data,(err)=>{
                if(err=='OK'){
                    event.target.message.value="";
                    setSubmit(submitStatus+1);
                } else {
                    console.log(err);
                    alert('Something went wrong')
                }
                
            });
            
        }
    }

    const handleChooseUser = (event)=>{
        event.target.classList.toggle('rounded-lg');
        event.target.classList.toggle('rounded-t-lg');
        event.target.nextSibling.classList.toggle('hidden');
    }
    const UserList = (studList)=> {
        return(
            <div className="flex align-items-center p-2" key={studList.student._id} >
                <span className="bg-emerald-400 p-1 mx-1 rounded-full"></span>
                <input className="text-sm p-1 hover:text-emerald-400 cursor-pointer bg-slate-100 w-100 focus:outline-none" type='text' id={studList.student._id} onClick={UpdateStudentIdState}  value={studList.student.email} readOnly/>
            </div>
        )
    }
    const UserGroupList = (groupList)=> {
        return(
            <div className="flex align-items-center p-2 " key={groupList.member._id} >
                <span className="bg-emerald-400 p-1 mx-1 rounded-full"></span>
                <input className="text-sm p-1 hover:text-emerald-400 cursor-pointer bg-slate-100 w-100 focus:outline-none" type='text' id={groupList.member._id} onClick={UpdateStudentIdState}  value={groupList.member.email} readOnly/>
            </div>
        )
    }
    const GroupList = (groupList) =>{
        return(
            <div className="flex m-2 flex-col" key={groupList.student._id}>
                <button type="button" className="text-slate-800 focus:oultine-none flex align-items-center gap-2 text-left px-1  py-2 rounded-lg border-2 border-emerald-400" onClick={handleChooseUser} >{groupList.student.email}</button>
                <div className="flex flex-col border-b-2 border-x-2 border-emerald-400 hidden -mt-1 rounded-b-lg">
                    {groupList.student.group_members.map(UserGroupList)}
                </div>
            </div> 
        )
    }
    const messageMap= (msgMap)=>{
        console.log(msgMap)
        return (
                msgMap.flag ?<RecieveContainer text={msgMap.text} id={msgMap._id} time={msgMap.created_at} />:<SendContainer text={msgMap.text} time={msgMap.created_at} id={msgMap._id} />
        );
        
    }
    const MessageCon = () =>{
        return(
            <div className="flex-1 flex flex-col-reverse bg-slate-100  " style={{'overflowX':'visible','overflowY':'scroll'}} >
                {msgState?.slice(0).reverse().map(messageMap)}    
            </div>
        )
    }
    const SelectStudentMessage = () =>{
        return (
            <div className="h-screen">
            <div className="m-auto text-center ">
                <div className="p-4">
                <p className="text-3xl text-emerald-400 font-semibold underline decoration-gray-300 relative">Welcome Back!</p>
                <p className="text-lg mt-4 text-gray-500">Select student to begin conversation.</p>
                </div>
            </div>
        </div>
        )
    }
    return (
        <section className="flex mt-10 mx-4 gap-2 flex-row">
            <div className="flex-initial border border-gray-300 drop-shadow-md w-2/6  overflow-scroll rounded-lg p-4 flex flex-col">
                <div>
                    <div className="mx-2 drop-shadow ">
                        <button type="button" className="font-semibold text-white px-4 py-2 w-full rounded-lg bg-emerald-400" onClick={handleChooseUser} >Students</button>
                        <div className="flex flex-col border border-gray-300 -mt-1 rounded-b-lg hidden bg-slate-100">
                            
                            {props.data.students.map(UserList)}
                        </div>
                    </div>
                    <div className="mx-2 drop-shadow  mt-4 ">
                        <button type="button" className="font-semibold text-white focus:oultine-none px-4 py-2 w-full rounded-lg bg-emerald-400" onClick={handleChooseUser} >Groups</button>
                        <div className="flex flex-col border border-gray-300 -mt-1 gap-2 rounded-b-lg hidden bg-slate-100">
                           {props.data.groups.map(GroupList)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col w-4/6 h-screen rounded-lg border border-gray-300 relative drop-shadow">
                <div className="bg-emerald-400 rounded-t-lg p-2">
                        <h1 className="text-sm text-white font-semibold">{studentEmail?studentEmail:null }</h1>
                </div>
                    {
                        studentID? <MessageCon/>:<SelectStudentMessage/> 
                    }
                
                <div className="flex justify-center">
                    <form className="w-full flex align-items-center flex-row " onSubmit={sendMessage} >
                        <input className="bg-slate-100 border border-gray-300 w-4/5 rounded-bl-lg focus:outline-none py-4 px-2" type={'text'} name={'message'} placeholder={'Type your message here!'}/>
                        <input className="bg-emerald-400 border border-gray-300 px-1 w-1/5 py-4 font-medium rounded-br-lg  hover:scale-105" type="submit" value='Submit' />
                    </form>
                </div>
            </div>
             
        </section>
    )

}



export default MentorChat;