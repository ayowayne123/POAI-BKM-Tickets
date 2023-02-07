import React from 'react'
import Indi from './indi'
import Isaac from '../public/Isaac.jpg'

function LineUp() {
  return (
    <div className='container'>
        <span> POAI Line up</span>
        <span className='grid lg:grid-cols-4 gap-3 '> 
     <Indi image={Isaac}
      socialFB='https://www.facebook.com/'
      socialTW='https://twitter.com'
       socialIG='https://www.Instagram.com/'
       page='/isaacYamie' />
     {/* <Indi/>
     <Indi/>
     <Indi/> */}
     </span>
    </div>
  )
}

export default LineUp