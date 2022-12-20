import React from "react";
import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import {SendContainer,RecieveContainer} from './Chat';

function StudentChat(props){
    const [msgState, setState] = useState([]);
    const [mentorName, setMentor] = useState('');
    const [submitStatus, setSubmit] = useState(1);
    console.log(props.chatURL);
    useEffect(()=>{
        $.get(props.chatURL,(data,err)=>{
            console.log(data);
            setState((prev)=>prev = data?.chats);
        });
    },[submitStatus]);
    function sendMessage(event){
        event.preventDefault();
        const data = {
            message : event.target.message.value,
            flag : true
        }
        setSubmit(submitStatus+1);
        $.post(props.chatURL,data,(err)=>{
            console.log(err);
            event.target.message.value="";
        });
    }

    function messageMap(msgMap){
        console.log(msgMap)
        return (
                msgMap.flag ?<SendContainer text={msgMap.text} time={msgMap.created_at} id={msgMap._id} />:<RecieveContainer text={msgMap.text} time={msgMap.created_at} id={msgMap._id} />
        );
        
    }

    return (
        <section className="flex-1 mt-10 mx-2 mb-4 border border-gray-100 rounded-lg drop-shadow">
            <div className="">
                <div className="bg-emerald-400 rounded-t-lg p-4">
                    <h1 className="text-3xl text-white font-semibold">Mentor</h1>
                </div>
            </div>
            <div className="flex flex-col-reverse bg-slate-100 h-screen" style={{'overflowX':'visible','overflowY':'scroll'}} >
            {msgState?.slice(0).reverse().map(messageMap)}    
            </div>    
            <div className="py-3 flex bg-slate-100  justify-center">
                <form className="bg-slate-100 rounded flex align-center " onSubmit={sendMessage} >
                    <input className="bg-slate-100 border border-gray-300 rounded-l-md w-80 focus:outline-none py-2 px-2" type={'text'} name={'message'} placeholder={'Type your message here!'}/>
                    <input className="bg-emerald-400 border border-gray-300 px-4 py-2  font-medium rounded-r-md self-end hover:scale-105" type="submit" value='Submit' />
                </form>
            </div>
        </section>
    )
}


export default StudentChat;