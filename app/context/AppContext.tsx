"use client";

import { createContext, useState, ReactNode } from "react";

// 1️⃣ Type for a single project
export interface ProjectData {
  ide: number;
  name: string;
  images: string[];
  description: string;
  github: string;
  live: string;
  techStack: string[];
}

// 2️⃣ Type for context value
interface AppContextType {
  projects: ProjectData[];
  setProjects: (projects: ProjectData[]) => void;
}

// 3️⃣ Create typed context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// 4️⃣ Provider component
interface AppContextProviderProps {
  children: ReactNode;
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const projectData = [{
    name: "Prescripto:An Appointment Booking Site",
    ide: 1,
    images: ['/p1.png', '/p11.png'],
    description: "Prescripto is a healthcare booking platform that allows patients to schedule appointments, make secure payments, and instantly receive booking confirmations. It also provides a downloadable receipt feature, ensuring a smooth and reliable experience for both patients and healthcare providers.",
    github: "https://github.com/sjiya114/Prescripto",
    live: "https://prescripto-dc8m.vercel.app/",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "cloudinary",
      "Mongoose",
      "JWT",
      "jspdf.js",
      "Axios",
      "Toastify",
      "vercel",
      "stripe"
    ]

  }, {
    name: "Hotel Booking Website",
    images: ['/p2.png', '/p22.png'],
    ide: 2,
    description: "Hotel Booking Website is an online platform that allows users to search, view, and book hotels seamlessly. It provides features like hotel image galleries, detailed descriptions, and availability status to help users make informed choices. The system supports secure user authentication, booking confirmation, and payment optionst. It also ensures smooth integration between frontend and backend, offering users a reliable and hassle-free hotel booking experience.",
    github: "https://github.com/sjiya114/Hotel_Booking",
    live: "https://hotel-booking-frontend-9g3o.onrender.com/",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "JSON Web Token (JWT)",
      "Multer",
      "Cloudinary",
      "Axios",
      "Toastify",
      "razor-pay",
      "github",
      "render"
    ]

  }, {
    name: "Coding Ninjas Clone",
    ide: 3,
    images: ['/p3.png', '/p33.png'],
    description: "Coding Ninjas Frontend Clone is a user interface replica of the Coding Ninjas platform, designed to practice and showcase frontend development skills. It includes structured pages for courses, homepage, navigation, and responsive layouts to provide a seamless browsing experience. The project focuses on clean design, responsiveness, and component-based architecture to mirror the look and feel of the original platform.",
    github: "https://github.com/sjiya114/Coding_Ninjas_Clone",
    live: "https://coding-ninjas-clone-theta.vercel.app/",
    techStack: ["React.js", "framer-motion", "aos", "tailwind-css", "lucide-react", "swiper.js", "firebase", "vercel"]
  }, {
    name: "Weather App",
    images: ['/p4.png', '/p44.png'],
    ide: 4,
    description: "Weather App is a simple and interactive application that provides real-time weather updates for any location. Users can search by city name to view details such as temperature, humidity, wind speed, and weather conditions. The app features a clean and responsive interface, ensuring accessibility across devices.",
    github: "https://github.com/sjiya114/Weather_App",
    live: "https://sjiya114.github.io/Weather_App/",
    techStack: [
      "React.js",
      "OpenWeatherMap API (or any Weather API)",
      "Fetch API",
      "GitHub",
      "github pages(deployment)"
    ]
  }, {
    name: "Global Reviews",
    ide: 5,
    images: ['/p5.png', '/p55.png'],
    description: "GLOBAL Reviews is an interactive platform where users can post and explore genuine reviews about products and services. It includes features like an admin approval system to ensure authenticity, search and filter options for quick access to relevant reviews, automatic timestamps for transparency, and a dynamic section highlighting the latest reviews to keep the platform updated and engaging.",
    github: "https://github.com/sjiya114/Know-your-product",
    live: "https://global-review-frontend.vercel.app/",
    techStack: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "JSON Web Token (JWT)",
      "Multer",
      "Axios",
      "Toastify",
      "github"
    ]

  }
  ]
  const [projects, setProjects] = useState<ProjectData[]>(projectData);
  return (
    <AppContext.Provider value={{ projects, setProjects }}  >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
