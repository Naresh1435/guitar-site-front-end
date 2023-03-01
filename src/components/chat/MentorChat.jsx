import React from "react";
import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import { Loading } from "../dashboard/StudentProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SendContainer,RecieveContainer} from './Chat';
import MuxPlayerComponent from "../learning/MuxPlayer";

function MentorChat(props){
    const role = props.role;
    const [msgState, setMsgState] = useState([]);
    const [studentEmail, setStudentEmail] = useState('');
    const [studentID,setStudentID] = useState();
    const [submitStatus, setSubmit] = useState(1);
    const [click, updateClick] = useState(false);
    
    //api/message/student/639f39e3b4c7c394df0b1ccb/mentor/639f1ec9b509a266a5e98de2
    useEffect(()=>{
        if(studentID != undefined){
            const chatURL = '/app/api/message/student/'+studentID+'/mentor/'+props?.data?._id;
           
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
            const chatURL = '/app/api/message/student/'+studentID+'/mentor/'+props?.data?._id;
            $.post(chatURL,data,(err)=>{
                if(err==='OK'){
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
    const handleAssignTask = ()=>{
        document.getElementById('add-task-con').classList.toggle('hidden');
        
    }
    const handleAssignSubmit = (form)=>{
        form.preventDefault();
        const bodyData = {
            student_id : studentID,
            task_name : form.target.task_name.value,
            task_description : form.target.task_description.value,
            task_type : form.target.task_type.value,
            mentor_id : props.data._id,
        }
        
        form.target.submit.value="...";
        $.post('/app/api/tasks/create',bodyData,(data,err)=>{
            if(err === "success") {
                form.target.reset();
                if(data.res) {
                    form.target.submit.value="Task Assigned!";
                } else {
                    form.target.submit.value="Server Responded with error!";
                }
            } else {
                alert("Something Went Wrong");
            }
        });
    }
    const handleViewTask = ()=> {
        document.getElementById("view-task-con").classList.toggle("hidden");
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
    const TaskCards = (task_data)=>{
        console.log(task_data);
        
        const handleClick = ()=>{
            updateClick((previousClick)=> previousClick = !previousClick);
        }
  
       
   
        console.log(task_data);
        return (
            <div className="mx-2 flex flex p-4 w- mt-4 rounded-md bg-slate-200 shadow-2xl relative" key={task_data._id}>
                <div className="flex-1 flex gap-2 flex-col">
                    <div className="flex p-1 justify-between">
                        <h2 className=" font-semibold text-2xl text-slate-700">{task_data?.task_name}</h2>
                        <p className={`font-semibold text-xl capitalize p-2 ${task_data?.task_status === 'submitted'?'bg-emerald-400': 'bg-red-400'} rounded-md text-white`}>{task_data?.task_status}</p>
                    </div>
                    <hr />
                    <p className="rounded-md  text-sm capitalize">{task_data?.task_description }</p>
                    { task_data.task_status === "submitted"?  
                        task_data.task_type === "image"? <img src={`data:${'image/*'};base64,${Buffer.from(task_data?.task_image).toString('base64')}`}  className="h-40" alt="card img" />
                         :   <MuxPlayerComponent url={task_data?.upload?.mux_playback_id} />
                         :null
                    }
                </div>
                
                
            </div>
        )
    }

    const ViewTasks = (studentData) =>{
        console.log(studentData.student.tasks);
        return (
            <div className="absolute bg-white h-screen z-20 p-4 border border-gray-300 rounded-lg drop-shadow h-screen w-full hidden  mx-auto" id="view-task-con">
                        <div className="bg-emerald-400 h-20 p-4 rounded-md justify-between  flex">
                            <p className="text-lg text-slate-900 font-bold ">View Task</p>
                            <button className="text-2xl " onClick={handleViewTask} ><FontAwesomeIcon icon={"xmark"} /></button>
                        </div>
                        <div className=" flex flex-col h-5/6 gap-2 overflow-y-scroll  mt-2 w-full rounded-b-md">
                            {studentData.student.tasks.map(TaskCards)}
                        </div>
                    </div>
        )
    }

    console.log(props.data);
    console.log((props.data.students.filter((student)=> student.student._id === studentID)));
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
                <div className="bg-emerald-400 flex justify-between items-center rounded-t-lg p-4">
                        <h1 className="text-sm text-white font-semibold">{studentEmail?studentEmail:null }</h1>
                        {studentEmail?
                        <div className="flex gap-2 flex-sm">
                            <button className="text-emerald-400 bg-gray-100 p-2 text-sm rounded-lg" onClick={handleAssignTask}>Assign Task</button>
                            <button className="text-white border-2 border-white text-sm  p-2 rounded-lg" onClick={handleViewTask}>View Tasks</button>
                        </div>
                         : null}
                </div>
                    {
                        studentID? <MessageCon/>:<SelectStudentMessage/> 
                    }
                    <div className="absolute bg-white z-20 p-4 border border-gray-300 rounded-lg drop-shadow h-screen w-full hidden  mx-auto" id="add-task-con">
                        <div className="bg-emerald-400 p-4 rounded-t-md justify-between  flex">
                            <p className="text-lg text-slate-900 font-bold ">Assign Task</p>
                            <button className="text-2xl " onClick={handleAssignTask} ><FontAwesomeIcon icon={"xmark"} /></button>
                        </div>
                        <div className="bg-gray-200 rounded-b-md">
                            <form className="p-6 flex flex-col " onSubmit={handleAssignSubmit}>
                                <div className="w-full p-2 flex ">
                                    <span className="w-1/3 border-2 p-2 rounded-l-md font-bold border-zinc-900 text-white  bg-zinc-900">Task Name</span>
                                    <input type="text" name="task_name" className=" w-2/3 bg-gray-200 p-2 border-2  border-zinc-900 rounded-r-md" placeholder="Enter Here"  id="" />
                                </div>
                                <div className="w-full p-2 flex items-center">
                                    <span className="w-1/3 h-auto py-4  border-2 p-2 rounded-l-md font-bold border-zinc-900 text-white  bg-zinc-900">Task Instructions</span>
                                    <textarea name="task_description" className=" border-2 rounded-r-md w-2/3  p-1 bg-gray-200 border-zinc-900" id="" placeholder="Instructions Here...."></textarea>
                                </div>
                                <div className="w-full p-2 flex">
                                    <span className="w-1/3 p-2 bg-zinc-900 border-2 border-zinc-900 rounded-l-md text-white font-bold">Upload Type</span>
                                    <select name="task_type" className=" w-2/3 border-2 border-zinc-900 rounded-r-md bg-gray-200 p-2"> 
                                        <option value={'image'}> Image</option>
                                        <option value="video">Video</option>
                                    </select>
                                </div>
                                <input className="px-4 cursor-pointer py-2 bg-emerald-400 rounded-md m-2" name="submit" type="submit" value={"Submit"}/>
                            </form>
                        </div>
                    </div>
                    {props.data.students.filter(student=>student.student._id === studentID).map(ViewTasks)}
                <div className="flex justify-center">
                    <form className="w-full flex align-items-center flex-row " onSubmit={sendMessage} >
                        <input className="bg-slate-100 border border-gray-300 w-4/5 rounded-bl-lg focus:outline-none py-4 px-2" type={'text'} name={'message'} placeholder={'Type your message here!'}/>
                        <input className="bg-emerald-400 border border-gray-300 px-1 w-1/5 py-4 font-medium rounded-br-lg  hover:scale-105" name="submit" type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </section>
    )

}
export default MentorChat;