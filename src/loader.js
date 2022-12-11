import $ from 'jquery';


async function  loadResponse() { 
    const get = await fetch('/api/verify');
    return (await get).json();
}

async function loadGetResponseMentor() {
    const get = await $.get('/api/get/mentor');
    return await get;
}
async function loadGetResponseStudent() {
    const get = await $.get('/api/get/student');
    return await get;
}
async function loadGetResponseParent(){
    const get = await fetch('/api/get/parent');
    return (await get).json();
}

async function loadGetCourse({params}){
    console.log(params)
    const url = '/api/explore/'+params.courseID;
    const get = await fetch(url);
    return await get;
}


async function loadSingleCourse({params}){
    const url = '/api/mylearning/'+params.courseID;
    const get = await fetch(url);
    return (await get).json();
}

async function loadCourses(){
    const get = await fetch('/api/explore');
    return (await get).json();
}
export {loadResponse, loadGetResponseMentor,loadGetResponseStudent,loadGetResponseParent, loadCourses,loadSingleCourse, loadGetCourse};
