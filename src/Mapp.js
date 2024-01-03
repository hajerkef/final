import React, { useState } from 'react'
import Dr from './Dataroute'
import'bootstrap/dist/css/bootstrap.css'
import Add from './Add'

export default function Mapp() {
    const [coffs,setCoffs]=useState(Dr)
    const handle=(newCoff)=>{
      const updateCoff=[...coffs,{...newCoff,id:coffs.length+1}]
      setCoffs(updateCoff)}
  return (
    <div>
       {
        coffs.map((ele)=>(
            <div class="card" style={{width:"18rem"}} key={ele.id}>
  <img src={ele.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        ))
      
       }
       <Add onadd={handle}/>
    </div>
  )
      }
