import React from 'react'
import Link from 'next/link'


function Nav() {
  return (
    <div className='w-full h-16 grid grid-cols-3 px-5 items-center' >
        <span> POAI </span>
        <span className='w-full  flex flex-row justify-between items-center ' > 
         <Link href='/#tickets' scroll={true}>Tickets </Link>   
         <Link href='/#lineUp' to='/#lineUp' scroll={true}> Line Up</Link>  
         <Link href='/#book' scroll={true}>Book </Link>  
         <Link href='/#partner' scroll={true}> Partners </Link> 
             </span>
       
    </div>
  )
}

export default Nav