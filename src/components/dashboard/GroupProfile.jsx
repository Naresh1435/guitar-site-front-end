import { useState } from "react";
import $ from 'jquery';
import { InfinitySpin } from  'react-loader-spinner'
function GroupProfile(){
    
    const [ProfileData,updateProfileData] = useState();
    $.get('/api/user/profile?role=student',(data,err)=>{
        updateProfileData(data);
        console.log(data);
    });
    return(
        <div className="container">
        <div className="mt-8">
             <ul className="flex gap-8 justify-left text-slate-800 font-semibold text-lg capitalize ">
                 <li className=""><span className=" hover:text-emerald-400 cursor-pointer">profile</span>
                 <div className="bg-emerald-400 h-1 w-full"></div>
                 </li>
             </ul>
         </div>
         {ProfileData ?<Profile imgURL = {ProfileData?.img_url} profile_data= {ProfileData}  />:<Loading/>}
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

    function SubscribedUsers (){
        return(
            <div className="grid grid-cols mt-2 gap-10 justify-around p-3">
                <div className="flex">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg">
                        <span>Subcription ID</span>
                    </div>
                    <div className="">
                            <input type="text" value={props.profile_data?.user_data?.subscription_id} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 py-2 text-white">
                        <span>Plan Status</span>
                    </div>
                    <div className="">
                    {
                        props?.profile_data?.user_data?.plan_initial_status.user_status === false && props?.profile_data?.user_data?.plan_initial_status.admin_status === false ? 
                            <span className="p-2 text-white text-lg rounded-lg bg-gray-200">Not assigned</span> 
                        : props?.profile_data?.user_data?.plan_initial_status.user_status === false && props?.profile_data?.user_data?.plan_initial_status.admin_status === true? 
                            <a href="/api/payment?role=group&status=create"><span className="p-2 text-white text-lg rounded-lg bg-emerald-400 hover:scale-105">Compltete Payment</span></a>
                        : props?.profile_data?.user_data?.plan_status === true ?
                            <span className="p-2 text-white text-lg rounded-lg bg-gray-200">Active</span> 
                        : <div className="flex"> <span className="p-2 text-white text-lg rounded-lg bg-red-400">Expired</span><a href="/api/payement?role=group&status=renew" className="border-emerald-400 border-2 text-white p-2 rounded-lg hover:scale-105">Renew</a></div>

                    }
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg">
                        <span>Next Due</span>
                    </div>
                    <div className="">
                            <input type="text" value={props.profile_data?.subscription?.next_due} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
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
                        <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                            <span>Email</span>
                        </div>
                        <div className="">
                            <input type="text" value={props.profile_data?.user_data?.email} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
                        </div>
                </div>
                <div className="flex">
                        <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                            <span>Auth ID</span>
                        </div>
                        <div className="">
                            <input type="text" value={props.profile_data?.user_data?.authID} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
                        </div>
                </div>
                <div className="flex">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Plan</span>
                    </div>
                    <div className="">
                        <input type="text" value={props.profile_data?.user_data?.subscribed_plan} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 capitalize " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Type</span>
                    </div>
                    <div className="">
                        <input type="text" value={props.profile_data?.user_data?.group_status ? 'Group' : 'Individual'} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200  " readOnly/>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 text-slate-800 py-2 text-white ">
                        <span>Group Status : </span>
                    </div>
                    <div className="">
                        {props?.profile_data?.user_data?.group_status === true? <span className="p-2 text-white text-lg bg-emerald-400">Active</span> : <span className="p-2 text-white text-lg bg-red-400" >InActive</span> }
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Members : </span>
                    </div>
                    <div className="">
                    <input type="text" value={props.profile_data.user_data.maximum_size} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200  " readOnly/>
                    </div>
                </div>    
            </div>
            {
                props.profile_data.user_data.subscribed_plan !=='free'? <SubscribedUsers/> : null
            }    
        </div>
    )
}




export default GroupProfile