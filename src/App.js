//importing useState hook from the react library
import React from 'react'; 
//COMPONENTS
import './App.css';
//ROUTER
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';


function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <h1>My Articles</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/article/:id' element={<Article />} />
          <Route 
            path="*" 
            element={<Navigate to='/' replace />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
