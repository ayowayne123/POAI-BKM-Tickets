import React from 'react'
import Indi from './indi'
import Isaac from '../public/Isaac.jpg'
import Realize from '../public/Realize.jpg'
import Ayomide from '../public/Ayomide.jpg'
import Izoduwa from '../public/Izoduwa.jpg'

function LineUp() {
  return (
    <div id='lineUp' className='relative '> 
    {/* Glassmorphic at background */}
      <span className=' backdrop-blur-[40px] -z-10 h-full w-full absolute '> </span>
  <span className='absolute  -z-20 left-0 top-0 flex flex-row justify-center  items-center mx-auto' >
  <svg  viewBox="0 0 620 486" fill="none" xmlns="http://www.w3.org/2000/svg" className=' lg:w-full'>
<path fillRule="evenodd" clipRule="evenodd" d="M333.437 0.266466C400.872 1.95 469.292 9.39698 520.856 52.8876C576.778 100.054 612.917 167.329 618.04 240.307C623.534 318.584 610.568 407.179 549.154 456.024C490.579 502.609 406.402 483.311 333.437 466.658C278.319 454.078 245.743 405.96 197.889 375.854C121.036 327.504 -9.84754 329.592 -26.3504 240.307C-42.446 153.225 62.754 92.4382 136.42 43.2901C194.55 4.50752 263.579 -1.47755 333.437 0.266466Z" fill="#EFD510" fillOpacity="0.2"/>
</svg>
</span>

    <div className='container pt-20 '>
      
        <span className='text-4xl font-bold uppercase'> <span className='text-[#F2910A]'>POAI</span> Line up</span>
        <span className='grid lg:grid-cols-4 gap-3 py-4'> 
     <Indi image={Isaac}
      socialFB='https://www.facebook.com/'
      socialTW='https://twitter.com'
       socialIG='https://www.Instagram.com/'
       page='/isaacYamie'
       name='Isaac Yamie'
       />
     <Indi image={Realize}
      socialFB='https://www.facebook.com/'
      socialTW='https://twitter.com'
       socialIG='https://www.Instagram.com/'
       page='/reeTheWordsmith' 
       name='Ree The Wordsmith'
       />
     <Indi  image={Izoduwa}
      socialFB='https://www.facebook.com/'
      socialTW='https://twitter.com'
       socialIG='https://www.Instagram.com/'
       page='/izoduwaMoya' 
       name='Izoduwa Moya'
       />
     <Indi image={Ayomide}
      socialFB='https://www.facebook.com/'
      socialTW='https://twitter.com'
       socialIG='https://www.Instagram.com/'
       page='/ayomideWayne' 
       name='Ayomide Wayne'
       />
     </span>
    </div>
    </div>
  )
}

export default LineUp