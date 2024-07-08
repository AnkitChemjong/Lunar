import React from 'react';
import Form from './form.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function next() {
  const navigate=useNavigate();
  const reg= async (e,data)=>{
    e.preventDefault();
    
      if(data.userName===''||data.password===''||data.email===''){
        navigate('/form')
        window.alert("Please fill up credentials")

      }
      else{
        await axios.post('http://localhost:8080/user/create',data).then((response)=>{

          navigate('/next')
          window.alert("Registered now login")
        }).catch((error)=>{console.log(error)});
      }
  }
  return (
   <>
   <Form type="SignIn" func={reg}/>
   </>
  )
}
