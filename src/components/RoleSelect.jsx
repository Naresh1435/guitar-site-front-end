import student from "../img/student.png";
import Webinar from "../img/Webinar-pana.png";
import Parents from "../img/Parents-amico.png";

function RoleSelect(){
    return(
        <div className="p-2 float-center h-screen color-con1 ">
            <div className="">
              <p className="text-center underline decoration-emerald-400  text-white text-3xl mt-4">Choose your role</p>
                <p className="text-center text-white text-lg">I am a...?</p>
                </div>
            <div className="grid justify-items-center mt-10 grid-cols-3 gap-4 p-10">
                <div className="left text-center ">
                <div className="border-2 rounded-lg border-gray-400 shadow-md shadow-black ">
                    <img className="h-56" src={Webinar} alt="" />
                 </div>
                 <a href="/api/login?role=mentor"><button className=" text-white border-emerald-400 border-2 bg-slate-900 mt-3  text-2xl p-2 rounded hover:bg-black focus:outline-none">Mentor</button></a>
                </div>
                <div className="right text-center ">
                <div className="border-2 rounded-lg border-gray-400 bg-white shadow-md shadow-black">
                    <img className="h-56" src={student} alt="" />
                 </div>
                   <a href="/api/login?role=student"><button className=" text-white bg-emerald-400 hover:bg-emerald-600  border-2  text-2xl  mt-3 p-2 rounded focus:outline-none  ">Student</button></a>
                </div> 
                <div className="right text-center ">
                <div className="border-2  rounded-lg border-gray-400 bg-white shadow-md shadow-black">
                    <img className="h-56" src={Parents} alt="" />
                 </div>
                   <a href="/api/login?role=group"><button className=" text-black hover:bg-white bg-emerald-400 border-emerald-500 border-2  text-2xl  mt-3  p-2 rounded focus:outline-none  ">Parent</button></a>
                </div> 
            </div>
        </div>
    )
    }
export default RoleSelect;