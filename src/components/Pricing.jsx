import React from "react";

function Pricing() {
    return (
    <div>
    <div className="conatiner mt-10 justify-center flex">
    <div className="box1 h-96 w-80 border-2 rounded-lg">
        <div className=" p-3 bg-gray-100">
            <h1 className="text-center text-2xl font-semibold">Basic</h1>
        </div>
        <hr className=" bg-gray-200"/>
        <div className="mt-5 ">
            <h2 className="font-medium text-xl mx-6">Features</h2>
        </div>
        <button className="text-blue-500 mt-52 text-xl  hover:bg-blue-400  hover:text-white rounded-xl mx-6 border-blue-400 border-2 h-12 w-64 p-2 ">Sign up for free</button>
    </div>
    <div className="box1 h-96 mx-6 w-80 border-2 rounded-lg">
        <div className=" p-3 bg-gray-100">
            <h1 className="text-center text-2xl font-semibold">Pro</h1>
        </div>
        <hr className=" bg-gray-200"/>
        <div className=" mt-5 ">
            <h2 className="font-medium text-xl mx-6">Features</h2>
        </div>
        <button className="text-white mt-52 text-xl rounded-xl mx-6 hover:bg-blue-600  bg-blue-500 border-2 h-12 w-64 p-2 ">Get started</button>
    </div>
    <div className="box1 h-96 w-80 border-2 border-blue-400 rounded-lg">
        <div className="p-3 bg-blue-500 rounded-t-md">
            <h1 className="text-center text-2xl font-semibold">Pro plus</h1>
        </div>
        <hr className=" bg-gray-200"/>
        <div className="mt-5 ">
            <h2 className="font-medium text-xl mx-6">Features</h2>
        </div>
        <button className="text-white hover:bg-blue-600 bg-blue-500 mt-52 text-xl rounded-xl mx-6 border-blue-400 border-2 h-12 w-64 p-2 ">Contact us</button>
    </div>
</div>
<div className="plans mt-16 ">
    <h1 className="text-center text-3xl font-alkalami">Compare plans</h1>
    <div className="ras">
        <ul className=" mt-5  flex justify-center">
            <li className=" mx-32 font-bold text-lg ">Free</li>
            <li className=" mx-32 font-bold text-lg ">Pro</li>
            <li className=" mx-32 font-bold text-lg ">Pro plus</li>
        </ul>
    </div>
    <div className="left ">
       <hr/>
       <h3 className="p-3 font-bold text-lg">Public</h3>
       <i className="fa-sharp fa-solid fa-checked"></i>
       <hr/>
       <h3 className="p-3 font-bold text-lg">Private</h3>
       <hr/>
       <h3 className="p-3 font-bold text-lg">Permissions</h3>
       <hr/>
       <h3 className="p-3 font-bold text-lg">Unlimited members</h3>
       <hr/>
       <h3 className="p-3 font-bold text-lg">Extra security</h3>
       <hr/>
    </div>
</div>
</div>
)
}

export default Pricing;