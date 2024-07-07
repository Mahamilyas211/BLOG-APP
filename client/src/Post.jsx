import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from './App'


const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)



    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid/' + id)
            .then(result => setPost(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deletepost/' + id)
            .then(result => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='post_container'>
            <div className='post_post'>
                <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <div>
                    {
                        user.email === post.email ?
                            <>
                                <Link to={`/editpost/${post._id}`}>Edit</Link>
                                <button onClick={e => handleDelete(post._id)}>Delete</button>
                            </> : <></>
                    }

                </div>
            </div>



        </div>
    )
}

export default Post