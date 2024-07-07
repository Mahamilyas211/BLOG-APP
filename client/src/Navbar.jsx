import React from 'react'
import './App.css'
import { Link,  } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="w-full h-10 py-4 px-6 text-white flex justify-between items-center bg-gradient-to-r from-blue-900 via-red-700 to-blue-800">
  <div>
    <h3>BLOG APP</h3>
  </div>
  <div className="flex space-x-2">
    <a href="" className="text-white no-underline mx-2">HOME</a>
    <a href="" className="text-white no-underline mx-2">CREATE BLOG</a>
    <a href="" className="text-white no-underline mx-2">CONTACT</a>
  </div>
  <div>
  <div><h5><Link to="/register" className="text-white no-underline mx-2">Register/Login</Link></h5></div>
  </div>
</div>
  )
}

export default Navbar