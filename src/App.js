import React from 'react'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './pages/Destinations';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (

    <>

    <Router>
    <div class='container-bar'>

    <Navbar />

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/destinations' element={<Destinations />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/register' element={<Register />}/>
  <Route path='/dashboard' element={<Dashboard />}/>
</Routes>
    </div>
</Router>

<ToastContainer />
  </>)
}

export default App;
