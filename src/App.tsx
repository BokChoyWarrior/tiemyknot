import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Gifts } from './pages/Gifts';
import NotFound from './pages/NotFound';
import './styles/normalise.css';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/gift-view" element={<Home />}></Route>
          <Route path="/access" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/" element={<Home />}></Route>

          <Route path="/gifts" element={<Gifts isLoggedIn={isLoggedIn} />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
