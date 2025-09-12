"use client";
import { useState,useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ProjectPage() {
 const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");

  const [information, setInformation] = useState<any>({});
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (dataParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(dataParam));
        setInformation(parsed);
        setMainImage(parsed.images?.[0] || "");
      } catch (error) {
        console.error("Error parsing project data:", error);
      }
    }
  }, [dataParam]);
  return (
    <>
    <div className='px-4  text-white my-20 mt-20 pt-20  max-sm:mx-4'>
                
                    <h1 className='text-4xl text-center mb-20 font-semibold'>{information.name}</h1>
                
                <div className='flex max-lg:flex-col flex-row justify-center items-center  space-x-10 space-y-6'>
                    <div>
                        <img src={mainImage || "/p1.png"} className='w-[40vw] h-[40vh] max-lg:w-[36vw]  max-sm:w-[100%] max-sm:h-[90%]   max-lg:h-[40vh] rounded-lg' alt="" />
                    </div>
                    <div className='flex flex-row flex-wrap max-sm:flex-col  space-y-4 space-x-10'>
                        {information?.images && information.images.length>0 && information?.images.map((image,index) => (
                            <div key={index}>
                                <img src={image} onClick={(e) => { setMainImage(image) }} className='w-[20vw] h-[24vh] max-lg:w-[36vw] hover:border-orange-500 hover:border-2  max-sm:w-[80%] max-sm:h-[70%]   max-lg:h-[40vh] rounded-lg' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between space-y-2  mt-4'>
                    <h1 className=' text-2xl font-semibold'>Description</h1>
                    <Link href={information.description || ""}> {information.description} </Link>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between mt-4'>
                    <h1 className=' text-2xl font-semibold'>Github Link</h1>
                    <Link href={information.github || ""}>{information.github}</Link>
                </div>
                <div className='flex flex-col max-w-screen-xl mx-auto justify-between mt-4'>
                    <h1 className=' text-2xl font-semibold'>Live Link</h1>
                    <Link href={information.live || ""} >{information.live}</Link>
                </div>
                 
                <div className='flex flex-row flex-wrap  space-x-10 max-w-screen-xl mt-4 mx-auto'>
                    {information?.techStack && information.techStack.length>0 && information?.techStack.map((tech,index) => (
                        <div key={index} className='bg-gray-200 rounded-lg mt-4 text-sm font-semibold   px-2 py-2  shadow-xs shadow-white text-black'>
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
  )
}

export default ProjectPage
