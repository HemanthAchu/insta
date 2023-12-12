
import { TextField,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
const emailerror=document.getElementById('email-error')
const passs=document.getElementById('pass')
  const [show,setshow]=useState(false)
  const change=()=>{
  setshow(!show)
  }
  const userEmail=(e)=>{
    const name=e.target.value
    if (!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailerror.innerHTML="please enter a valid email"
      emailerror.style.color="red"
      return false
    }else{
      emailerror.innerHTML=""
      return true
  }
  }
const passwords=(e)=>{
  const name=e.target.value
  if (!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
   passs.innerHTML="wrong password"
   passs.style.color="red"
    return false;
  }else{
    passs.innerHTML=" "
    return true;
}
}

const handle=()=>{
  alert(`wrong password :(`)
}






  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center dark '>
      <div style={{width:'500px'}} className='bg-light p-5 rounded'><div style={{width:'100%',height:'50px'}} className='d-flex justify-content-center align-items-center'><img style={{width:'50px'}} src="https://imgs.search.brave.com/mTdYQvhbzNV9h0ZctWfiWrDYffkTx_vfQ4wNTCBYzWo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjEu/cG5n" alt="" /></div>
      <div style={{width:'100%' ,height:'30px'}} className='bg-light  p-5 d-flex justify-content-center align-items-center'>
      <TextField style={{width:'100%'}} id="inputfield" label="Username,email address or mobile number" variant="standard" name='hemanth'onChange={(e)=>userEmail(e)} />
      </div><p id='email-error' className='insta'></p>
    
      <div style={{width:'100%',height:'30px'}} className='bg-light username p-5 d-flex justify-content-center align-items-center'>
        <TextField style={{width:'100%'}} id="password" label="Password" variant="standard" type={show?'text':'password'} name='passwords' onChange={(e)=>passwords(e)} />
        <div onClick={change}>{show?<i class="fa-solid fa-eye-slash" ></i>:<i class="fa-solid fa-eye"></i>}</div>
      </div>
      <p className='insta' id='pass'></p>
      <div style={{width:'100%',height:'60px'}} className='d-flex justify-content-center align-items-center'><Button style={{width:'100%',height:'40px' ,borderRadius:'30px'}} variant="contained" onClick={handle}>Login</Button></div>
    </div>
   </div>

  )
}

export default App
