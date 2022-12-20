import React from "react";
import { useState,useEffect } from "react";
import $ from 'jquery';
import { InfinitySpin } from  'react-loader-spinner'
import NotAvailable from "../NotAvailable";
function GroupProfile(){
    const [currentNav,updateNav] = useState('Profile');   
    const [ProfileData,updateProfileData] = useState();
    useEffect(()=>{
        $.get('/api/user/profile?role=group',(data,err)=>{
            updateProfileData(data);
            console.log(data);
        });
    },[]);
    const handleNav = (e) =>{
        updateNav(e.target.innerText);
    }
    return(
        <div className="container">
        <div className="mt-8">
             <ul className="flex gap-8 justify-left text-slate-800 font-semibold text-lg capitalize ">
                 <li className=""><span className=" hover:text-emerald-400 cursor-pointer" onClick={handleNav} >profile</span>
                 {currentNav === 'Profile' && <div className="bg-emerald-400 h-1 w-full"></div>}
                 </li>
                 <li className=""><span className=" hover:text-emerald-400 cursor-pointer" onClick={handleNav} >Request</span>
                 {currentNav === 'Request' && <div className="bg-emerald-400 h-1 w-full"></div>}
                 </li>
             </ul>
         </div>
         {currentNav === 'Profile' ? ProfileData ? ProfileData.res?<Profile imgURL = {ProfileData?.img_url} profile_data= {ProfileData}  />:<NotAvailable res={true}/>:<Loading/> : null}
         {currentNav === 'Request' ? <InitRequest/>: null}
     </div>
    )
        
}

function Loading(){
    return (
        <div className="flex justify-center align-center h-auto w-auto">
            <InfinitySpin width="200"/>
        </div>
    )
}

function Profile(props){
    console.log(props.profile_data);
    function SubscribedUsers (){
        const Next_due_date = new Date(props.profile_data.subscription.current_end*1000);
        const End_due_date = new Date(props.profile_data.subscription.end_at*1000);
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
        <div className="container mt-10 justify-center rounded-lg bg-slate-200 p-4 w-2/3 text-center">
           <div className="mt-8 h-20 ">
                <img src={props?.profile_data.img_url} alt="img" className="rounded-full mx-auto h-16 w-16 justify-center" />
            </div> 
            <div className="grid grid-cols-2 mt-4 gap-4 justify-around p-3">
                <div className="flex ">
                        <div className="w-1/2 p-2 bg-slate-900 text-white rounded-l-lg ">
                            <span>Email</span>
                        </div>
                        <div className="w-1/2">
                            <input type="text" value={props.profile_data?.user_data?.email} className="border-2 border-slate-900 p-2 rounded-r-lg focus:outline-none w-full bg-slate-200 " readOnly/>
                        </div>
                </div>
                <div className="flex">
                        <div className=" w-1/2 p-2 bg-slate-900 text-white rounded-l-lg ">
                            <span>Auth ID</span>
                        </div>
                        <div className="w-1/2">
                            <input type="text" value={props.profile_data?.user_data?.authID} className="border-2 border-slate-900 p-2 rounded-r-lg focus:outline-none w-100 bg-slate-200 " readOnly/>
                        </div>
                </div>
                <div className="flex">
                    <div className=" w-1/2 px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Plan</span>
                    </div>
                    <div className="w-1/2">
                        <input type="text" value={props.profile_data?.user_data?.subscribed_plan} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 capitalize " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 p-2 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Type</span>
                    </div>
                    <div className="w-1/2">
                        <input type="text" value={'Group'} className="border-2 border-slate-900 p-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200  " readOnly/>
                    </div>
                </div>
                <div className="flex align-items-center border-2 border-slate-900 p-1 rounded-lg">
                    <div className="w-1/2 p-2 text-slate-800">
                        <span>Group Status : </span>
                    </div>
                    <div className="w-1/2">
                        {props?.profile_data?.user_data?.group_status === true? <span className="p-2 w-full text-white rounded-lg text-lg bg-emerald-400">Active</span> : <span className="p-2 w-full text-white rounded-lg text-lg bg-red-400" >Inactive</span> }
                    </div>
                </div>
                <div className="flex align-items-center border-2 border-slate-900 p-1 rounded-lg">
                    <div className="w-1/2 p-2 text-slate-8002">
                        <span>Plan Status : </span>
                    </div>
                    <div className="w-1/2 text-sm ">
                    {
                        props?.profile_data?.user_data?.plan_initial_status.user_status === false && props?.profile_data?.user_data?.plan_initial_status.admin_status === false ? 
                            <span className="p-2 text-white text-lg rounded-lg bg-gray-200">Not assigned</span> 
                        : props?.profile_data?.user_data?.plan_initial_status.user_status === false && props?.profile_data?.user_data?.plan_initial_status.admin_status === true? 
                            <a href="/api/payment?role=group&status=create"><span className="p-2 text-white text-lg rounded-lg bg-emerald-400 hover:scale-105">Compltete Payment</span></a>
                        : props?.profile_data?.user_data?.plan_status === true ?
                            <span className="p-2 text-white text-lg rounded-lg bg-emerald-400">Active</span> 
                        : <div className="flex"> <span className="p-2 text-white text-lg rounded-lg bg-red-400">Expired</span><a href="/api/payement?role=group&status=renew" className="border-emerald-400 border-2 text-white p-2 rounded-lg hover:scale-105">Renew</a></div>

                    }
                    </div>
                </div>
                <div className="flex col-span-2">
                    <div className="p-2 w-1/2 bg-slate-900 text-white rounded-l-lg ">
                        <span>Members</span>
                    </div>
                    <div className="w-1/2">
                    <input type="number" value={props.profile_data.user_data.group_members.length} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200  " readOnly/>
                    </div>
                </div>    
            </div>
            {
                props.profile_data.user_data.subscribed_plan !=='free'? <SubscribedUsers/> : null
            }    
        </div>
    )
}


