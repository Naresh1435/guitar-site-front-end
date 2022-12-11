import React from "react";
import { Link } from "react-router-dom";
import best from "../img/best.jpg";
import { Footer, Socials } from "./Footer";
import Nav from "./Nav";

function About() {
return(
<div className="">
    <div className="grid justify-items-center grid-cols-2 bg-slate-800 w-full p-10 ">
        <div className="left p-5">
            <p className="text-white font-bold  text-md ">ABOUT SKILLZ</p>
            <div className="h-1 w-36 bg-emerald-400 "></div>
            <div>
                <p className=" text-5xl font-black kanit text-left mt-16 text-white">A passion for helping people find
                    their strength.</p>
            </div>
            <p className="text-xl kanit text-white mt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim pretium lectus sollicitudin id neque volutpat dictumst. Id velit amet vitae morbi.</p>
            <Socials/>
        </div>
        <div className=" right mt-24 container3 h-96 w-96 relative ">
            <div className='z-20'>
                <img src={best} className="img-left h-96 w-96 shadow-xl shadow-black z-10 " alt="" />
            </div>
            <img src="https://assets.website-files.com/601590769048d58adf797778/6015c7ffe9b913e64b3b1ae4_waves.svg"
                className="absolute z-0 h-32 w-32 adjust-img4-con1" alt="" />
            <div
                className='h-20 w-20 img-left bg-emerald-400 absolute adjust-img1-con1 shadow-md shadow-black rotate-12 z-30'>
            </div>
            <div className='h-64 w-64 img-right bg-emerald-400 absolute adjust-img2-con1 shadow-md shadow-black  z-0 '>
            </div>
            <div className='h-32 w-32 img-right bg-emerald-400 absolute adjust-img3-con1 -rotate-6 z-20'>
            </div>
        </div>

    </div>
    <div className="container-section bg-emerald-400 p-2 ">
        <p className="text-lg kanit text-center mt-16 ">Students success Stories</p>
        <div className="grid justify-items-center grid-cols-3 gap-3 mt-20 p-10 h-66">
            <div>
                <p className="text-5xl font-black kanit">350%</p>
                <p>Increse in Growth</p>
            </div>
            <div>
                <p className="text-5xl font-black kanit">10X</p>
                <p>Average Channel Growth</p>
            </div>
            <div>
                <p className="text-5xl font-black kanit">350%</p>
                <p>Satisfied Students</p>
            </div>
        </div>
    </div>
    <Footer />
</div>
)
}

export default About;