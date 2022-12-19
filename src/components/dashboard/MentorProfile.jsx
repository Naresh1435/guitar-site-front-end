function MentorProfile(props){
    console.log(props);
    return(
        <div className="container">
       <div className="mt-8">
            <ul className="flex gap-8 justify-left text-slate-800 font-semibold text-lg capitalize ">
                <li className=""><span className=" hover:text-emerald-400 cursor-pointer" >profile</span>
                <NavPointer/>
                </li>
                
            </ul>
        </div>
        <Profile img_url ={props.img_url} user_data={props.mentor}/>
    </div>
    )
}

function NavPointer(){
    return(
        <div className="bg-emerald-400 h-1 w-full"></div>
        
    )
}

function Profile(props) {
    return (
        <div className="container mt-10 justify-center rounded-lg bg-slate-200 p-4 w-2/3">
            <div className="mt-8 h-20 ">
                <img src={props?.img_url} alt="img" className="rounded-full mx-auto h-16 w-16 justify-center" />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-10 justify-around p-3">
                <div className="flex col-span-2 ">
                    <div className="px-3 w-1/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Email</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.user_data?.email} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex col-span-2" >
                    <div className="px-3 w-1/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Auth ID</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.user_data?.authID} className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-100 focus:outline-none w-100 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex col-span-2">
                    <div className="p-2 w-1/3 bg-slate-900 text-white w-1/3 rounded-l-lg ">
                        <span>Status</span>
                    </div>
                    <div className="w-2/3">
                        <input type="text" value={props.user_data?.status ? 'Active' : 'Inactive'} className={`border-2 border-slate-900 p-2 py-2 rounded-r-lg w-90 focus:outline-none w-100 bg-slate-200 capitalize ${props.user_data?.status? 'text-emerald-400' : 'text-red-400'} `}readOnly/>
                    </div>
                </div>
                <div className="flex ">
                    <div className="px-3 w-2/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Total Students</span>
                    </div>
                    <div className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-1/3">
                        <input type="number" value={props.user_data?.students?.length} className="focus:outline-none w-2/3 bg-slate-200 " readOnly/>
                    </div>
                </div>
                <div className="flex ">
                    <div className="px-3 w-2/3 bg-slate-900 py-2 text-white rounded-l-lg ">
                        <span>Total Groups</span>
                    </div>
                    <div className="border-2 border-slate-900 px-3 py-2 rounded-r-lg w-1/3">
                        <input type="number" value={props.user_data?.groups?.length} className="focus:outline-none w-2/3 bg-slate-200 " readOnly/>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default MentorProfile;