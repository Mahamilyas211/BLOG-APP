import React, { useContext } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './App'
import axios from 'axios'

function Navbar() {
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
        .then(res => {
            if(res.data === "Success")
            window.location.href = "/"
        }).catch(err => console.log(err))
    }
    
  return (
    <div className='navbar-header'>
        <div><h3>Blog App</h3></div>
        <div>
            <Link to="/" className='link'>Home</Link>
            <a href="" className='link'>Create</a>

            <a href="" className='link'>Contact</a>
        </div>
        {
            user.username ?
            <div>
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
    
        }
    </div>
  )
}

export default Navbar