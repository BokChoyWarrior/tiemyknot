import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';

import { fakeData } from './fakeData/fakeData';
import { Login } from './pages/Login';
import { Gifts } from './pages/Gifts';
import NotFound from './pages/NotFound';
import './styles/normalise.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/gift-view" element={<Home />}></Route>
          <Route path="/access" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gifts" element={<Gifts gifts={fakeData} />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
