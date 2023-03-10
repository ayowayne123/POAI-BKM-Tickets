import React from 'react'
import Image from 'next/image'
import mic from '../public/mic.png'
import BkmMain from '../public/BkmMain.png'
import Link from 'next/link'


function Main() {
  return (
    <div className='md:h-full h-screen flex flex-col'> 
    <div id='home' className=' lg:container overflow-hidden w-full h-full  md:h-screen relative'> 
     <div className='' >
        <span className=' backdrop-blur-[40px] -z-10 h-full w-full absolute '> </span>
  <span className='absolute  -z-20 inset-x-0 top-5 flex flex-row justify-center translate-x-[30%] items-center mx-auto' >
  <svg  viewBox="0 0 383 457" fill="none" xmlns="http://www.w3.org/2000/svg" className=' md:w-1/4 xl:w-1/4 '>
<path fillRule="evenodd" clipRule="evenodd" d="M179.78 9.04145C240.598 -4.27955 315.315 -8.6697 357.175 37.4933C398.57 83.142 381.193 155.264 366.737 215.213C355.844 260.384 316.55 287.035 288.142 323.773C251.74 370.849 239.211 455.907 179.78 456.99C120.516 458.069 102.813 375.415 67.4036 327.794C40.2771 291.312 0.276022 260.703 0.00155725 215.213C-0.273918 169.555 36.0529 135.648 66.0369 101.262C99.3956 63.0059 130.245 19.8912 179.78 9.04145Z" fill="#EFD510" fillOpacity="0.2"/>
</svg>

    </span>
      <div className='w-full h-16  grid grid-cols-3 items-center bg-transparent'> 
        <span> POAI </span>
        <span className='w-full  hidden md:flex flex-row justify-between items-center ' > 
         <Link href='/#tickets' scroll={true}>Tickets </Link>   
         <Link href='/#lineUp' to='/#lineUp' scroll={true}> Line Up</Link>  
         <Link href='/#book' scroll={true}>Book </Link>  
         <Link href='/#partner' scroll={true}> Partners </Link> 
             </span>
             <span className='w-full  hidden md:flex items-center justify-center'> 
             <span className='w-32 flex items-center justify-center font-semibold cursor-pointer hover:bg-[#f2910aad]   h-8 bg-[#F2910A] rounded-lg text-white uppercase tracking-wide'> 
              Get tickets
             </span>
             </span>

           
    </div> 
    </div>
    <div className='w-full h-full flex justify-between  flex-col '> 
    <span className='md:hidden tracking-widest text-6xl h-full w-full flex-col  uppercase font-bold translate-y-7 flex items-center justify-center text-center'> 
    <span className='text-xl uppercase tracking-normal text-[#f2910a]'>Poets on an Island</span>
    <span className='text-base lowercase italic tracking-normal text-[#E94822]'>presents</span>
    <span>Cyprus&apos; biggest  </span>
    <span>poetry event </span></span>
    <span className='hidden md:flex tracking-widest text-5xl md:text-7xl w-full flex-col  uppercase font-bold translate-y-7  items-center justify-center text-center'> 
    <span>Cyprus&apos; biggest  </span>
    <span>poetry event </span></span>
<span className=' uppercase w-full h-full z-10 font-bold  flex flex-col relative '>
  <Image src={BkmMain} alt='Poets on an Island' className='w-full bg-gradient-to-b  from-current to-transparent lg:object-contain object-cover' fill/>
   </span>
  
  </div>
  <span className='w-full  flex-row flex items-center justify-center absolute bottom-0  z-30 '> 
  <span  className=' triangle  '> </span></span>
    </div>
   
    <span className='h-20 md:h-32 w-full flex flex-col items-center justify-center gap-2 font-bold text-2xl md:text-5xl text-white bg-[#F2910A] '>
      
      <span> March 8th 2023</span>
      <span className='md:text-3xl text-base'>Bkm Theatre, Terminal, Lefkosa. </span> </span>
    </div>
  )
  
}

export default Main