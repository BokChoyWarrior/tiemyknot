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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}

                setUsername={setUsername}

                setPassword={setPassword}/>
      <main>
        <Routes>

          <Route
            path="/access"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          ></Route>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>

          <Route path="/gifts" element={<Gifts isLoggedIn={isLoggedIn} />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
