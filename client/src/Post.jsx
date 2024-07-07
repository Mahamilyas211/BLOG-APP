import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Post = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid/'+ id)
        .then(result=> setPost(result.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='post_container'>
        <div className='post_post'>
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
           
        </div>        
    </div>
  )
}

export default Post