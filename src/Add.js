import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';

export default function Add({onadd}) {
    const [newCoff,setNewCoff]=useState(
        {
            image:'',
            title:'',
            name:'',
           }
    )
    const vidadd=()=>{
        if(newCoff.name===' '||newCoff.title===''||newCoff.image===""){
          Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question",
          })
        }
    
    onadd(newCoff)
    setNewCoff(
        {
            image:'',
            title:'',
            name:'',
           }
    )
  }
  return (
    <div>
      <form>
      <input type="text" class="form-control" id="floatingInputValue" placeholder=" " value={newCoff.name} onChange={(e)=>setNewCoff({...newCoff, name: e.target.value})}/>
  <label for="floatingInputValue">name</label>
</form>
<form>
      <input type="text" class="form-control" id="floatingInputValue" placeholder=" " value={newCoff.title} onChange={(e)=>setNewCoff({...newCoff, title: e.target.value})}/>
  <label for="floatingInputValue">qualite</label>
</form>
<form>
      <input type="text" class="form-control" id="floatingInputValue" placeholder=" " value={newCoff.image} onChange={(e)=>setNewCoff({...newCoff, image: e.target.value})}/>
  <label for="floatingInputValue">image</label>
</form>
<button type="button" class="btn" onClick={vidadd}>addcff</button>


      
      
      
      
 

    </div>
  )
  
}
