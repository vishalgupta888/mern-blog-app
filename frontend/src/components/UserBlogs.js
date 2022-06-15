import { React, useEffect, useState} from 'react'
import axios from 'axios'
import Blog from './Blog';

const UserBlogs = () => {
  const [user, setuser] = useState()
  const id = localStorage.getItem('userId');
  const sendRequest = async()=>{
      const res = await axios.get(`http://localhost:5000/api/blog/user${id}`).catch((err)=>console.log(err))
      const data = await res.data
      return data
    }
  useEffect(() => {
    sendRequest().then((data)=>setuser(data.user))
  }, [])
  console.log(user)
  
  return 
    <div>
         {user && user.blogs  && user.blogs.map((blog,index)=> <Blog key={index} isUser={true} title={blog.title} description={blog.description} imageURL={blog.image} userName={user.name} /> )}

    </div>
}

export default UserBlogs