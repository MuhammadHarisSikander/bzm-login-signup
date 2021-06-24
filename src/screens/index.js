import React from 'react'
import Login from './login'
import Otp from './otp-screen'
import Reg from './registration'

function ScreenDispay({nums}) {

let pageIndex = 2;
let ScreenHandler = ()=>{
    switch (pageIndex) {
        case 1:
          return <Otp/>
            break;
        case 2:
            return <Login/>
            break;

        case 3:
            return <Reg/>
            break;
    
        default:
            return <Otp/>
            break;
    }

}

    return(
        <ScreenHandler/>
    )
}
export default ScreenDispay
