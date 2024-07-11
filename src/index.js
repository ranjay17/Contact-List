
//importing require packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Creating root element and rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrapping the App component with Router for routing */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
