import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { InfinitySpin } from  'react-loader-spinner'

function StudentProfile (){
    const [ProfileData,updateProfileData] = useState();
    const [currentPos, updatePos] = useState("Profile");
    const handlePointer = (e) =>{
        updatePos(e.target.innerText);
    }
    useEffect(()=>{
        $.get('/api/user/profile?role=student',(data,err)=>{
        if(err==='success'){
            console.log(data);
            updateProfileData(data);    
        } else {
            console.log(err);
            alert('Something went wrong!');
        }
        
        });
    },[]);
    return (
    <div className="container">
       <div className="mt-8">
            <ul className="flex gap-8 justify-left text-slate-800 font-semibold text-lg capitalize ">
                <li className=""><span className=" hover:text-emerald-400 cursor-pointer" onClick={handlePointer}>profile</span>
                <NavPointer/>
                </li>
                
            </ul>
        </div>
        {ProfileData ?<Profile imgURL = {ProfileData?.img_url} profile_data= {ProfileData}  />:<Loading/>}
    </div>
    )
}

function NavPointer(){
    return(
        <div className="bg-emerald-400 h-1 w-full"></div>
        
    )
}

function Loading(){
    return (
        <div className="flex justify-center align-center h-auto w-auto">
            <InfinitySpin width="200"/>
        </div>
    )
}

function Profile(props) {
    function SubscribedUsers (){
        const Next_due_date = new Date(props?.profile_data?.subscription_data?.current_end*1000);
        const End_due_date = new Date(props?.profile_data?.subscription_data?.end_at*1000);
        return(
            <div className="grid grid-cols-2 mt-2 gap-4 justify-around p-3 w-full text-sm">
                <div className="flex">
                    <div className="p-2 bg-slate-900 w-1/2 text-white rounded-l-lg">
                        <span>Subcription ID</span>
                    </div>
                    <div className="w-1/2">
                            <input type="text" value={props.profile_data?.user_data?.subscription_id} className="border-2 border-slate-900 p-2 rounded-r-lg w-90 focus:outline-none w-full bg-slate-200 " readOnly/>
                    </div>
                </div>
                
                <div className="flex">
                    <div className="w-1/2 bg-slate-900 p-2 text-white rounded-l-lg">
                        <span>Next Due</span>
                    </div>
                    <div className="w-1/2">
                            <input type="text" value={Next_due_date.toDateString()} className="border-2 border-slate-900 p-2 text-amber-400 rounded-r-lg w-full focus:outline-none bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex col-span-2">
                    <div className="w-1/2 p-2  bg-slate-900 text-white rounded-l-lg">
                        <span>Subscription Expiry</span>
                    </div>
                    <div className="w-1/2">
                            <input type="text" value={End_due_date.toDateString()} className="h-auto border-2 border-slate-900 p-2 text-red-400 rounded-r-lg w-full focus:outline-none bg-slate-200 " readOnly/>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container mt-10 justify-center rounded-lg bg-slate-200 p-4 w-2/3">
            <div className="mt-8 h-20 ">
                <img src={props?.imgURL} alt="img" className="rounded-full mx-auto h-16 w-16 justify-center" />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-10 justify-around p-3">
                <div className="flex ">
                    <div className="px-3 w-1/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Email</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.email} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 w-1/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Auth ID</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.authID} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-100 focus:outline-none w-100 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2 w-1/3 bg-slate-900 text-white w-1/3 rounded-l-lg ">
                        <span>Plan</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.subscribed_plan} className="border-2 border-slate-900 p-2 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 capitalize " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 w-1/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Type</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.group_status ? 'Group' : 'Individual'} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200  " readOnly/>
                    </div>
                </div>
                <div className="flex col-span-2">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Enrolled Courses</span>
                    </div>
                    <div className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.enrolled_courses.length} className="focus:outline-none w-2/3 bg-slate-200 " readOnly/>
                    </div>
                </div>
                {
                    props.profile_data?.user_data?.mentor_status ?
                    <div className="flex col-span-2">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg w-1/3 ">
                        <span>Current Mentor</span>
                    </div>
                    <div className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-2/3">
                        <input type="text" value={props.profile_data?.user_data?.current_mentor?.mentor?.email} className="focus:outline-none bg-slate-200 w-2/3 " readOnly/>
                    </div>
                    </div>
                : null}
                
            </div>
            {
                    props.profile_data?.user_data?.subscribed_plan !=='free'?
                    <SubscribedUsers/>
                    : null
                }
        </div>
    )
}



function Courses(props){
    return(
        <h1>Courses</h1>
    )
}

function Transactions (props){
    return(
        <h1>Transactions</h1>
    )
}
export {Loading};
export default StudentProfile;