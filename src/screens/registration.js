import React,{useState} from 'react'
import Form from '../components/inputText'
import Button from '../components/button'
import { Link } from '@material-ui/core';


function Reg() {
    const [opacity, setOpacity] = useState(0.5);

 

    return(
        <div style={{backgroundImage:`url("https://wallpaperaccess.com/full/1119975.jpg")`, justifyContent:'center',display:'flex',height:'100vh',alignItems:'center',}}>
            <div onMouseLeave={()=>{setOpacity("0.5")}} onMouseEnter={()=>{setOpacity("2")}} style={{backgroundColor:"white",padding:'50px',height:'55vh',textAlign:'center',borderRadius:'50px',opacity:opacity}} >
            <h2>REGISTRATION</h2>
            <Form name={"First Name"} />
            <Form name={"Last Name"} />
            <Form name={"Email"} />
            <Form name={"Address"} />
            <Form name={"National ID"} />
            <Form type="password" name={"Password"} />  
            <Form type="password" name={"Confirm Password"} />  
            <div style={{marginTop:'20px'}}>
            <Button onClick={()=>{alert("Registartion Completed")}}  title="Sign up"  />
            </div>
            <div style={{padding:'20px'}}>
            <Link onClick={()=>{window.location='/signin'}}>Already Register</Link>            
            </div>
            </div>
        </div>
    )
}
export default Reg;