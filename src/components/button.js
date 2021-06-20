import React from 'react'
import { Button } from '@material-ui/core';

function btn({title},props) {
    return(
        
        <Button variant="contained" color="primary" > {title} </Button>
    )
}
export default btn