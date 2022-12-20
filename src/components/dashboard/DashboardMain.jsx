import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import CourseContainer from "./CourseContainer";
import CoursePage from "./CoursePage";

function BlueLine(){
    return(
    <div className="bg-emerald-400 h-1 w-35 mt-2 mx-9"></div>
    );
}

function DashboardNav(props){
    const params = useParams();
    return(<main>
        <div className="flex w-full mt-10">
            <Link to="../courses">
            <h1 className="mx-5 font-bold text-xl">My Courses</h1>
            </Link>
            
            <div className="box1 mx-auto justify-end">
                <div className="flex">
                    <div className="one box1 mx-auto"><Link className="mx-5    text-md font-bold" to="plus">PRO PLUS</Link> 
                    {params.plan === "plus"?<BlueLine/>:null}
                    </div>
                    <div className="two mx-auto"><Link  className="mx-5  text-md font-bold" to="pro">PRO</Link>
                    {params.plan ==="pro"?<BlueLine/>:null}
                    </div>
                    <div className="three mx-auto"><Link className=" mx-5 text-md font-bold" to="free">FREE COURSES</Link>
                    {params.plan==="free"?<BlueLine/>:null}
                    </div>  
                </div>
                
            </div>       
        </div>
    </main>);
}

function DashboardDefault(props){
    const params = useParams();

    function NoCourses(){
        return(
            <div className="container3  mx-5 justify-center mt-8 bg-emerald-400 rounded-md  h-3/4 w-5/6 p-2   ">
                <div className="mx-5 text-inherit">
                    <p className=" font-semibold mt-9">You are not currently enrolled in any program</p>
                    <h1 className=" mt-10 mb-10">Take The Next Step In Your Life</h1>
                    <Link to="/explore"><button className="mb-10 color-con1 text-white px-4 py-2 rounded-md hover:bg-white hover:text-inherit">Explore Courses</button></Link>
                </div>
            </div>
        )
    }
    function CourseMapper(){
       const response =  props.data.filter(element => element.course.subscription_plan===params.plan);
        return(
           params.plan=== undefined?props.data.map(CourseContainer):response.length===0?<NoCourses/>:response.map(CourseContainer) 
        )
    }
    return(
        props.data.length === 0 ? <NoCourses/> : <CourseMapper/> 

        
    );
}



export {DashboardDefault, DashboardNav};