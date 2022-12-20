import React from "react";
import { useLoaderData } from "react-router-dom";
import NotAvailable from "./NotAvailable";
function CourseDescription(){
    const loaderData = useLoaderData();
    console.log(loaderData);
    return(
       loaderData.response?<CourseContainer/> : <NotAvailable/> 
    )
}

function CourseContainer(){
    return(
        <main>
        <h1 class="absolute font-bold text-3xl text-white mt-24"></h1>
        <div class="box border-2 h-16 mt-60 mx-14 w-32 absolute bg-gray-100 ">
            <a href="">Enroll For Free</a>
            <p>starts 7ct</p>
        </div>
        <div class="image">
            <img class=" h-96 w-screen" src="Blue-color-background-wallpapers-HD-colorful.jpg" alt=""/>
        </div>
        <div class="container">
            <ul class="flex mx-28">
                <li class=" mx-10  mt-5"><a href="">about</a></li>
                <li class=" mx-10  mt-5"><a href="">syllabus</a></li>
                <li class=" mx-10  mt-5"><a href="">Reviews</a></li>
                <li class="  mx-10 mt-5"><a href="">Enrollment Options</a></li>
                <li class=" mx-10  mt-5"><a href="">features</a></li>
            </ul>
            <hr class="mt-8"/>
            </div>
              <div class="container2 h-4/5 w-3/5 mx-32">
                 <h1 class="font-semibold text-xl mt-8">About this Course</h1>
          <p class="mt-5">In this course you will engage in a series of challenges designed to increase your own happiness and build more productive habits. As preparation for these tasks, Professor Laurie Santos reveals misconceptions about happiness, annoying features of the mind that lead us to think the way we do, and the research that can help us change. You will ultimately be prepared to successfully incorporate a specific wellness activity into your life.</p>
        <h3 class="mt-4 text-sm">THE SCIENCE OF WELL BEING WAS PRODUCED IN PART DUE TO THE GENEROUS FUNDING OF THE DAVID F. SWENSEN FUND FOR INNOVATION IN TEACHING.</h3>
        <div class="box h-24 p-2 w-96 mt-10 border-2">
            <h2>SKILLS YOU WILL GAIN</h2>
            <div class="raj flex mt-4">
            <span class="h-9 p-1 rounded-2xl mx-2 w-20 bg-gray-300 border-2 ">Gratitude</span> 
            <span class="h-9 p-1 rounded-2xl mx-2 w-20 bg-gray-300 border-2 ">Gratitude</span>   
            <span class="h-9 p-1 rounded-2xl mx-2 w-20 bg-gray-300 border-2 ">Gratitude</span>   
            <span class="h-9 p-1 rounded-2xl mx-2 w-20 bg-gray-300 border-2 ">Gratitude</span>  
        </div> 
</div>
</div>
<hr class="mt-5 mx-32"/>
<div class="syllabus mt-10 mx-32">
  <h1 class="text-3xl font-semibold text-center">Syllabus - What you will learn from this course</h1>
  <div class="box flex">
    <div class="son mt-10 ">
    <h1 class="text-lg font-thin">WEEK</h1>
    <h1 class="text-5xl">1</h1>
</div>
    <div class="raj mt-10 mx-8">
        <i class="fa-regular text-sm fa-clock ">2 hours to complete</i>
     <p class="text-lg mt-5">Introduction</p>
     <p class="text-lg mt-5" >Why take this course?</p>
     <i class=" fa fa-light text-sm fa-video mt-5">4 videos (Total 13 min), 9 readings</i>
     <a class="text-lg" href="">See all</a>
    </div>
  </div>
  <hr class="mt-5 mx-32"/>
  <div class="box flex">
    <div class="son mt-10 ">
    <h1 class="text-lg font-thin">WEEK</h1>
    <h1 class="text-5xl">2</h1>
</div>
    <div class="raj mt-10 mx-8">
        <i class="fa-regular text-sm fa-clock ">2 hours to complete</i>
     <p class="text-lg mt-5">Misconceptions About Happiness</p>
     <p class="text-lg mt-5" >What do we think will make us happy?</p>
     <i class=" fa fa-light text-sm fa-video mt-5">7 videos (Total 13 min), 3 readings,1 quiz</i>
     <a class="text-lg" href="">See all</a>
    </div>
  </div>
  <hr class="mt-5 mx-32"/>
  <div class="box flex">
    <div class="son mt-10 ">
    <h1 class="text-lg font-thin">WEEK</h1>
    <h1 class="text-5xl">3</h1>
</div>
    <div class="raj mt-10 mx-8">
        <i class="fa-regular text-sm fa-clock ">2 hours to complete</i>
     <p class="text-lg mt-5">Why Our Expectations are so Bad</p>
     <p class="text-lg mt-5" >Why do we mispredict what makes us happy?</p>
     <i class=" fa fa-light text-sm fa-video mt-5">8 videos (Total 13 min), 3 readings,1 quiz</i>
     <a class="text-lg" href="">See all</a>
    </div>
  </div>
  <hr class="mt-5 mx-32"/>
  <div class="box flex">
    <div class="son mt-10 ">
    <h1 class="text-lg font-thin">WEEK</h1>
    <h1 class="text-5xl">4</h1>
</div>
    <div class="raj mt-10 mx-8">
        <i class="fa-regular text-sm fa-clock ">2 hours to complete</i>
     <p class="text-lg mt-5">How Can We Overcome Our Biases</p>
     <p class="text-lg mt-5" >How we counteract our annoying features of the mind?</p>
     <i class=" fa fa-light text-sm fa-video mt-5">7 videos (Total 13 min), 3 readings,1 quiz</i>
     <a class="text-lg" href="">See all</a>
    </div>
  </div>
</div>

       
    </main>
    )
}

export default CourseDescription;