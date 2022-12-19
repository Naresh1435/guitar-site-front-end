import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import "../HomeStyles.css";
function CourseContainer(props){
    function CourseCards(props) {
        return(
            <div className="mx-5 h-40 w-3/4 mt-20 justify-center rounded-md bg-slate-200 shadow-2xl relative">
                <div className="container4 left-10 top-7 absolute">
                    <h2 className=" font-semibold text-2xl text-slate-700">{props.course.course_title}</h2>
                </div>
                <button className=" border-2 p-2 rounded-md top-20 left-12 text-emerald-400  border-emerald-400 absolute capitalize">{props.course.subscription_plan}</button>
                <Link to={`../view/${props.course._id}`}>
                    <button className=" absolute bottom-16 right-20 p-1 h-8 w-10 text-3xl text-emerald-400 hover:scale-110 focus:outline-none">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </Link>
            </div>
        )
    }
   
    return (
        <section  key={props._id}>
            <CourseCards/>
        </section>
    )
}






export default CourseContainer;