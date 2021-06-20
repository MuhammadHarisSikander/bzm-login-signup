import React from 'react'
import Form from '../components/inputText'
import Button from '../components/button'
import { Link } from '@material-ui/core';

function reg() {
    return(
        <div style={{backgroundColor:'#ddd', justifyContent:'center',display:'flex',height:'100vh',alignItems:'center',}}>
            <div style={{backgroundColor:"white",padding:'70px',height:'60vh',textAlign:'center',borderRadius:'50px'}} >
            <h2>REGISTRATION</h2>
            <Form placeholder="sdasd" name={"First Name"} />
            <Form name={"Last Name"} />
            <Form name={"Email"} />
            <Form name={"Address"} />
            <Form name={"National ID"} />
            <Form name={"Country"} />  
            <Form name={"Password"} />  
            <Form name={"Confirm Password"} />  
            <Button  title="Sign up"  />
            <div style={{padding:'20px'}}>
            <Link href="#" onClick={()=>{console.log("hello");}}>Already Register</Link>            
            </div>
            </div>
        </div>
    )
}
export default reg;