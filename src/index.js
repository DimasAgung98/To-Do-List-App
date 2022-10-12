import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT PAGES
import LoginPage from './pages/LoginPage';
import ToDoPage from './pages/ToDo';
//IMPORT GLOBAL CSS
import './index.css';
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<ToDoPage />} />
    </Routes>
  </BrowserRouter>
);
