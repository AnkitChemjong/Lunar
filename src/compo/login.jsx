import React,{useContext} from 'react'
import From from './form.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context.jsx';


export default function login() {
  const {flag,setFlag}=useContext(AppContext);
  const navigate=useNavigate();
  const log= async (e,data)=>{
    e.preventDefault();
  
      if(data.password===''||data.email===''){
        navigate('/next')

      }
      else{
        await axios.post('http://localhost:8080/user/log',data,{ withCredentials: true}).then((response)=>{
          window.alert("Login Success!")
          navigate('/')
          setFlag(flag+1);
          //window.location.reload();
        }).catch((error)=>{
          console.log(error)
          window.alert("Login Error!")
        }
          );
      }
  }
  return (
    <>
    <From type="LogIn" func={log}/>
    </>
  )
}
