import React from 'react'
import { Button } from '@material-ui/core';

function btn({title,onClick}) {
    return(
        
        <Button onClick={onClick}  variant="contained" color="primary" > {title} </Button>
    )
}
export default btn