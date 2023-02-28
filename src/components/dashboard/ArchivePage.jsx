import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AccessDenied from "../AccessDenied";
import { Loading } from "./StudentProfile";
import $ from 'jquery';
import MuxPlayerComponent from "../learning/MuxPlayer";
function ArchivePage (){
    const params = useParams();
    const [archiveData, updateArchiveData] = useState();
    const [response,updateResponse] = useState();
    const [access, updateAccess] = useState(false);
    const [archive_pos, updateArchivePos] = useState('');
    console.log(params);
    useEffect(()=>{
        $.get('/app/api/archives?id='+params.archiveID,(data,res)=>{
            if(res==='success' && data.res) {
                updateResponse(true);
                updateAccess(data.access);
                if(data.access)
                    updateArchiveData(data.archive_data);
                    updateArchivePos(data.archive_data.modules[0]._id);
            }else {
                updateResponse(false);
                console.log(res);
            }
        });
    },[]);
    function ArchiveVideoComponent() {
        return (
            <div className="flex justify-center w-full items-center p-2"> 
                {archiveData.modules.filter((archive)=> archive._id === archive_pos).map((archive)=>{
                    return (
                        <MuxPlayerComponent url={archive.module_upload}/>
                    )
                })}
            </div>
        )
    }
    function Archive(){
        function ModuleMapper(){
            function Module_List (module) {
                const handleArchiveClick = (event)=>{
                    console.log(event);
                    updateArchivePos(event.target.id);
                }
                return (
                    <div className="cursor-pointer p-1 rounded-md border w-full" id={module._id} onClick={handleArchiveClick}>
                         {module.module_name}
                    </div>
                )
            }
            return (
               <div className="flex flex-column gap-2 justify-center m-auto">
                    {archiveData.modules.map(Module_List)}
               </div>
            )
        }
       
        return (
            <div className="flex w-full border border-gray-300 w-2/5 rounded-lg h-screen overflow-scroll drop-shadow-md">
            <div className="p-2">
                <ModuleMapper/>
            </div>
            </div>    
        )
    }
    return (
        <section className="flex mt-10 mx-4 gap-2 flex-row">
           {response?access?<Archive/>:<AccessDenied access={false} />:<Loading/>}
           {response?access?<ArchiveVideoComponent/>:<AccessDenied access={false} />:<Loading/>}
        </section>
    )
}

export default ArchivePage;