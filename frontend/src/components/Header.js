import {React , useState} from 'react'
import { AppBar, Box, Button, Toolbar, Typography, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'
const Header = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const [value, setvalue] = useState()
  return <>
  <AppBar position="sticky" sx={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,75,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
    <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
      { isLoggedIn &&  <Box display="flex" marginLeft = {'auto'} marginRight = {'auto'}>
         <Tabs textcolors="inherit" value={value} onChange={(e,val)=>setvalue(val)} >
          <Tab LinkComponent={Link} to="/blogs" label = "All Blogs" />
          <Tab LinkComponent={Link} to="/myBlogs" label = "My Blogs" />
          <Tab LinkComponent={Link} to="/blogs/add" label = "Add Blog" />
         </Tabs>
         
        </Box>}
        <Box display="flex" marginLeft='auto'> 
{   !isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color="warning">Login</Button>           
      <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color="warning">Signup</Button> </>}
{     isLoggedIn && <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin: 1, borderRadius: 10}} color="warning">Logout</Button> }        
    </Box>
    </Toolbar>
  </AppBar>
  </>
  
}

export default Header

