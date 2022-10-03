import {Link} from "react-router-dom";

function BlueLine(){
    return(
    <div className="bg-blue-300 h-1 w-35 mt-2 mx-9"></div>
    );
}

function DashboardNav(props){
    return(<main>
        <div className="container2 flex justify-center mt-10">
            <h1 className="mr-20 font-bold text-2xl font-serif">My Creation</h1>
                <div className="one"><Link className=" font-bold mx-10" to="/dashboard/programs">NANOPROGRAM</Link> 
                {props.display ==="1"?<BlueLine/>:null}
                </div>
                <div className="two"><Link  className="mx-10 font-bold" to="/dashboard/paid-courses">PAID COURSES</Link>
                {props.display ==="2"?<BlueLine/>:null}
                </div>
                <div className="three"><Link class="mx-10 font-bold" to="/dashboard/free-courses">FREE COURSES</Link>
                {props.display ==="3"?<BlueLine/>:null}
                </div>
                
        </div>
    </main>);
}

function DashboardDefault(){
    return(
        <div className="container3  m-auto justify-center mt-8 bg-cyan-500  h-3/4 w-3/4">
            <p className=" mt-9 mx-16">You Are Not Currently Enrolled In Any Program</p>
            <h1 className=" mt-10 mb-10 mx-20">Take The Next Step In Your Life</h1>
            <button className="bg-white mb-10 mx-20 "><Link to="/explore">EXPLORE PROGRAMS</Link></button>
        </div>
    );
}

export {DashboardDefault, DashboardNav};