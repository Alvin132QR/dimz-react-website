import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import UnlockPage from './unclocker/index';
import NoPage from './pages/blank.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" Component={Home} />
            <Route path="/download" Component={UnlockPage} />
          <Route path="/*" Component={NoPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
