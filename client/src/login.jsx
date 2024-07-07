import React, { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {
        if (res.data === "Success") {
          navigate('/')
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 p-5 rounded-lg w-1/3">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded-lg"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border rounded-lg"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full p-2 rounded-lg bg-blue-600 text-white">Login</button>
        </form>
        <p className="mt-4">Not Registered?</p>
        <Link to="/register">
          <button className="w-full p-2 rounded-lg bg-green-600 text-white mt-2">Signup</button>
        </Link>
      </div>
    </div>
  )
}

export default Login