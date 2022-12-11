import React from "react";
import { Link } from "react-router-dom";
import HomeStyles from "./HomeStyles.css";

function Contact() {
return(
<div className="">
    <div className="mx-auto grid grid-cols-1 place-content-center w-2/3 mt-10 bg-zinc-200 p-4 rounded-md     ">
        <div className="box1">
            <div className="justiy-center">
                <p className="text-5xl font-black ">Contact Us</p>
                    <p className="text-xl font-light ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dignissim pretium lectus sollicitudin id neque volutpat dictumst. Id velit amet vitae morbi. Sit
                        aliquam dictum non.</p>
                <form action="" className="mx-auto  rounded-md mt-10 ">
                    <div className="flex items-center my-4">
                        <p className="text-lg py-3 px-5 rounded-l-md  -mr-1 color-con1 text-white ">Name</p>
                        <input type="text" className=" border-color-con1 border-2 rounded-r-md p-3 w-full border-gray-300 focus:outline-none " placeholder="Your Name" />
                    </div>
                    <div className="flex items-center my-4">
                        <p className="text-lg py-3 px-5 rounded-l-md  -mr-1 color-con1 text-white ">Email</p>
                        <input type="email" className=" border-color-con1 border-2 rounded-r-md  p-3 w-full focus:outline-none " placeholder="Your Email" />
                    </div>
                    <div className="flex items-center my-4">
                        <p className="text-lg py-5 pl-5 pr-4 rounded-l-md  -mr-1 color-con1 text-white ">Message</p>
                        <input type="text" className=" border-color-con1 border-2 rounded-r-md  py-5 px-3  w-full focus:outline-none" placeholder="Your Message" />
                    </div>
                   
                    <button className="text-lg font-semibold text-center rounded-md w-full bg-emerald-400 mt-4 py-3 px-4 hover:bg-white border-2 hover:border-emerald-400 ">SUMBIT</button>
            </form>
                
            </div>
                
        </div>

    </div>
    <div className="color-con1 p-8 mt-20 ">
        <p className="text-5xl font-black text-white text-center"> Play with your favourite guitar </p>
        <div className="flex justify-center mt-16">
            <Link to='/select-role'><button
                className="w-44 rounded-md text-white border-2 border-emerald-400 p-2 mr-5 hover:bg-emerald-400">Join Us</button>
            </Link>
        </div>


    </div>
</div>

)
}
export default Contact;