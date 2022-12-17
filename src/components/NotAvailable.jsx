import Nav from "./Nav";
import HomeStyles from './HomeStyles.css'
import { Link } from "react-router-dom";
function NotAvailable (props){
    return(
        <section>
            {props?.res ? <PageError message={props.message} />:<PageNotFound/> }
        </section>

    )
}

function PageNotFound(){
    return(
        <div className="h-screen">
            <div className="m-auto text-center ">
                <div className="p-4">
                <p className="text-5xl text-red-400 font-semibold underline decoration-white relative" id="error-title" >Page Not Found</p>
                <p className="text-lg mt-4 text-gray-500" id= "error-des">Oops! You've reached a page that doesn't exit.</p>
                <Link to='/'><button className="bg-emerald-400 py-2 px-4 rounded-md mt-2 font-bold hover:scale-105 hover:text-white">TAKE HOME</button></Link>
                </div>
                
            </div>
        </div>
    )
}

function PageError(props){
    return(
        <div className="h-screen">
            <div className="m-auto text-center ">
                <div className="p-4">
                <p className="text-5xl text-red-400 font-semibold underline decoration-white relative" id="error-title" >ERROR!</p>
                <p className="text-lg mt-4 text-gray-500" id= "error-des">{props.message?props.message : 'Oops! Something went wrong, Try again later.'}</p>
                <Link to='/'><button className="bg-emerald-400 py-2 px-4 rounded-md mt-2 font-bold hover:scale-105 hover:text-white">TAKE HOME</button></Link>
                </div>
                
            </div>
        </div>
    )
}

export default NotAvailable;