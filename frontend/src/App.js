import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='max-w-full h-screen'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>  
          <Footer/>         
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
