import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import Login from './login'
import Home from './Home'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const userContext = createContext()

function App() {
const [user, setUser] = useState({});

axios.defaults.withCredentials = true;
  useEffect(() => {
axios.get('http://localhost:3001/')
.then(user => {
  setUser(user.data)
})
.catch(err => console.log(err))
  }, [])
  return (
    <>
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  )
}

export default App
