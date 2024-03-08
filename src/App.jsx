

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
BrowserRouter,
Routes,
Route,
Link,
} 

from "react-router-dom";
import Nav from './components/navigation'
import Home from './components/home'
import Signup from './components/signup'
import Admin from './components/adminlogin';

function App() {
const  [count, setCount] = useState('0')

  return (
    <>

   {/*  <Admin/>  */}
   

   
      <BrowserRouter>
      <Nav/>
 <Routes>
<Route  path="/" element={<Home />}>

</Route>
<Route  path="/Signup" element={<Signup/>}>

</Route>
<Route  path="/" element={<Home />}>

</Route>

<Route  path="/Admin" element={<Admin/>}>
</Route>

 </Routes>
  </BrowserRouter>
 
    </>
  )
}

export default App
