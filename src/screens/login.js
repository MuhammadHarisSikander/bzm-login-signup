import React from 'react'
import Form from '../components/inputText'
import Button from '../components/button'
import { Link } from '@material-ui/core';

function login() {
    return(
        <div style={{backgroundColor:'#ddd', justifyContent:'center',display:'flex',height:'100vh',alignItems:'center',}}>
            <div style={{backgroundColor:"white",padding:'50px',height:'30vh',textAlign:'center',borderRadius:'50px'}} >
            <h2>Sign In</h2>
            <Form name={"Email"} />
            <Form name={"Password"} />
            <div style={{paddingTop:'20px'}}>
            <Button  title="Sign up"  />
                </div> 
            <div style={{padding:'20px'}}>
            <Link href="#" onClick={()=>{console.log("hello");}}>don't have an Account</Link>  
            <div>
            <Link href="#" onClick={()=>{console.log("hello");}}>Forgot Password</Link>            
                </div>          
            </div>
            </div>
        </div>
    )
}
export default login;