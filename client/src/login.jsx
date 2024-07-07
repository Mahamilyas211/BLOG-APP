import React from 'react'
import './App.css'
import { Link,  } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 p-5 rounded-lg w-1/3">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border rounded-lg"
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