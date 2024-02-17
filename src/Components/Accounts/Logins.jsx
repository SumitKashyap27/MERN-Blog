import React from 'react'
import {Box, Button, TextField,} from '@mui/material'
const Logins = () => {
  return (
    <Box>
        <TextField variant="standard"/>
        <TextField variant="standard"/>
        <Button variant="contained">Login</Button>
        <Button>Create an account</Button>
    </Box>
  )
}

export default Logins