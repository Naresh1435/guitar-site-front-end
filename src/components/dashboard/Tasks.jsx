import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as UpChunk  from "@mux/upchunk";
import $ from 'jquery';
function Tasks(props) {
    const TaskCards = (task_data)=>{
        const [msg,setMessage] = useState('Submit');
        const [click, updateClick] = useState( task_data?.task_status === 'submitted' ? false : true);
        const handleClick = ()=>{
            updateClick((previousClick)=> previousClick = !previousClick);
        }
        console.log(task_data);
        const handleTaskSubmit = (form) =>{
            form.preventDefault();
            setMessage("...");
            if(task_data.task_type === "video") {
                $.post('/app/api/task/upload',{task_id : task_data._id, type : task_data.task_type},(data,err)=>{
                    console.log(data,err);
                    if (err === "success" && data.res ) {
                        try {
                            const upload = UpChunk.createUpload({
                                endpoint: data.url, // Authenticated url
                                file: form.target.file.files[0], // File object with your video file’s properties
                                chunkSize: 30720, // Uploads the file in ~30 MB chunks
                            });
                            // Subscribe to events
                            upload.on('error', error => {
                                alert(error.detail);
                                console.log(error);
                            });
                        
                            upload.on('progress', progress => {
                                setMessage(progress.detail);
                            });
                            upload.on('success', () => {
                                window.location.reload();
                            });
                            } catch (error) {
                            console.log(error);
                            }
                    } else {
                        alert("Something Went Wrong, Try again later!");
                    }
                    
                });
            } else if (form.target.task_type === "image") {
                const img = form.target.file.files[0];
                $.post('/app/api/task/upload',{task_id : task_data._id, task_type : task_data.task_type, file : img },(data,err)=>{
                    console.log(data,err);
                });
            }
        }
        return (
            <div className="mx-5 flex flex p-4 w-3/4 mt-20 rounded-md bg-slate-200 shadow-2xl relative" key={task_data._id}>
                <div className="flex-1 flex flex-col">
                    <div className="flex p-1 justify-between">
                        <h2 className=" font-semibold text-2xl text-slate-700">{task_data?.task_name}</h2>
                        <p className={`font-semibold text-xl capitalize p-2 ${task_data?.task_status === 'submitted'?'bg-emerald-400': 'bg-red-400'} rounded-md text-white`}>{task_data?.task_status}</p>
                    </div>
                    <hr />
                    <p className="mt-4 rounded-md  text-sm capitalize">{task_data?.task_description }</p>
                    { task_data.task_status === "submitted"? null :  !click && 
                    <form className="p-2 flex flex-col w-full block" onSubmit={handleTaskSubmit}>
                        <div className="flex ">   
                        <label className="border-slate-900 bg-slate-900 bg-slate h-10 text-white p-2 border-2 w-1/2 rounded-l-md"> Submit your File </label>
                        <input type="file" name="file" className="border-2 border-slate-900 h-10 rounded-r-md items-center p-1 "  accept={`${task_data?.task_type}/*`} multiple={false}/>
                        </div>
                        <input type="submit" className="bg-emerald-400 p-2 hover:scale-105 text-white rounded-md" value={msg}/>        
                    </form>     }
                </div>
                {task_data?.task_status === 'submitted'? null 
                : <div className="flex flex-col justify-center items-end">
                <button className="bottom-16 right-20 p-1 h-8 w-10 text-3xl text-emerald-400 hover:scale-110 focus:outline-none" onClick={handleClick}>
                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                </button>
                </div>
                 }
                
            </div>
        )
    }
    const NoTasks = ()=>{
        return (
            <div className="h-screen">
        <div className="m-auto text-center ">
            <div className="p-4">
            <p className="text-5xl text-red-400 font-semibold underline decoration-gray-300 relative">No Task Assigned!</p>
            <Link to={'../chat' }>
                <button className="text-lg mt-4 cursor-pointer rounded-md bg-emerald-400 p-2 text-white"> Ask your Mentor Now!</button>
            </Link>
            
            </div>
        </div>
    </div>
        )
    }
    return (
        <div className="h-screen overflow-y-scroll">

            { props.data.tasks.length === 0 ?  <NoTasks/> :props.data.tasks.map(TaskCards)}
        </div>
    )
}
export default Tasks;