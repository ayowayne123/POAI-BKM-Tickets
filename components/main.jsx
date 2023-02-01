import React from 'react'
import Image from 'next/image'
import Hero from '../public/Hero.png'
import BkmMain from '../public/BkmMain.png'


function Main() {
  return (
    <div id='home' className='overflow-hidden '> 
    <span className='text-7xl p-3 mx-60  uppercase font-bold  flex items-center justify-center text-center'> Cyprus&apos; biggest poetry event</span>
<span className='uppercase w-2/3 bottom-0 left-0 right-0 font-bold  flex items-center justify-center '>
  <Image src={BkmMain} alt='Poets on an Island' width={900} height={900} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/> </span>
    </div>
  )
  
}

export default Main