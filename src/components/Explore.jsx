import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import {useState, useEffect} from "react";
import girl from '../img/girl.jpg';
import { Footer } from "./Footer";
import { Loading } from "./dashboard/StudentProfile";
import $ from 'jquery';
import {TailSpin} from 'react-loader-spinner';



function Explore() {
    const [Role, updateRole] = useState();
    const [Auth,updateAuth] = useState(false);
    const loaderData = useLoaderData();
    useEffect(()=>{
        updateAuth(loaderData.auth);
        $.get('app/api/verify',(data,res)=>{
            if(res === 'success' && data.res){
                if(data.auth)
                    updateRole(data.role);
                else 
                    updateRole('');
            } else {
                alert('Something went wrong!, Try again later.');
            }
        });
    },[]);
    
    function EnrollCourse(event){
        event.target.children[0].classList.remove('hidden');
        console.log(Role);
        if (Auth){
            if(Role==='student'){
                console.log('here');
                $.post('app/api/enrollcourse',{course_id : event.target.id},(data,err)=>{
                    console.log(data);
                    if(err==='success'){
                        if(data.res)
                            window.location.href='/dashboard/student/courses';
                        else 
                            alert('You cannot enroll into this program');
                    } else {
                        alert('Something went wrong try again later!');
                        console.log(err);
                        event.target.children[0].classList.add('hidden');
                    }
                    
                });    
            } else {
                alert('You are not eligible.');
                event.target.children[0].classList.add('hidden');
            }
        } else {
            window.location.href='/select-role';
        }
        
    }


    function CourseCards(inner_props){
        return (
                <div className="box mx-4 shadow-md bg-white relative my-4 rounded-md hover:scale-105" key={inner_props._id}>
                    <span className=" h-full absolute w-1 bg-emerald-400"></span>
                    <div className="mx-4 mt-2">
                        <h1 className="capitalize">{inner_props.subscription_plan}</h1>
                        <div className="h-30 w-100 my-2">
                            <img src={`data:${inner_props?.course_img?.content_type};base64,${Buffer.from(inner_props?.course_img?.image).toString('base64')}`}  className="h-40" alt="card img" />
                        </div>
                        <hr className=" my-1 mx-5" align="center" />
                        <div className="my-2">
                            <h1 className="text-lg font-semibold capitalize">{inner_props.course_title}</h1>
                            <p className="text-sm font-light capitalize  ">{inner_props.course_features}</p>
                        </div>
                        <div className="flex flex-row mb-2">
                            <div className="flex-1 mx-1 text-white">
                                <button id={inner_props._id}
                                    className="w-100 p-2 bg-emerald-400 flex align-items-center justify-center hover:border-white border-2  hover:bg-slate-900 font-semibold rounded-md hover:text-white focus:outline-none" onClick={EnrollCourse}>
                                    Enroll
                                    <div className="px-4 hidden">
                                    <TailSpin height="25" width="25" color="#ffff" />
                                    </div>
                                </button>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    function ExploreCon1(){
        return(
            <div className="maincontainer  bg-slate-800 p-10">
            
            <div className="content">
                <h1 className="text-white text-6xl font-black mt-24 ">Skillz Courses</h1>
                <div className="h-1 w-40 mt-3 bg-emerald-400 "></div>
            </div>
            <div className="contect-small w-96 mt-16">
                <p className="text-white text-md   font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.
                </p>
            </div>
            <div className="">
                <p className="mt-32 text-emerald-400 text-sm font-black">CATEGORIES</p>
                <ul className="flex mt-2">
                    <li className="">
                        <button className="bg-emerald-400 p-3 rounded ">All Courses</button>
                    </li>
                    <li className="pl-5">
                        <button className="bg-slate-900 text-emerald-400 p-3 border-2 rounded border-emerald-400"><a
                                href="">Pro-Plus Courses</a></button>
                    </li>
                    <li className="pl-5">
                        <button className="bg-slate-900 text-emerald-400 p-3 border-2 rounded border-emerald-400"><a
                                href="">Pro Courses</a></button>
                    </li>
                    <li className="pl-5">
                        <button className="bg-slate-900 text-emerald-400 p-3 border-2 rounded border-emerald-400"><a
                                href="">Free Courses</a></button>
                    </li>
                </ul>
                <div className="grid grid-cols-3 relative">
                    {loaderData.data.map(CourseCards)}
    
                </div>
            </div>
        </div>
        )
    }
    
    function ExploreCompleteCon(){
        return (
                <section>
                    <ExploreCon1/>
                    <div className="container p-6 mt-20 ">
                        <h1 className="text-5xl font-bold  text-center">How Skillz Works</h1>
                        <div className="flex justify-center mt-4">
                            <div className="h-1 w-44 bg-emerald-400 "></div>
                        </div>

                        <p className="text-center text-2xl mt-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
                            nostrum incidunt, perferendis sapiente mollitia aperiam quaerat tenetur provident quasi itaque totam! Ex,
                            sit id! Dolorum ad enim omnis consectetur unde?</p>

                    </div>
                    <div className="grid grid-cols-3 justify-items-center  grid-flow-col gap-6 mt-16 ">
                        <div className="container  p-5  bg-white  h-96 rounded-md   ">
                            <div className="flex justify-center">
                                <div className="leaf h-16 w-16 "></div>
                            </div>
                            <h1 className="text-center text-xl font-bold pt-5  ">Browse Courses</h1>
                            <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sint</p>
                        </div>
                        <div className="container  p-5 bg-white  h-96  rounded-md ">
                            <div className="flex justify-center">
                                <div className="leaf h-16 w-16 "></div>
                            </div>
                            <h1 className="text-center text-xl font-bold pt-5 ">Purchase</h1>
                            <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing eli</p>
                        </div>
                        <div className=" p-5  bg-white  h-96 rounded-md  ">
                            <div className="flex justify-center">
                                <div className="leaf h-16 w-16 "></div>
                            </div>

                            <h1 className="text-center text-xl font-bold pt-5">Start Learning</h1>
                            <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>

                        </div>
                    </div>
                    <Footer />
                </section>
        )
    }
    
    
return (
    <div>
        {Role !=undefined?<ExploreCompleteCon/> : <Loading/>}
    </div>

);

}


export default Explore;