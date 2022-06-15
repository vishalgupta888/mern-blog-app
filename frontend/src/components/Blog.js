import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Blog = ({title,description,imageURL,userName, isUser}) => {
  return (
    <div>
      {""}
        <Card sx={{ width:'40%', margin:'auto', mt:2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover:":{
            boxShadow: "10px 10px 20px #ccc"
        },  }}>

          {isUser && (
           <Box display='flex'>
            <IconButton sx={{margin:'auto'}} ><EditIcon/></IconButton>
            <IconButton><DeleteIcon/></IconButton>
           </Box>
          )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{ userName }</b>{description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Blog