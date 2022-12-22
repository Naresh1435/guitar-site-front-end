import $ from 'jquery';


async function  loadResponse() { 
    const get = await fetch('/app/api/verify');
    return (await get).json();
}

async function loadGetResponseMentor() {
    const get = await $.get('/app/api/get/mentor');
    return await get;
}
async function loadGetResponseStudent() {
    const get = await $.get('/app/api/get/student');
    return await get;
}
async function loadGetResponseParent(){
    const get = await fetch('/app/api/get/group');
    return (await get).json();
}

async function loadGetCourse({params}){
    console.log(params)
    const url = '/app/api/explore/'+params.courseID;
    const get = await fetch(url);
    return await get;
}


async function loadSingleCourse({params}){
    const url = '/app/api/mylearning/'+params.courseID;
    const get = await fetch(url);
    return (await get).json();
}

async function loadCourses(){
    const get = await fetch('/app/api/explore');
    return (await get).json();
}
export {loadResponse, loadGetResponseMentor,loadGetResponseStudent,loadGetResponseParent, loadCourses,loadSingleCourse, loadGetCourse};
