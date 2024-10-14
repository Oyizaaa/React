import React from 'react'
import Info from './Pages/Info'
import Index from './Pages/Index'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/info' element={<Info/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>

   </Routes>
   
   
   
   </BrowserRouter>


  )
}

export default App