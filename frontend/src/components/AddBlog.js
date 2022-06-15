import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import {React, useState} from 'react'
import axios from 'axios'

const labelStyles = {mb:1,mt:2,fontSize:'24px', fontWeight: 'bold'}
const AddBlog = () => {
  const [inputs, setinputs] = useState({
    title:"",
    description:"",
    imageURL:""
  });
  const handleChange=(e)=>{
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const sendRequest = async() => {
    const res = await axios.post("http://localhost:5000/api/blog/add",{
       title:inputs.title,
       description: inputs.description,
       image: inputs.imageURL,
       user: localStorage.getItem("userId")
    }).catch(err=>console.log(err))
    const data = await res.data;
    return data
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then((data)=>console.log(data))
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <Box
      border={3}
      borderColor='green'
      borderRadius={10}
      boxShadow='10px 10px 20px #ccc'
      padding={3}
      margin={'auto'}
      marginTop={4}
      display='flex'
      flexDirection={'column'}
      width={'80%'}
      >
        <Typography fontWeight={'bold'} padding={3} color='grey' variant='h2' textAlign={'center'} >Post Your Blog</Typography>
        <InputLabel sx={labelStyles}>Title</InputLabel>
        <TextField name="title" onChange={handleChange} value={inputs.title} margin='normal' variant='outlined' />
        <InputLabel sx={labelStyles} >Description</InputLabel>
        <TextField name="description" onChange={handleChange} value={inputs.description} margin='normal' variant='outlined' />

        <InputLabel sx={labelStyles} >ImageURL</InputLabel>
        <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin='normal' variant='outlined' />
        <Button sx={{mt:2, borderRadius: 4}} variant='contained' color='warning'  type="submit">Submit</Button>
      </Box>
    </form>
  </div>
}

export default AddBlog