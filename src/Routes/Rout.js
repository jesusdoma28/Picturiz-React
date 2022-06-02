import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile'

function Rout() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          {/*<Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default Rout;
