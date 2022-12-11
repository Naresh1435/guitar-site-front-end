import React from "react";
import { Link } from "react-router-dom";
import MuxPlayerComponent from "./MuxPlayer";

function VideoPlayer(props){
    console.log(props.data.playback_id);
    return(
        <div className="container">
            <div className="text-xl font-semibold m-2 mb-4">
                <p>{props.data.title}</p>
            </div>
            <div className="mx-3">
                <MuxPlayerComponent url={props.data.playback_id}/>
            </div>
            <div className="flex text-center justify-around mt-2 ">
                <div className="p-2 border-teal-400 border-2 rounded hover:border-white hover:bg-teal-400 ">
                    <Link to='/' >Previous</Link>
                </div>
                <div className=" bg-teal-400 py-2 px-4 rounded hover:bg-white hover:border-2 hover:border-teal-400">
                    <Link to='/'>Next</Link>
                </div>
            </div>        
        </div>
    )
}

export default VideoPlayer;