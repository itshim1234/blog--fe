import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import AllBlogs from "../src/Pages/Blogs/AllBlogs"
import BlogGenerator from "../src/Pages/BlogGenerator/BlogGenerator"

function App() {

  return (

   <Routes
  >
  <Route path="/create" element={<BlogGenerator />} />
            <Route path="/blogs" element={<AllBlogs />} />
  </Routes>

  )
}

export default App
