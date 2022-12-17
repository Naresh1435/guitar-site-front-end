import {useState } from "react";
import { useLoaderData} from "react-router-dom";
import Nav from "../Nav";
import MuxPlayerComponent from "./MuxPlayer";
import SideBarLearningPage from "./SideBarLearningPage";
import VideoPlayer from "./VideoPlayer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { PromiseProvider } from "mongoose";
import { useEffect } from "react";

function LearningPage(){
const data = useLoaderData();
const [Module,setModule] = useState({});
const [navToggle, setNavToggle] = useState(true);
useEffect(()=>{
    setModule((prevModule)=>prevModule = data.course_data.modules[0]);
},[]);
const arrowBtn =<button className={`font-semibold p-2 text-lg absolute focus:outline-none`} onClick={handleClick}>
    <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
const crossBtn =<button className={`font-semibold p-2 text-lg text-white absolute right-1 text-2xl top-0 focus:outline-none z-10`}
    onClick={handleClick}>
    <FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
function handleClick(){
setNavToggle(navToggle => !navToggle);
}
function Module_list(props){
    console.log('Module ' + Module._id);
    console.log('Module 2 ' +props._id);
return(
<div key={props._id} id={props._id} className={`py-1 px-2 text-white hover:cursor-pointer ${Module._id===props._id? 'bg-emerald-400 rounded-lg' :null}`} onClick={PlaybackId_Mapper}>
 {props.title}
</div>
)
}
function ModuleMapper(){
    return (
        data.course_data.modules.map(Module_list)
    )
}

function PlaybackId_Mapper(event){
    console.log(event.target.id);
    const tempobj = data.course_data.modules.filter((module)=>module._id==event.target.id);
    setModule((prevID)=>prevID=tempobj[0]);
}
return (
<div>
    <Nav visibility={false} />
    <div className="flex">
        <div className="flex-initial">
            <div className="h-screen ">
                <div className='relative'>
                    {navToggle ? crossBtn:arrowBtn}
                    <div className={`relative w-60 color-con2 h-screen ${navToggle?'':'hidden'}`}>
                        <div className='mx-2 py-4'>
                           <ModuleMapper/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-5 my-2 flex-1">
            <VideoPlayer data={Module}/>
        </div>
    </div>
</div>
);
}


export default LearningPage;