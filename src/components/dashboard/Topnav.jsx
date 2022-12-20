import React from "react";
import {useEffect,useRef} from 'react';
import {Link} from 'react';
import $ from 'jquery';
import Logo from '../../img/logo.png'
function  Topnav(props){
    
    return (
        <nav className="bg-gray-700 p-2">
        <div className="flex justify-end">
            <div className="box1 mr-auto justify-start ">
              <img className="mt-1 font-bold w-14 h-14 rounded" src={Logo} />
            </div>
            <div className="box3 text-black">
                <img className="h-12 w-12 mr-2 rounded-full" src={`${props.imgURL}`} alt="profile"/>
            </div>
        </div>
    </nav>
    
    );
}




export default Topnav;