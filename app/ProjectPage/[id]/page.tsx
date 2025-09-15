"use client";
import { useState,Suspense,useEffect, useContext, use } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AppContext } from '../../context/AppContext';
import { param } from 'framer-motion/client';
interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

interface ProjectData {
  ide: number;
  name: string;
  images: string[];
  description: string;
  github: string;
  live: string;
  techStack: string[];
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const context = useContext(AppContext);
if (!context) {
  throw new Error("AppContext not found. Wrap your app with <AppContextProvider>");
}
const { projects } = context;
  const {id}=use(params);
  const [currProject, setCurrProject] = useState<ProjectData | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  useEffect(() => {
    console.log(id+projects);
    if (!projects) return;
    const found = projects.find(
      (project: ProjectData) => project.ide === Number(id)
    );
    if (found) {
      setCurrProject(found);
      setMainImage(found.images?.[0] || "");
    }
  }, [projects,id]);
  return (
    <>
    <div className='px-4 pt-20 text-white my-20 mt-20  max-sm:mx-4'>
                
                    <h1 className='text-4xl text-center mb-20 font-semibold'>{currProject?.name}</h1>
                
                <div className='flex max-lg:flex-col flex-row justify-center items-center  space-x-10 space-y-6'>
                    <div>
                        <img src={mainImage || "/p1.png"} className='w-[40vw] h-[40vh] max-lg:w-[500px]  max-sm:w-[100%] max-sm:h-[90%]   max-lg:h-[40vh] rounded-lg' alt="" />
                    </div>
                    <div className='flex flex-row  flex-wrap max-sm:flex-col  space-y-4 space-x-10'>
                        {currProject?.images && currProject.images.length>0 && currProject?.images.map((image,index) => (
                            <div key={index}>
                                <img src={image} onClick={(e) => { setMainImage(image) }} className='w-[20vw] h-[24vh] max-lg:w-[300px] hover:border-orange-500 hover:border-2  max-sm:w-[80%] max-sm:h-[70%]   max-lg:h-[200px] rounded-lg' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between space-y-2  mt-4'>
                    <h1 className=' text-2xl font-semibold'>Description</h1>
                    <Link href={currProject?.description || ""}> {currProject?.description} </Link>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between mt-4'>
                    <h1 className=' text-2xl font-semibold'>Github Link</h1>
                    <Link href={currProject?.github || ""}>{currProject?.github}</Link>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between mt-4'>
                    <h1 className=' text-2xl font-semibold'>Live Link</h1>
                    <Link href={currProject?.live || ""} >{currProject?.live}</Link>
                </div>
                 
                <div className='flex flex-row flex-wrap  space-x-10 max-w-screen-xl mt-4 mx-auto'>
                    {currProject?.techStack && currProject.techStack.length>0 && currProject?.techStack.map((tech,index) => (
                        <div key={index} className='bg-gray-200 rounded-lg mt-4 text-sm font-semibold   px-2 py-2  shadow-xs shadow-white text-black'>
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
  )
}
