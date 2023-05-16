import * as React from "react";
import axios from 'axios';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 export const Edit=()=>{


//using use params to get data
  
  const userid =useParams();
  const useriid=Object.values(userid)

    //using to show the data from id

    const [firstname,Setfirstname]= useState("")
    const[lastname,Setlastname]=useState("")
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
    const[Address,SetAddress]= useState("")

    
const Handleinput=(event)=>{
    Setfirstname(event.target.value)
  }

// get from id

  const getcontact=()=>{
    return(
        axios.get(`http://localhost:3000/posts/${useriid}`).then((res)=>{
        Setfirstname(res.data.firstname);
        Setlastname(res.data.lastname);
        Setemail(res.data.email);
        Setpassword(res.data.password);
        SetAddress(res.data.Address);
        }
        )
    )
}


useEffect(()=>{
    getcontact()
},[])



//update contacts

  const update=(id)=>{
    const req={firstname,lastname,email,password,Address}
    return(
        axios.put(`http://localhost:3000/posts/${useriid}`,req).then((res)=>{
              })
               
    )
  }
  
  const onSubmit=(e)=>{
    e.preventDefault();
    return(
        update(),toast('succesfully updated')
        
     )
  }



return(
    <div id='form2'>
    <i>Edit yuor details here</i>====
    <span>
        <Link to="/view"><button id="back">Back</button></Link>
    </span>
<br/><br/>
      <form onSubmit={onSubmit} >  
     <TextField onChange={Handleinput} value={firstname} id="text1" label="Firtsname" placeholder='firtsname' variant="outlined"   /> 
     <br/><br/>
    <TextField onChange={(e)=>{Setlastname(e.target.value)}}   value={lastname} id="text1" label="Lastname" placeholder='lastname' variant="outlined"   /><br/><br/>
    <TextField onChange={(e)=>{Setemail(e.target.value)}}   value={email} id="text1" label="Email" placeholder='email' variant="outlined" /> <br/><br/>
    <TextField  onChange={(e)=>{Setpassword(e.target.value)}}  value={password} id="text1" label="Password" placeholder='password' type='password' variant="outlined"  /><br/><br/>
    <TextField   onChange={(e)=>{SetAddress(e.target.value)}} value={Address} id="text1" label="Address" placeholder='address' variant="outlined"  /><br/><br/>
      <input type="submit" onClick={()=>update} id='btn'></input>
      <ToastContainer />

  </form>
</div>

)

}