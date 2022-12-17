import React from "react";
import { Link } from "react-router-dom";
import MuxPlayerComponent from "./MuxPlayer";

function VideoPlayer(props){
    console.log(props.data);
    return(
        <div className="container">
            <div className="text-xl font-semibold m-2 mb-4">
                <p>{props.data.title}</p>
            </div>
            <div className="mx-3">
                <MuxPlayerComponent url={props.data?.upload?.mux_playback_id}/>
            </div>
            <div className="flex text-center justify-around mt-2 ">
                <div>

                </div>
            </div>        
        </div>
    )
}

export default VideoPlayer;