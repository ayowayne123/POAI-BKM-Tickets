import React from 'react'
import Stage from './stage'
import Regular from './regular'

function Ticket() {
  return (
    <div className='hidden lg:block'>
        <Stage/>
        <Regular/>
        <Regular/>
    </div>
  )
}

export default Ticket