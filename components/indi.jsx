import React from 'react'
import Image from 'next/image'
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
import Link from 'next/link'

function Indi({image,socialFB,socialIG,socialTW,page,name}) {
  return (
    <>
        <span className='h-80 w-full  flex relative group overflow-hidden'> 
        <Image src={image} alt='Poets on an Island' className='w-full object-cover group-hover:grayscale cursor' fill/>
        <span className='absolute py-2 gap-1 flex-col top-0 right-0  group-hover:flex translate-x-10   justify-around text-3xl  '>
        <Link href={socialIG} className='transition text-[#962fbf] group-hover:-translate-x-12 duration-700  ease-in-out hover:bg-white p-2'><BsInstagram/>  </Link>  
        <Link href={socialFB} className='transition text-blue-600 group-hover:-translate-x-12 duration-700  ease-in-out hover:bg-white  p-2'><BsFacebook/>  </Link> 
        <Link href={socialTW} className='transition text-blue-400 group-hover:-translate-x-12 duration-700  ease-in-out hover:bg-white  p-2'><BsTwitter/>  </Link> 
         </span>
         <span className='absolute w-full flex-row items-center  justify-center inset-x-0 bottom-0  flex translate-y-8 group-hover:-translate-y-10 duration-100 ease-in-out  text-xl '> 
         <Link  href={page} className='w-52 bg-[#F2910A] h-8 rounded-md flex items-center justify-center hover:bg-[#E94822]'>{name}</Link>  
         </span>
        
        </span>
        

    </>
  )
}

export default Indi