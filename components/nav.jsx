import React from 'react'
import Link from 'next/link'


function Nav() {
  return (
    <div className=' relative' >
        <span className=' backdrop-blur-[10px] -z-10 h-full w-full absolute '> </span>
  <span className='absolute top-0 -z-20 right-0 ' >
  <svg width="383" height="457" viewBox="0 0 383 457" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M179.78 9.04145C240.598 -4.27955 315.315 -8.6697 357.175 37.4933C398.57 83.142 381.193 155.264 366.737 215.213C355.844 260.384 316.55 287.035 288.142 323.773C251.74 370.849 239.211 455.907 179.78 456.99C120.516 458.069 102.813 375.415 67.4036 327.794C40.2771 291.312 0.276022 260.703 0.00155725 215.213C-0.273918 169.555 36.0529 135.648 66.0369 101.262C99.3956 63.0059 130.245 19.8912 179.78 9.04145Z" fill="#EFD510" fill-opacity="0.2"/>
</svg>

    </span>
      <div className='w-full h-16  grid grid-cols-3 px-5 items-center bg-transparent'> 
        <span> POAI </span>
        <span className='w-full  flex flex-row justify-between items-center ' > 
         <Link href='/#tickets' scroll={true}>Tickets </Link>   
         <Link href='/#lineUp' to='/#lineUp' scroll={true}> Line Up</Link>  
         <Link href='/#book' scroll={true}>Book </Link>  
         <Link href='/#partner' scroll={true}> Partners </Link> 
             </span>

           
    </div> 
    </div>
  )
}

export default Nav