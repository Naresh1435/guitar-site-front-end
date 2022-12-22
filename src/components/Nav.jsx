import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import NavStyles from './NavStyles.css';
import {useState} from 'react';
import { useEffect } from "react";
import $ from 'jquery';

function Nav (props) {
const [obj,updateObj] = useState({auth : false, imgURL : "",role:""});
useEffect(()=>{
    $.get('app/api/verify',(data,err)=>{
        if(data.auth && err==='success') {
            updateObj(data);
        }
    });
    
},[]);



return(
<nav className="nav bg-gray-900 w-full relative flex justify-center z-30 p-2 fixed" id="nav-top">
    <div className="box1 mr-auto justify-start">
        <Link to='/'>
        <img src={Logo} className="ml-4 mt-1 nav h-16 w-16" alt="img" />
        </Link>
        
    </div>
    {props.visiblity && <NavigationContainer/>}
    <div className="box2 justify-end">
    {obj.auth?<Profile imgURL={obj.imgURL} role={obj.role}/> : 
        <div className="flex">
            <RegisterButton/>
        </div>}
    </div>
</nav>
)
}


function NavigationContainer(){
    return(
        <div className="box3 mx-auto justify-center">
    <ul className="flex">

        <li className="text-center  p-4 text-white text-lg">
          <Link to="/explore"> <p className="hover:text-emerald-400 hover:no-underline">Explore</p></Link>
        </li>
        <li className="nav-item text-center p-4  text-white text-lg">
            <Link to="/pricing"><p className="hover:text-emerald-400 hover:no-underline">Pricing</p></Link>
        </li>
        <li className="nav-item text-center   p-4   text-white text-lg">
            <Link to="/about"><p className="hover:text-emerald-400  hover:no-underline">About</p></Link>
        </li>
        <li className="nav-item text-center hover:text-emerald-400  p-4   text-white text-lg">
            <Link to="/contact"><p className="hover:text-emerald-400 hover:no-underline">Contact</p></Link>
        </li>
    </ul>
    </div>
    )
}


function Profile(props){
    function handleProfileClick(){
        $('#nav-toggle').toggleClass('hidden');
    }
return (
<div className="box3 mt-3 text-black relative cursor-pointer" onClick={handleProfileClick}>
    <img className="h-12 w-12 mr-8 rounded-full" src={`${props.imgURL}`} alt="profile" />
    <div className="absolute bg-gray-200 right-8 rounded-md my-2 py-4 px-4 hidden z-10" id="nav-toggle">
        <ul className="text-lg">
            <li className="my-1 hover:scale-105">
                <Link to={`/dashboard/${props.role}/profile`}>
                    <span className="hover:text-emerald-400">Dashboard</span>
                </Link>
            </li>
            <li className="my-1 hover:scale-105 ">
                <a href="/api/logout">
                    <span className="hover:text-emerald-400 hover:no-underline">Logout</span>
                </a>
            </li>
        </ul>
    </div>
</div>
);
}



function RegisterButton() {
    return (
<li className="text-center hover:text-blue-700 mx-2 mt-2 p-2  text-black">
    <Link to='/select-role'><button
        className="bg-emerald-400 hover:bg-black text-white text-lg p-2 rounded">Join Us</button></Link>
</li>)
}


export default Nav;