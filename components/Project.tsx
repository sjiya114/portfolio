"use client";
import React, { useContext } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { AppContext } from '@/app/context/AppContext';

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
