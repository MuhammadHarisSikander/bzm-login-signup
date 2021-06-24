import React,{useState} from 'react'
import Form from '../components/inputText'
import Button from '../components/button'
// import { Link } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import Bg from '../assets/images/bg-img.jpg'


function Login() {
    const [opacity, setOpacity] = useState(0.5);
    return(
        <div style={{ backgroundImage:`url("https://cdn.hipwallpaper.com/i/79/74/Fa5vMG.jpg")` , justifyContent:'center',display:'flex',height:'100vh',alignItems:'center',}}>
            <div onMouseLeave={()=>{setOpacity("0.5")}} onMouseEnter={()=>{setOpacity("2")}} style={{backgroundColor:"white",padding:'50px',height:'25vh',textAlign:'center',borderRadius:'50px',opacity:opacity}} >
            <h2>Sign In</h2>
            <Form name={"Email"} />
            <Form type="password" name={"Password"} />
            <div style={{paddingTop:'20px'}}>
            <Button onClick={()=>{console.log("hello")}}  title="Sign in"  />
                </div> 
            {/* <div style={{padding:'20px'}}>
            <Link href="#" onClick={()=>{console.log("hello")}}>don't have an Account</Link>  
            <div>
            <Link to="/sdsada" >Forgot Password</Link>            
                </div>          
            </div> */}
            </div>
        </div>
    )
}
export default Login;


