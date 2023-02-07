import React from 'react'

function Regular() {
  return (
    <div className='w-full flex flex-col  mx-auto container items-center justify-center -translate-y-4'> 
         <span className='flex w-2/5  relative group cursor-pointer '> 
    <svg  viewBox="0 0 239 83" fill="#ffffff" className='w-full stroke-red-600  group-hover:fill-[#F2910A]' xmlns="http://www.w3.org/2000/svg">
    <path d="M0 57.7968V0C56.9092 20.1284 176.376 20.3477 239 0V57.7968C238.866 71.721 185.415 83 119.5 83C53.585 83 0.134344 71.721 0 57.7968Z" fill=""/>
    </svg>
    <span className=' text-black flex absolute inset-0 translate-y-3 text-2xl font-semibold items-center justify-center'>Regular</span>

    </span>

    </div>
  )
}

export default Regular