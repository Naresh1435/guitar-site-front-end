import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer(){
    return (
    
        <footer className="bg-slate-800 p-5 z-0 relative mt-80">
        <section className='container w-5/6 mx-auto bg-emerald-400 h-64 -top-32 left-0 right-0 z-10 absolute shadow-black shadow-md'>
            <h1 className="text-center mt-4 text-4xl font-bold ">You Have power to define your Future</h1>
            <div className="flex justify-center mt-16">
            <input type="email" className="rounded-l-md  border-2 text-black border-black bg-transparent p-2 text-center placeholder:text-black w-2/5" placeholder="EMAIL ADDRESS" />
            <button className=" bg-black text-emerald-400 font-semibold p-3 rounded-r-md">Submit</button>
            </div>
            
        </section>
            <section className="grid grid-cols-2 z-0 mt-20">
                <div>
                    <h1 className="text-white  font-black text-md mt-5">LEARNING PLATFORM</h1>
                    <ul className="">
    
                        <li className="text-white hover:text-emerald-400 font-medium text-md mt-2">
                            <Link to="/Home">Home</Link>
                        </li>
                        <li className="text-white hover:text-emerald-400 font-medium text-md mt-2">
                            <Link to="/features">Features</Link>
                        </li>
                        <li className="text-white hover:text-emerald-400 font-medium text-md mt-2">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="text-white hover:text-emerald-400 font-medium text-md mt-2">
                            <Link to="/About">About</Link>
                        </li>
                        <li className="text-white hover:text-emerald-400 font-medium text-md mt-2">
                            <Link to="/About">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-auto">
                    <h1 className="text-white font-semibold">Follow us!</h1>
                    <Socials />
                </div>
    
            </section>
    
            <p className="mt-5 text-white">By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                Privacy Policy
                and Content
                Policies. All trademarks are properties of their respective owners. 2008-2022 &copy; Guitarsite Ltd. All
                rights
                reserved.</p>
        </footer>
    
    )
}

function Socials(){
    return(
    <ul className='flex mt-4'>
        <li className='text-white text-3xl mx-2 hover:text-emerald-400 hover:scale-105 '>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </li>
        <li className='text-white text-3xl mx-2 hover:text-emerald-400 hover:scale-105 '>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </li>
        <li className='text-white text-3xl mx-2 hover:text-emerald-400 hover:scale-105 '>
            <FontAwesomeIcon icon="fa-brands fa-telegram" />
        </li>
        <li className='text-white text-3xl mx-2 hover:text-emerald-400 hover:scale-105'>
            <FontAwesomeIcon icon="fa-brands fa-discord" />
        </li>
    </ul>
    )
}

export  {Footer,Socials};