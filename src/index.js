import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

