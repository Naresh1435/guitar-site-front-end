
function RoleSelect(){
    return(
        <div className="bg-gray-200 h-screen">
            <a href="/api/login?role=mentor"><button className=" border-2 border-blue-400 my-10 mx-20 text-2xl p-2 rounded hover:bg-blue-400">Mentor</button></a>
            <br/>
            <br/>
            <a href="/api/login?role=student"><button className=" border-2 bg-blue-500 text-2xl mx-20 my-10 p-2 rounded hover:bg-white hover:border-blue-400">Student</button></a>
        </div>
    )
}
export default RoleSelect;