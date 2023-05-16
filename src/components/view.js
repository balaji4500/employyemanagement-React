import axios from "axios"
import React, { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReactToPrint } from "react-to-print"

export const View = ()=>{

const[contact,Setcontact]=useState([])   

const pdf=useRef();

const getcontact=()=>{
    return(
        axios.get("http://localhost:3000/posts").then((res)=>{
            Setcontact(res.data)
        }
        )
    )
}


useEffect(()=>{
    getcontact()
},[])


const deletedatas=(id)=>{
   axios.delete(` http://localhost:3000/posts/${id}`)
   getcontact()

}
const pdfs=useReactToPrint({
    content:()=>pdf.current,
    documentTitle:"details",
    onAfterPrint:()=>toast('Pdf download')
})

return(
    <div ref={pdf} style={{width:"100%"}}>
    <div id="dd">
<table id="details">
    <h1>Contact Details</h1>
    <button onClick={pdfs}>Download Pdf</button>
    <tr>
        <th>s.n0</th>
         <th>FIRSTNAME</th>
          <th>LASTNAME</th>
           <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ADDRESS</th>
            <th>EDIT | DELETE</th>
    </tr>

    { 
    contact.map((data,index)=>{

return(
    
    <tr key={index} >
<td id="td1">{index+1}</td>
<td>{data.firstname}</td>
<td>{data.lastname}</td>
<td>{data.email}</td>
<td>{data.password}</td>
<td>{data.Address}</td>
<td><Link to={`/edit/${data.id}`}><button id="btn1" on>Edit</button></Link> | <button id="btn2" onClick={()=>deletedatas(data.id)}>DELETE</button></td>
<td></td>
<ToastContainer />

    </tr>
)

    })

}




</table>
    </div>
    </div>

)
}

