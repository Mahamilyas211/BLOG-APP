import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import Login from './login'

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/register" element={<Register />} />  
    <Route path="/login" element={<Login />} />  

      </Routes> 
   </BrowserRouter>
    </>
  )
}

export default App
