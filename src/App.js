import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './pages/Destinations';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

    <>
    <div class='App'>

    </div>

 
    <BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/destinations' element={<Destinations />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/register' element={<Register />}/>
</Routes>

</BrowserRouter>

  </>)
}

export default App;