function InitRequest(){
    const [member_input, update_member] = useState(0);
    const handle_member_size = (e) =>{
        let number = e.target.value === '' ? 0 : parseInt(e.target.value) ;
        
        update_member(number);
    }
    return (
        <div className="container mt-10 justify-center rounded-lg bg-slate-200 p-4 w-2/3">
            <div className="hidden" id="loader">
                <Loading/>
            </div>
            <div className="containter-fluid" id="request">
                <div className="text-center text-emerald-400 text-2xl font-semibold">
                    <span>Complete your group details</span>
                </div>
                <div className="px-2 mt-2 font-md text-md  ">
                    <p>Note: This is one time request, Make sure you fill the appropriate details.</p>                
                </div>
                <form className="mt-4 flex flex-col gap-8 " >
                    <div className="flex">
                        <div className="px-3 py-2 bg-slate-900 text-white rounded-l-lg w-1/3">
                            <span>Plan Type</span>
                        </div>
                        <div className=" w-2/3">
                            <select name="plan" className="px-3 py-2 focus:outline-none w-full border-slate-900 border-2 rounded-r-lg">
                                <option value="pro">Pro</option>
                                <option value="plus">Pro-Plus</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-3 py-2 bg-slate-900 text-white rounded-l-lg w-1/3">
                            <span>Maximum Size</span>
                        </div>
                        <div className=" w-2/3">
                            <input name="size" type="number"  onChange={handle_member_size} className="px-3 py-2 focus:outline-none w-full border-slate-900 border-2 rounded-r-lg" min={2} max={8} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6" id="member-details">
                        {
                            [...Array(member_input)].map((e,i)=>{
                                return(
                                        <div className="flex" key={i+1}>
                                            <div className="px-3 py-2 bg-slate-900 text-white rounded-l-lg w-1/3">
                                                <span>{`Member : ${i+1}`}</span>
                                            </div>
                                            <div className="w-2/3">
                                                <input type="email" name={`member-${i+1}`} placeholder="Enter member email" className="px-3 py-2 focus:outline-none w-full border-slate-900 border-2 rounded-r-lg" />
                                            </div>
                                        </div>
                                    )
                            })
                        }
                    </div>
                    <div className="flex">
                        <div className="px-3 py-2 bg-slate-900 text-white rounded-l-lg w-1/3">
                            <span>Susbcription Type</span>
                        </div>
                        <div className=" w-2/3">
                            <select name="select-subscription-data" className="px-3 py-2 focus:outline-none w-full border-slate-900 border-2 rounded-r-lg">
                             <option value="monthly">Monthly</option>
                             <option value="yearly">Yearly</option>
                             </select>
                        </div>
                    </div>
                    <div className="flex"> 
                        <button type="submit" className="w-full px-3 py-2 focus:outline-none hover:bg-slate-900 rounded-lg text-white font-semibold text-center bg-emerald-400 " >Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default GroupProfile