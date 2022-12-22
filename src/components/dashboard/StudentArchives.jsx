import React from "react";
import { useState } from "react";
import AccessDenied from "../AccessDenied";
import { Loading } from "./StudentProfile";
import $ from 'jquery';
import { useEffect } from "react";
import CourseContainer from "./CourseContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function StudentArchives(){
    const [response, updateResponse] = useState();
    const [access,updateAccess] = useState(false);
    const [data, updateData] = useState('');
    useEffect(()=>{
        $.get('app/api/archives',(data,res)=>{
            if(res==='success' && data.res){
                updateResponse(true);
                updateAccess(data.access);
                if(data.access)
                    updateData(data.archive_data);
                    console.log(data);
            } else {
                console.log(res);
                alert('Something went wrong!, Try again later!');
            }
            
        });
    },[]);
    function ArchiveCards(archive_data){
        console.log(archive_data);
        return (
            <div className="mx-5 h-40 flex flex p-4 w-3/4 mt-20 rounded-md bg-slate-200 shadow-2xl relative" key={archive_data._id}>
                <div className="flex-1 flex flex-col">
                    <h2 className=" font-semibold text-2xl text-slate-700">{archive_data?.archive_name}</h2>
                    <p className=" border-2 mt-4 rounded-md  text-sm capitalize">{archive_data?.archive_description}</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Link to={`${archive_data?._id}`}>
                        <button className="bottom-16 right-20 p-1 h-8 w-10 text-3xl text-emerald-400 hover:scale-110 focus:outline-none">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </button>
                    </Link>
                </div>
                
            </div>
        )
    }
    function Archives(){
      return(
        <div className="">
            {data.map(ArchiveCards)}
        </div>
      )  
    };
    
    return(
        response?access?<Archives/>:<AccessDenied access={false}/>:<Loading/>
    )
}

export default StudentArchives;