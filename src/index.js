import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import BuyForm from './assets/Components/Form.js/BuyForm';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/signup" element={<BuyForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

