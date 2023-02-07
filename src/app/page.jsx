import Image from 'next/image'
import { Inter } from '@next/font/google'
import './globals.css'
import Main from 'components/main' 
import LineUp from 'components/lineUp'
import Ticket from 'components/ticket'



export default function Home() {
  return (
    <div> 
      
     <Main/>
     <LineUp/>
     <Ticket/>
   
      </div>
  )
}
