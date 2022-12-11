import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";

function Chat(props) {
    const role = props.role;
    const [msgState, setState] = useState([]);
    const [mentorName, setMentor] = useState('');
    console.log(props.chatURL);
    useEffect(()=>{
        $.get(props.chatURL,(data,err)=>{
            setState((prev)=>prev = data.chats);
        });
    });    
    function sendMessage(event){
        console.log(event.target.message.value);
        event.preventDefault();
        let data;
        if (props.role){
             data = {
            chatURL : props.chatURL,
            message : event.target.message.value,
            sender : props.role
            }
        }else{            
        }
        
        $.post('/api/postmessage',data,(err)=>{
            console.log(err);
            event.target.message.value="";
        });
    }
    function messageMap(props1) {
        return (
              role?<StudentMessageMap data={props1} /> : <MentorMessageMap data={props1}/>  
        )
    }
    return (
        <section className="flex-1">
            <div className="">
                <div className="bg-cyan-400 h-16 p-2">
                    <img className=" mx-3 w-12 h-12 rounded-full float-left" src={props.data.imgURL} alt='profile_img'/>
                    <h1 className="text-lg font-semibold">{props?.name}</h1>
                </div>
            </div>
            <div className="flex flex-col w-4/5 h-3/5" style={{'overflowX':'visible','overflowY':'scroll'}} >
            {msgState.map(messageMap)}    
            </div>    
            <div className="my-3 w-4/5 flex justify-center">
                <form className="bg-gray-200 rounded  w-2/5" onSubmit={sendMessage} >

                    <input className="bg-gray-200 rounded mx-1 w-80 focus:outline-none p-3" type={'text'} name={'message'} placeholder={'Type your message here!'}/>
                    <input className="bg-blue-400 px-4 py-2 mx-1 font-medium rounded-full self-end hover:bg-blue-700" type="submit" value='Submit' />
                </form>
            </div>
        </section>
    )
}

function SendContainer(props){
    return (
    <div className="flex justify-end mx-2 my-2">
        <div className="flex w-2/5 justify-end">
            <div className="bg-gray-300 w-auto rounded-full p-2">
                <p className="">{props.text}</p>
            </div>
    </div>
</div>)

}

function RecieveContainer(props){
    return (
        <div className="flex justify-start w-2/5 mx-2 my-2">
            <div className="bg-blue-400 w-auto rounded-full p-2">
                <p className="">{props.text}</p>
            </div>
        </div>
    )
}

function MentorMessageMap(props) {
    return (
        props.data.sender?<RecieveContainer text={props.data.text}/> : <SendContainer text={props.data.text}/>
    )
}


function StudentMessageMap(props) {
    return (
        props.data.sender ?<SendContainer text={props.data.text}/>:<RecieveContainer text={props.data.text}/>
        );
}




export {SendContainer,RecieveContainer};
export default Chat;