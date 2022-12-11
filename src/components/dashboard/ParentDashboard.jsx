import { Routes ,Route} from "react-router-dom";
import GroupProfile from './GroupProfile'

function GroupDashboard(){
    return (
        <Routes>
            <Route path='profile' element=<GroupProfile/> />
        </Routes>
    )
}


export default GroupDashboard;