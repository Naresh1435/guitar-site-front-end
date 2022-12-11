import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Pricing() {
return (
<div className="bg-slate-800 p-4">
    <div className="conatiner mt-10 p-2 flex justify-center ">
        <div className="box1  mx-4 border-2 rounded-md">
            <div className=" p-2 bg-gray-100">
                <h1 className="text-center text-2xl font-semibold">Free Plan</h1>
            </div>
            <hr className=" bg-gray-400" />
            <p className="text-white text-center mt-2">Self Paced Learning</p>
            <h2 className="mx-2 font-medium text-xl border-b-2 w-20 border-emerald-400 text-white  mt-2">Features</h2>
            <ul className=" flex flex-col mx-4 mt-4  ">
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>

            </ul>
            <button
                className="text-white bg-slate-900  text-xl mt-4 hover:bg-black  hover:text-white rounded-xl mx-6 border-emerald-400 border-2 h-12 w-64 p-2 ">Sign
                up for free</button>
        </div>
        <div className=" mx-4    border-2 rounded-md">
            <div className="p-2 bg-gray-100">
                <h1 className="text-center text-2xl font-semibold">Pro</h1>
            </div>
            <hr className=" bg-gray-200" />
            <p className="mx-5 mt-2 text-center text-white">One-time payment of $199</p>

            <h2 className="mx-2 font-medium text-xl border-b-2 w-20 border-emerald-400 text-white  mt-2">Features</h2>
            
            <ul className=" flex flex-col mx-4 mt-4  ">
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                

            </ul>
            <a href="/api/payment?plan=plan_KbHl03IPQIEFKv&type=pro&role=student&status=create"><button
                    className="text-white bg-emerald-400 mt-4 text-xl rounded-xl mx-6 hover:bg-emerald-600 border-2 h-12 w-64 p-2 ">Get
                    started</button></a>
        </div>
        <div className=" mx-4 border-2 border-emerald-400 rounded-md ">
            <div className="p-2 bg-emerald-400 rounded-t-md">
                <h1 className="text-center text-2xl text-white font-semibold">Pro plus</h1>
            </div>
            <hr className=" bg-gray-200" />
            <p className="mx-5 mt-2  text-white text-center">One-time payment of $199</p>

            <h2 className="mx-2 font-medium text-xl border-b-2 w-20 border-emerald-400 text-white  mt-2">Features</h2>
            <ul className=" flex flex-col mx-4 mt-4  ">
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
                <li className="my-1">
                    <p className="text-white  font-medium text-md">
                        <FontAwesomeIcon icon="fa-solid fa-square-check" /> Music Notes </p>
                </li>
            </ul>
            <a href="/api/payment/?plan=plan_KfUTdm9pE8pP94&type=plus&role=student&status=create" className=""><button
                    className="text-black hover:bg-white bg-emerald-400 mt-4  text-xl rounded-xl mx-6 border-emerald-500 border-2 h-12 w-64 p-2 my-4 ">Contact
                    us</button></a>
        </div>
    </div>
    <div className="container align-center ">
        <div className="plans mt-16 ">
            <h1 className="text-center text-3xl font-alkalami  ">Compare plans</h1>
            <div className="ras">
                <ul className=" mt-5  flex justify-center">
                    <li className=" mx-32 font-bold text-lg  ">Free</li>
                    <li className=" mx-20 font-bold text-lg  ">Pro</li>
                    <li className=" mx-20 font-bold text-lg  ">Pro plus</li>
                </ul>

            </div>
            <div className="left w-4/5 mx-36">
                <hr classname="" />
                <div className="sen flex">
                    <h3 className="p-3 font-bold text-lg ">Public</h3>
                    <div className="lock flex mx-48 ">
                        <div className="tic mt-4 mx-2">


                        </div>

                    </div>
                </div>

                <hr classname="" />
                <div className="sen flex ">
                    <h3 className="p-3 font-bold text-lg ">Private</h3>
                    <div className="lock flex mx-48 ">

                    </div>
                </div>
                <hr classname="" />
                <div className="sen flex ">
                    <h3 className="p-3 font-bold text-lg ">Permissions</h3>
                    <div className="lock flex mx-36 ">
                        <div className="tic mt-4 mx-2">


                        </div>

                    </div>
                </div>
                <hr classname="" />
                <div className="sen flex ">
                    <h3 className="p-3 font-bold text-lg ">Unlimited members</h3>
                    <div className="lock flex mx-24 ">
                        <div className="tic mt-4 mx-2">


                        </div>

                    </div>
                </div>
                <hr classname="" />
                <div className="sen flex ">
                    <h3 className="p-3 font-bold text-lg  ">Extra security</h3>
                    <div className="lock flex mx-52 ">
                        <div className="tic mt-4 mx-2">


                        </div>


                    </div>
                </div>
                <hr classname="" />
            </div>
        </div>
    </div>
</div>

)
}

export default Pricing;