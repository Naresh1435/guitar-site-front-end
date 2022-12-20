import React from "react";
function AccessDenied(props){
    console.log(props.obj);
    return (
    <section className="jumbotron flex flex-col justify-center">
        {props.access?<HoldBack/>:<NoAccess/>}
        </section>
    )
}


function NoAccess(){
    return (
        
       <div className="h-screen">
            <div className="m-auto text-center ">
                <div className="p-4">
                <p className="text-5xl text-red-400 font-semibold underline decoration-gray-300 relative">Access Denied!</p>
                <p className="text-lg mt-4 text-gray-500">Get Subscription to access this page. </p>
                </div>
            </div>
        </div>
    )
}


function HoldBack (){
    return (
       <div className="h-screen">
            <div className="m-auto text-center ">
                <div className="p-4">
                <p className="text-5xl text-emerald-400 font-semibold underline decoration-gray-300 relative">Hold Back!</p>
                <p className="text-lg mt-4 text-gray-500">You will be assigned soon.</p>
                </div>
            </div>
        </div>
    )
}

export default AccessDenied;