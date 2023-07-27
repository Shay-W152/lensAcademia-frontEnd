// main.jsx
import React from 'react';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import createRoot from "react-dom/client"
import { createRoot } from 'react-dom/client';

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
