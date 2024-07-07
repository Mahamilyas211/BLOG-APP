import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/register" element={<Register />} />  
      </Routes> 
   </BrowserRouter>
    </>
  )
}

export default App
