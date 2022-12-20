import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import React from "react";


function SendContainer(props){
    const date = new Date(props.time).toLocaleDateString();
    return (
    <div className="flex justify-end mx-2 my-2" key={props.key}>
        <div className="flex w-4/5 justify-end">
            <div className="bg-gray-300 w-auto text-md rounded-t-xl rounded-l-xl relative p-2">
                <p className="">{props.text}</p>
                <span className="text-sm font-thin" style={{fontSize : "10px"}} >{date}</span>
            </div>
    </div>
</div>)

}

function RecieveContainer(props){
    const date = new Date(props.time).toLocaleDateString();
    return (
        <div className="flex justify-start w-4/5 mx-2 my-2" key={props.key}>
            <div className="bg-blue-400 w-auto text-md rounded-t-xl rounded-r-xl relative p-2">
                <p className="">{props.text}</p>
                <span className="text-sm font-thin" style={{fontSize : "10px"}} >{date}</span>
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