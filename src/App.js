import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="logo">AwesomeBooks </div>
        <nav className="NavMenu">
          <Link to="/" className="Books Link">  Books    </Link>
          <Link to="/Categories" className="Categories Link"> Categories</Link>
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
