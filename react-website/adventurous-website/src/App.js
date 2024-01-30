import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Accordian from './Accordian';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.js";
import 'bootstrap/dist/js/bootstrap';
import Forms from './Forms.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={Home}/>
        </Routes>
        <Accordian/>
      </Router>
    </>
  );
}
export default App;
