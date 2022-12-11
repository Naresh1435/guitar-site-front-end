import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


function SideBarLearningPage(){
const [navToggle, setNavToggle] = useState(true);
function handleClick(){
setNavToggle(navToggle => !navToggle);
}

function Module_list(){
    return(
        <div className='py-1 px-2 text-white'>
                <Link to='new'>
                <FontAwesomeIcon icon='fa-solid fa-circle' /> Introduction</Link>
        </div>
    )
}

const arrowBtn =<button className={`font-semibold p-2 text-lg absolute focus:outline-none`} onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
const crossBtn =<button className={`font-semibold p-2 text-lg absolute right-1 text-2xl top-0 focus:outline-none z-10`} onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>


return(
<div className="h-screen ">
        <div className='relative'>
        {navToggle ? crossBtn:arrowBtn}
        <div className={`relative w-60 bg-cyan-700 h-screen ${navToggle?'':'hidden'}`}>
        <div className='mx-2 py-4'>
            <Module_list/>
            <Module_list/>
        </div>
    </div>
    </div>
</div>
);
}



export default SideBarLearningPage;