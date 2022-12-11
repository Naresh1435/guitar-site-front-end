import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import "../HomeStyles.css";
function CourseContainer(props){
    console.log(props);
    return (
        <div className="mx-5 h-40 w-3/4 mt-20 justify-center rounded-md bg-slate-200 shadow-2xl relative" key={props._id}>
            <div className="container4 left-10 top-7 absolute">
                <h2 className=" font-semibold text-2xl text-slate-700">{props.course_title}</h2>
            </div>
            <button className=" border-2 p-2 rounded-md top-20 left-12 text-emerald-400  border-emerald-400 absolute capitalize">{props.course_plan}</button>
            <Link to={`../view/${props.course_id}`}>
                <button className=" absolute bottom-16 right-20 p-1 h-8 w-10 text-3xl text-emerald-400 hover:scale-110 focus:outline-none">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
            </Link>
        </div>
    )
}

export default CourseContainer;