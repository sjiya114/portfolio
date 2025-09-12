"use client";
import { useState} from 'react';
import Link from  'next/link'
import   {PersonStanding,Menu,X} from 'lucide-react'
import WrapButton from './ui/wrap-button';
import { Button} from './ui/button';
function Navbar() {
  const [hidden,setHidden]=useState(true);
  return (
    <>
      <div className='text-white fixed left-0 right-0 top-0 z-[1] bg-[#0D0910] max-md:hidden flex flex-row shadow-2xl shadow-zinc-600  px-4 py-2 mt-6 border-t-1  border-gray-400 rounded-4xl justify-between items-center  '   >
      <PersonStanding className='w-14 h-14' color='white' />
      <div className='flex flex-row font-bold  font-stretch-extra-expanded   space-x-10'  >
      <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/">Home</Link></Button>
       <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/About">About</Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="#skills">Skills </Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="#projects">Projects</Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="#contact">Contact</Link></Button>
      </div>
       <div  className='flex flex-row font-bold space-x-6'>
         <WrapButton children="Resume"/>
      </div> 
    </div>
         {/* // mobile view */}
     <div className='fixed z-50  right-0 top-0 left-0  bg-black shadow-md shadow-white text-white flex flex-col   md:hidden hover:border-indigo-900 hover:text-white px-4 py-2 mt-6  border-t-1  border-gray-400 rounded-4xl justify-between items-center  overflow-x-hidden   '>
        <div className='flex flex-row space-x-10 '>
           <PersonStanding color='white' />
           {hidden &&  <Menu onClick={()=>{setHidden(!hidden)}}  />}
           {!hidden && <X  onClick={()=>{setHidden(!hidden)}} />}
        </div>
        {!hidden  &&<> < ul className='flex flex-col   items-center space-y-4 font-bold text-xl'>
      <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/">Home</Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/">Skills </Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/">Projects</Link></Button>
     <Button asChild variant="ghost" className="hover:bg-white/10"><Link href="/">Contact</Link></Button>
      </ul> 
      <div  className='flex flex-row max-md:mt-4 max-md:space-y-4  max-md:flex-col font-bold space-x-6'>
         <WrapButton children="Resume"/>
      </div> </>
}            
             </div> 
    
    
    
    
    
    </>
    
  )
}

export default Navbar