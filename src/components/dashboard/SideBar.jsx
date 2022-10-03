import React from "react";
import {Link} from "react-router-dom";
function SideBar(props){
    return(
        <section>
        <div class="container2 flex float-left">
            <div class="container w-80 bg-gray-800 h-screen">
                <div class="nan p-6 mb-5 h-12">
                    <h1 class="text-white mx-12 font-alkalami text-xl">TEACHER</h1>
                </div>
                <hr/>
                <ul class="">
                    <ListElement/>
                </ul>
            </div>
        </div>
    </section>
    )
}

function ListElement(){
    return (
        <li class="mx-16 mt-5 text-lg font-alkalami text-white ">
            <i class=" fa-regular fa-message mr-1 "></i>
        <Link to="chat">Chatbox</Link></li>
    )
}


export default SideBar;