import * as React from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';

export default function Forms() {
 

  const [firstname,Setfirstname]= useState("")
const[lastname,Setlastname]=useState("")
const[email,Setemail]=useState("")
const[password,Setpassword]=useState("")
const[Address,SetAddress]= useState("")

const Handleinput=(event)=>{
  Setfirstname(event.target.value)
}

  

  const onSubmit=(e)=>{
    e.preventDefault();
     const req={firstname,lastname,email,password,Address}
    return(
   axios.post(' http://localhost:3000/posts',req).then(()=>{
     }),alert("data saved")
      
     )

  }

  return (    
    
   
      <div id='form1'>
 
      <i>Apply your details here</i>
<br></br>

        <form  onSubmit={onSubmit}>  
       <TextField onChange={Handleinput} value={firstname} id="text1" label="Firtsname" placeholder='firtsname' variant="outlined" required  /> 
       <br/><br/>
      <TextField onChange={(e)=>{Setlastname(e.target.value)}}   value={lastname} id="text1" label="Lastname" placeholder='lastname' variant="outlined"  required /><br/><br/>
      <TextField onChange={(e)=>{Setemail(e.target.value)}}   value={email} id="text1" label="Email" placeholder='email' variant="outlined" required /> <br/><br/>
      <TextField  onChange={(e)=>{Setpassword(e.target.value)}}  value={password} id="text1" label="Password" placeholder='password' type='password' variant="outlined" required /><br/><br/>
      <TextField   onChange={(e)=>{SetAddress(e.target.value)}} value={Address} id="text1" label="Address" placeholder='address' variant="outlined" required /><br/><br/>
    <input type="submit"  id='btn' ></input>
    </form>
    </div>


  );
}