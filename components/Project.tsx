"use client";
import React, { useContext } from 'react'
import Image from 'next/image'
import {Swiper,SwiperSlide}  from 'swiper/react'
import {Pagination,Mousewheel,Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { AppContext } from '@/app/context/AppContext';
// function Project() {
//   const projectData=[{
//     name:"Prescripto:An Appointment Booking Site",
//     images:['/p1.png','/p11.png'],
//     description:"Prescripto is a healthcare booking platform that allows patients to schedule appointments, make secure payments, and instantly receive booking confirmations. It also provides a downloadable receipt feature, ensuring a smooth and reliable experience for both patients and healthcare providers.",
//     github:"https://github.com/sjiya114/Prescripto",
//     live:"https://prescripto-dc8m.vercel.app/",
//     techStack: [
//   "React.js",             
//   "Tailwind CSS",        
//   "Node.js",           
//   "Express.js",       
//   "MongoDB Atlas",
//   "cloudinary",     
//   "Mongoose",        
//   "JWT", 
//   "jspdf.js" ,
//   "Axios",
//   "Toastify" ,
//   "vercel",
//   "stripe"
// ]

//   },{
//     name:"Hotel Booking Website",
//     images:['/p2.png','/p22.png'],
//     description:"Hotel Booking Website is an online platform that allows users to search, view, and book hotels seamlessly. It provides features like hotel image galleries, detailed descriptions, and availability status to help users make informed choices. The system supports secure user authentication, booking confirmation, and payment optionst. It also ensures smooth integration between frontend and backend, offering users a reliable and hassle-free hotel booking experience.",
//     github:"https://github.com/sjiya114/Hotel_Booking",
//     live:"https://hotel-booking-frontend-9g3o.onrender.com/",
//     techStack:[
//   "React.js",           
//   "Tailwind CSS",        
//   "Node.js",              
//   "Express.js",           
//   "MongoDB Atlas",       
//   "Mongoose",            
//   "JSON Web Token (JWT)",
//   "Multer",              
//   "Cloudinary",          
//   "Axios",                
//   "Toastify"  ,
//   "razor-pay",
//   "github",
//   "render"      
// ]

//   },{
//     name:"Coding Ninjas Clone",
//     images:['/p3.png','/p33.png'],
//     description:"Coding Ninjas Frontend Clone is a user interface replica of the Coding Ninjas platform, designed to practice and showcase frontend development skills. It includes structured pages for courses, homepage, navigation, and responsive layouts to provide a seamless browsing experience. The project focuses on clean design, responsiveness, and component-based architecture to mirror the look and feel of the original platform.",
//     github:"https://github.com/sjiya114/Coding_Ninjas_Clone",
//     live:"https://coding-ninjas-clone-theta.vercel.app/",
//     techStack:["React.js","framer-motion","aos","tailwind-css","lucide-react","swiper.js","firebase","vercel"]
//   },{
//     name:"Weather App",
//     images:['/p4.png','/p44.png'],
//     description:"Weather App is a simple and interactive application that provides real-time weather updates for any location. Users can search by city name to view details such as temperature, humidity, wind speed, and weather conditions. The app features a clean and responsive interface, ensuring accessibility across devices.",
//     github:"https://github.com/sjiya114/Weather_App",
//     live:"https://sjiya114.github.io/Weather_App/",
//     techStack:[
//   "React.js",
//   "OpenWeatherMap API (or any Weather API)",
// "Fetch API",
//   "GitHub",
//   "github pages(deployment)"
// ]
//   },{
//     name:"Global Reviews",
//     images:['/p5.png','/p55.png'],
//     description:"GLOBAL Reviews is an interactive platform where users can post and explore genuine reviews about products and services. It includes features like an admin approval system to ensure authenticity, search and filter options for quick access to relevant reviews, automatic timestamps for transparency, and a dynamic section highlighting the latest reviews to keep the platform updated and engaging.",
//     github:"https://github.com/sjiya114/Minor_Project",
//     live:"",
//     techStack:[
//   "React.js",           
//   "Bootstrap",
//   "Node.js",             
//   "Express.js",          
//   "MongoDB Atlas",       
//   "Mongoose",          
//   "JSON Web Token (JWT)",
//   "Multer", 
//   "Axios",     
//   "Toastify",
//   "github"   
// ]

//   }
// ]
//   const {projects}=useContext(AppContext);
//   return (
//     <>
//     <h1 className='text-6xl font-bold text-center text-white mt-5 mb-20'  >Projects</h1>
//     <div id='projects' className='overflow-x-hidden flex flex-row flex-wrap  max-md:flex-col justify-center mb-20   space-y-20 w-full max-w-screen-xl mx-auto'>
//      {projects.map((data,index)=> <div  key={index}>
//          <h1 className='text-3xl font-bold text-center text-white mt-5 mb-20'  >{data.name}</h1>
//         <Link href={`/ProjectPage/${data.ide}`}    ><Swiper slidesPerView={1}  autoplay={{delay:2000}}  direction='horizontal' mousewheel={true}
//         modules={[Pagination,Mousewheel,Autoplay]}
//         className="mySwiper    w-1/2  pt-20  max-md:w-[100%] max-md:mx-4"  >
//             <SwiperSlide >
//                  <Image
//   src={data.images[0]}
//   priority
//   alt="project image"
//   width={400}   // required
//   height={300}  // required
//   className="rounded-4xl border-4 border-zinc-400 max-md:w-full max-md:h-auto"
// />
//             </SwiperSlide>
//             <SwiperSlide>
//                   <Image
//   src={data.images[1]}
//   priority
//   alt="project image"
//   width={400}   // required
//   height={300}  // required
//   className="rounded-4xl border-4 border-zinc-400 max-md:w-full max-md:h-auto"
// />
//             </SwiperSlide>
//         </Swiper>
//         </Link>
//       </div>
// )}
// </div>
// </>
     
    
//   )
// }

// export default Project
// "use client";
// import React, { useContext } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Mousewheel, Autoplay } from "swiper";
// import { AppContext } from "../../context/AppContext";

export default function ProjectsSection() {
 const context = useContext(AppContext);
if (!context) {
  throw new Error("AppContext not found. Wrap your app with <AppContextProvider>");
}
const { projects } = context;


  if (!projects) return <p className="text-center mt-20 text-white">Loading projects...</p>;

  return (
    <>
      <h1 className="text-6xl font-bold text-center text-white mt-5 mb-20">
        Projects
      </h1>

      <div
        id="projects"
        className="flex flex-wrap justify-center space-y-20 max-md:flex-col w-full max-w-screen-xl mx-auto"
      >
        {projects.map((project, idx) => (
          <div key={idx} className="mb-10 w-full max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mt-10 mb-10">
              {project.name}
            </h2>

            <Link href={`/ProjectPage/${project.ide}`}>
              <Swiper
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                direction="horizontal"
                mousewheel
                modules={[Pagination, Mousewheel, Autoplay]}
                className="mySwiper w-full h-[300px] max-md:h-64 rounded-4xl overflow-hidden"
              >
                {project.images.map((imgSrc, imgIdx) => (
                  <SwiperSlide key={imgIdx} className="relative w-full h-full">
                    <Image
                      src={imgSrc}
                      alt={`${project.name} image ${imgIdx + 1}`}
                      fill
                      className="object-cover rounded-4xl"
                      placeholder="blur"
                      blurDataURL="/placeholder.png"
                      priority={imgIdx === 0} // only first image loads immediately
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
