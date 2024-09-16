import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Profile from './pages/Profile';
import Footer from './components/footer/Footer';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar setAuth={setAuth} auth={auth} user={user} />
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/posts" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} setAuth={setAuth} />} />
        {user && (
          <Route path={`/profile/${user.id}`} element={<Profile user={user} />} />
        )}
        <Route path="/posts" element={auth ? <Posts userId={user?.id} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
