import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import HomeStyles from "../HomeStyles.css"
function SideBar(props){
    return(
        <div className="color-con2 h-screen w-44 ">
        <div className="float-left">
            <div className="w-20">
                <div className="mb-3 h-8">
                    <h1 className="text-white  mt-4 mx-4 font-alkalami text-lg text-center uppercase">{props.role}</h1>
                </div>
                <hr className="w-44 bg-white "/>
                    {props.role==="mentor"?<MentorSideBar/>:props.role==="student"?<StudentSideBar/>:<ParentSideBar/>}
            </div>
        </div>
    </div>
    )
}

function MentorSideBar(){
    return (
        <ul className="">
        <ListElement name='assigned'/>
        <ListElement name='chat'/>
        <ListElement name='tasks'/>
        <ListElement name='profile'/>
        </ul>
    )
}

function StudentSideBar(){
    return (
        <ul className="">
        <ListElement name='courses'/>
        <ListElement name='chat'/>
        <ListElement name='archives'/>
        <ListElement name='profile'/>
        </ul>
    )
}

function ParentSideBar(){
    return (
        <ul>
            <ListElement name='profile'/>
        </ul>
    )
    
}

function ListElement(props){
    return (
        <li className="mt-10 mx-3 text-md capitalize font-alkalami text-white">
           
        <Link to={`${props.name}`}>{props.name}</Link></li>
    )
}


export default SideBar; 