import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserLogin } from './pages/UserLogin';
import { Gifts } from './pages/Gifts';
import NotFound from './pages/NotFound';
import './styles/normalise.css';
import './App.css';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState();

  return (
    <Router>
      <NavBar userLoggedIn={userLoggedIn} />
      <main>
        <Routes>
          <Route path="/access" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/userLogin"
            element={<UserLogin userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />}
          ></Route>
          <Route path="/gifts" element={<Gifts />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
