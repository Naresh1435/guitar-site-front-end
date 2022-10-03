import React from 'react';
import SVG from '../img/Playing Music-bro.png'
import Background from '../img/bg-1.png';
import {Link} from 'react-router-dom';
function Home () {
    return (<div className="">
        <div>
  <img src={Background} className="blur-md z-0 absolute" alt="musicnotes"/>
</div>
<div className="container2 flex justify-center mt-10 z-40 relative">
     <div className="main bg-gray-200 bg-opacity-60 rounded-3xl h-96 w-96 mx-24"> 
        <h1>Want to become a Guitar Expert?<br/>Guitar Site is the perfect platform to learn guitar. With our lessons and interactive tools, you can learn at your own pace and become the legend you've always wanted to be.</h1>
        <Link to='/select-role'><button className="bg-blue-500 px-7 opa p-2 mx-24 hover:bg-blue-400 rounded-3xl mt-72">Register here </button></Link>
        <span className="mx-20 text-md">Already existing user? <Link to='/select-role'> Login</Link> </span>
     </div>
     <div className="right">
        <img src={SVG} class="h-96 w-96 mx-24" alt=""/>
        </div>
    </div>
    <div className="box h-80 mt-10 rounded-3xl   w-4/5 mx-32 bg-blue-400 bg-opacity-80 relative"></div>

    </div>
    )}
export default Home;