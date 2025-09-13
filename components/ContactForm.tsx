"use client";
import { ChevronDownIcon,PhoneCall,Mail } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';


export default function ContactForm() {
  const [data,setData]=useState({
   FirstName:"",
   LastName:"",
   Message:"",
   PhoneNumber:"",
   Email:""
  })
  const onChangeHandler=(e)=>
  {
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>
  {
     e.preventDefault();
     let formData=new FormData();
     formData.append("FirstName",data.FirstName);
     formData.append("LastName",data.LastName);
     formData.append("Message",data.Message);
     formData.append("Email",data.Email);
     formData.append("PhoneNumber",data.PhoneNumber);
     formData.append("access_key","49baf150-b86e-46f4-8511-38af61de8664");
     try {
      const res=await axios.post("https://api.web3forms.com/submit",formData, {headers: {
                "Content-Type":"application/json"
            }});
      if(res.data.success)
      {
         console.log("form submitted successfully");
         setData({
          Email:"",
          FirstName:"",
          LastName:"",
          Message:"",
          PhoneNumber:""
         })
      }
      else{
        console.log("error");
      }
     } catch (error) {
      console.log("error");
     }
  }
  return (
    <div id='contact' className='flex flex-row bg-gradient-to-r  from-gray-950 to-gray-900 max-md:flex-col'>
     <div className='w-1/2 flex flex-col max-md:w-full space-y-6 justify-center  px-6 py-24 sm:py-32 lg:pl-40 text-white'>
       <h1 className='text-6xl font-bold'>Get in touch</h1>
       <p className='text-2xl'>For any enquiry contact me at:</p>
       <div  className='flex flex-row text-xl space-x-4'>
         <PhoneCall color='white'/>
          <p>+918103110070</p>
       </div>
       <div className='flex text-xl flex-row space-x-4'>
         <Mail color='white'/>
         <p>sjiya04072004@gmail.com</p>
       </div>
     </div>

       <div className="isolate w-1/2 max-md:w-full  px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <form onSubmit={handleSubmit} encType='form-data' method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name"  className="block text-sm/6 font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="FirstName"
                onChange={(e)=>{onChangeHandler(e)}}
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="LastName"
                onChange={(e)=>{onChangeHandler(e)}}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="Email"
                onChange={(e)=>{onChangeHandler(e)}}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <input
                  id="phone-number"
                  name="PhoneNumber"
                  type="text"
                  onChange={(e)=>{onChangeHandler(e)}}
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="Message"
                onChange={(e)=>{onChangeHandler(e)}}
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
        
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>

    </div>
    
  )
}
