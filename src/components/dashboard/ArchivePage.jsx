import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AccessDenied from "../AccessDenied";
import { Loading } from "./StudentProfile";
import $ from 'jquery';
function ArchivePage (){
    const params = useParams();
    const [archiveData, updateArchiveData] = useState();
    const [response,updateResponse] = useState();
    const [access, updateAccess] = useState(false);
    useEffect(()=>{
        $.get('app/api/archives?id='+params.archiveID,(data,res)=>{
            if(res==='success' && data.res) {
                updateResponse(true);
                updateAccess(data.access);
                if(data.access)
                    updateArchiveData(data.archiveData);
            }else {
                updateResponse(false);
                console.log(res);
            }
        });
    },[]);
    function Archive(){
        return (
            <div className="flex-initial flex border border-gray-300 w-2/5 rounded-lg h-screen overflow-scroll drop-shadow-md">
            <div className="">
                <p>{''}</p>
            </div>
            <div className="">
                <button></button>
            </div>
            </div>    
        )
    }
    return (
        <section className="flex mt-10 mx-4 gap-2 flex-row">
           {response?access?<Archive/>:<AccessDenied access={false} />:<Loading/>}
        </section>
    )
}

export default ArchivePage;