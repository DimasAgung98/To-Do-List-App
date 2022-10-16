import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT PAGES
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ToDoPage from './pages/ToDo';
import RegisterPage from './pages/RegisterPage';
//IMPORT REDUX
import { Provider } from 'react-redux';
import store from './app/store';
//IMPORT GLOBAL CSS
import './index.css';
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<ToDoPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
