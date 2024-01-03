import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
export default function Home() {
    const navig=useNavigate()
  return (
    <div>
     <div className='hrout'>
        <h1>application router</h1>
        <button onClick={()=>{navig('/Mapp')}}>pages</button>

        </div>   
      
    </div>
  )
}
