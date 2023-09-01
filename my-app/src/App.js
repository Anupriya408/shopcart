import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Catalogue from './Components/Catalouge';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Catalogue</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Catalogue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
