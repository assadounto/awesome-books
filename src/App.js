import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="logo">BookStore CMS</div>
        <nav className="NavMenu">
          <Link to="/" className="BOOKS Text-Style-3">BOOKS</Link>
          <Link to="/Categories" className="CATEGORIES Text-Style-3">CATEGORIES</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
