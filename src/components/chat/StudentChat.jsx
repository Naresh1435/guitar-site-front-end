import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import {SendContainer,RecieveContainer} from './Chat';

function StudentChat(props){
    const [msgState, setState] = useState([]);
    const [mentorName, setMentor] = useState('');
    console.log(props.chatURL);
    useEffect(()=>{
        $.get(props.chatURL,(data,err)=>{
            console.log(data);
            setState((prev)=>prev = data?.chats);
        });
    });
    function sendMessage(event){
        event.preventDefault();
        const data = {
            message : event.target.message.value,
            sender : true
        }
        $.post(props.chatURL,data,(err)=>{
            console.log(err);
            event.target.message.value="";
        });
    }

    function messageMap(msgMap){
       
        return (
                props.data.sender ?<SendContainer text={props.data.text}/>:<RecieveContainer text={props.data.text}/>
        );
        
    }

    return (
        <section className="flex-1 mt-2">
            <div className="">
                <div className="bg-emerald-400  p-10">
                    <h1 className="text-3xl text-white font-semibold">Mentor</h1>
                </div>
            </div>
            <div className="flex flex-col h-96" style={{'overflowX':'visible','overflowY':'scroll'}} >
            {msgState?.map(messageMap)}    
            </div>    
            <div className="my-3 flex  justify-center">
                <form className="bg-gray-200 rounded flex align-center " onSubmit={sendMessage} >
                    <input className="bg-gray-200 rounded-l-md mx-1 w-80 focus:outline-none py-2 px-2" type={'text'} name={'message'} placeholder={'Type your message here!'}/>
                    <input className="bg-emerald-400 px-4 py-2  font-medium rounded-r-md self-end hover:scale-105" type="submit" value='Submit' />
                </form>
            </div>
        </section>
    )
}


export default StudentChat;