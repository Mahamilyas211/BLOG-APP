import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
      .then(posts => {
        setPosts(posts.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2 className='text-5xl text-center my-4 text-blue-800 text-bold '>Welcome! to Blog App</h2>
      <div class="max-w-prose mx-auto p-4 text-bold">
        <p class="text-gray-800 text-lg leading-relaxed ">
          In this blog app, you can read and post your blogs. Additionally, you can update and delete your posts. For added convenience, you can register and log in. To edit or delete a post, simply click on the blog you want to modify. If the edit and delete buttons do not appear, it might be because you are not logged in or registered and if you sign in and still its not showing edit or delete just refresh it.Also you first have to login to create a post.
        </p>
      </div>
      <div className='posts_container'>
        {
          posts.map(post => (
            <Link to={`/post/${post._id}`} className='post'>

              <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
              <div className='post_text'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>

            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Home