import React from 'react';
import { ReactDOM } from 'react';
import cute_ from '../img/cute_boy.jpg'
import minion from '../img/minion.jpg';
import angry from '../img/angry-birds.jpg';
import penguin from '../img/penguin.jpg';
import HomeStyles from './HomeStyles.css';
import Mentor from '../img/mentor.png';
import Self from '../img/self.png';
import Group from '../img/group.png'
import best from "../img/best.jpg";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Footer,Socials} from './Footer';
function Home () {
return (
<div className="">
    <HomeCon1 />
    <Cards />
    <HomeCon2 />
    <ContactCon />
    <Third />
    <Footer/>
</div>
)}



function HomeCon1(){
return (
<div className="p-5 border-b border-slate-400 color-con1">
    <div className="p-2 mt-14">
        <p className="text-white w-20 text-center font-bold text-md border-emerald-400 border-b-2 ">WELCOME</p>
    </div>
    <div class="grid justify-items-center grid-cols-2 ">
        <div className="">
            <h1 className=" text-5xl font-back   text-left mt-12 text-white">Guitarstudio is the Best Choice for
                Everyone!</h1>

            <h2 className="text-md  text-white mt-4 p-2"> A deep-dive on the Instagram algorythm, hashtags, content
                strategy, and branding.</h2>

            <Link to='/react/select-role'><button
                className="bg-emerald-400 hover:bg-black text-slate-900 font-medium mt-10 p-2  text-lg rounded hover:text-white">Get
                your couse now</button></Link>
            <Socials />

        </div>
        <div className="container3 h-96 w-96 relative ">
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

</div>
)
}


function Cards(){
return(
<div className="bg-slate-700 p-5 color-con2">
    <div class="grid grid-cols-3 justify-items-center  grid-flow-col gap-6 mt-16 text-center ">
        <div className=" p-4  bg-white border-2 h-80 rounded-md hover:scale-105">
            <img src={Group} className="h-32 w-32 mx-auto " alt="" />
            <h1 className="text-xl font-bold pt-2">Group Learning</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sint corporis
                omnis fuga? A, maxime iure veritatis placeat facilis expedita?</p>
        </div>
        <div className="p-4 bg-white border-2 h-80 rounded-md hover:scale-105 ">
            <img src={Mentor} className="h-32 w-32 mx-auto  " alt="" />
            <h1 className=" text-xl font-bold pt-2 ">Instructor led Learning</h1>
            <p className=" ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sint corporis
                omnis fuga? A, maxime iure veritatis placeat facilis expedita?</p>
        </div>
        <div className=" p-4  bg-white border-2 h-80 rounded-md hover:scale-105 ">
            <img src={Self} className="h-32 w-32 mx-auto" alt="" />
            <h1 className="text-xl font-bold pt-2">Self Paced Learning</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sint corporis
                omnis fuga? A, maxime iure veritatis placeat facilis expedita?</p>

        </div>

    </div>
</div>

)
}


function ContactCon(){
return(
<div className="color-con1 p-5" >

    <div className="grid grid-cols-2 justify-end p-4">
        <div className="box1 w-96 h-96 relative mt-4 ">
            <img src={cute_} className="img-right w-96 h-96 absolute z-20 shadow-xl shadow-black" alt="" />
            <img src="https://assets.website-files.com/601590769048d58adf797778/6015c7ffe9b913e64b3b1ae4_waves.svg"
                className="absolute z-10 h-40 w-60 adjust-img4-con2" alt="" />
            <div
                className='h-20 w-20 img-right bg-emerald-400 absolute adjust-img1-con2 shadow-md shadow-black -rotate-12 z-30'>
            </div>
            <div className='h-64 w-64 img-right bg-emerald-400 absolute adjust-img2-con2 shadow-md shadow-black  z-0 '>
            </div>
            <div className='h-32 w-32 img-left bg-emerald-400 absolute adjust-img3-con2 -rotate-6 z-20'>
            </div>
        </div>
        <div className="box3">
            <div className="  justify-end">
                <div className="mt-20 mb-4 ">
                    <h1 className="text-4xl text-white  ">Get personalized learning recommendations</h1>
                    <hr className="bg-emerald-400 w-32 pb-1 mt-2" />
                </div>

                <p className="text-xl text-white w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque error quaerat inventore?</p>

                <div className="mt-6">
                    <Link>
                        <button className="p-4 bg-emerald-400 text-white rounded-md  hover:bg-black ">Contact Us Now</button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
</div>

)
}
function Third(){
return(
<div className="container p-6 mt-20 ">
    <h1 className="text-5xl font-bold  text-center">Upcoming Free Workshops</h1>
    <div className="flex justify-center mt-4">
        <div className="h-1 w-44 bg-emerald-400 "></div>
    </div>

    <p className="text-center text-2xl mt-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        nostrum incidunt, perferendis sapiente mollitia aperiam quaerat tenetur provident quasi itaque totam! Ex, sit
        id! Dolorum ad enim omnis consectetur unde?</p>
    <div className="flex justify-center mt-6">
        <button className="p-4 bg-emerald-400 text-white rounded-md font-black hover:bg-black ">View All Workshops</button>
    </div>
</div>
)
}
function HomeCon2(){
return(
<div className="p-5 color-con3">
    <h1 className=" text-3xl font-black text-center mt-8">Featured Courses</h1>
    <div className="flex justify-center mt-4">
        <div className="h-1 w-44 bg-emerald-400 "></div>
    </div>
    <div className="text-center font-bold text-xl mt-16 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos distinctio quod totam quisquam quam
        suscipit explicabo corrupti adipisci.
    </div>
    <div className="flex justify-center mt-12">
        <Link to={'/react/explore'}>
        <button
            className="w-60 bg-emerald-400 text-white p-4 font-black rounded text-xl hover:bg-gray-600 ">View All
            Courses</button>
        </Link>
         </div>
    <div className="grid grid-cols-3">
        <CourseCards subscription_plan="Free" course_features="Beginner to Hero" course_title="Guitar Basics" />
        <CourseCards subscription_plan="Free" course_features="Beginner to Hero" course_title="Guitar Basics" />
        <CourseCards subscription_plan="Free" course_features="Beginner to Hero" course_title="Guitar Basics" />

    </div>

</div>

)
}

function CourseCards(props){
    return (
    <div className="box mx-4 shadow-md bg-white relative my-4 rounded-md hover:scale-105" key={props._id}>
        <span className=" h-full absolute w-1 bg-emerald-400"></span>
        <div className="mx-4 mt-2">
            <h1 className="capitalize">{props.subscription_plan}</h1>
            <div className="h-4/5 w-100 my-2">
                <img src={``} className="h-4/5 w-100" alt="card img" />
            </div>
            <hr className=" my-1 mx-5" align="center" />
            <div className="my-2">
                <h1 className="text-lg font-semibold capitalize">{props.course_title}</h1>
                <p className="text-sm font-light capitalize  ">{props.course_features}</p>
            </div>
            <div className="flex flex-row mb-2">
                <Link className="flex-1 mx-1" to={''} >
                <button
                    className="w-100 p-2 btn-dark font-semibold hover:bg-white hover:border-gray-300 border-2 hover:text-current rounded-md">Details</button>
                </Link>
                <div className="flex-1 mx-1 text-white">
                    <button id={props._id}
                        className="w-100 p-2 bg-emerald-400   hover:border-emerald-400 border-2 hover:bg-white font-semibold rounded-md hover:text-emerald-400" >Enroll</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export {Socials};
export default Home;