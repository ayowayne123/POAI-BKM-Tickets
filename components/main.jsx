import React from 'react'
import Image from 'next/image'
import Hero from '../public/Hero.png'
import BkmMain from '../public/BkmMain.png'


function Main() {
  return (
    <div id='home' className='overflow-hidden h-screen'> 
    <span className='text-7xl p-3 mx-60  uppercase font-bold  flex items-center justify-center text-center'> Cyprus&apos; biggest poetry event</span>
<span className='uppercase absolute bottom-0 left-0 right-0 font-bold  flex items-center justify-center '><Image src={BkmMain} alt='Poets on an Island' width={750}/> </span>
    </div>
  )
  
}

export default Main