import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { InputLabel ,FormHelperText,Input } from '@material-ui/core';

function inputText({name,type}) {
    return(
<FormControl style={{display:'block', paddingBottom:"5px"}}>
  <InputLabel>{name}</InputLabel>
  <Input type={type} id="my-input" aria-describedby="my-helper-text" />
</FormControl>
    )
}
export default inputText;
