import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { username, email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="border border-gray-400 p-5 rounded-lg w-1/3">
        <h2 className='text-4xl font-bold text-center text-blue-900'>Sign Up</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username:</label> <br />
            <input
              type="text"
              placeholder="Enter username"
              className="p-2 rounded-md mt-1 w-full border border-gray-300"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 rounded-md mt-1 w-full border border-gray-300"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              placeholder="********"
              className="p-2 rounded-md mt-1 w-full border border-gray-300"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-blue-700 text-white p-2 rounded-md mt-2 w-full border border-gray-300">Sign up</button>
        </form>
        <br />
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="bg-green-500 text-white p-2 rounded-md mt-2 w-full border border-gray-300">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
